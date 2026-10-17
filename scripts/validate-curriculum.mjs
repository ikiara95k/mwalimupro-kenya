import { readFileSync } from "node:fs";
import { curriculumCatalog, curriculumDirectory, isCurriculumPlaceholder } from "../src/curriculumCatalog.js";

const errors = [];
let subjectCount = 0;
let indexedSubStrandCount = 0;
let sourceOnlyCount = 0;
let reviewRequiredCount = 0;

// Detect duplicate subject keys before JavaScript silently overwrites them in the catalog object.
const catalogSource = readFileSync(new URL("../src/curriculumCatalog.js", import.meta.url), "utf8");
const catalogObjectStart = catalogSource.indexOf("export const curriculumCatalog = {");
if (catalogObjectStart < 0) {
  errors.push("src/curriculumCatalog.js: export const curriculumCatalog was not found");
} else {
  const gradeNames = Object.keys(curriculumDirectory);
  for (let index = 0; index < gradeNames.length; index += 1) {
    const grade = gradeNames[index];
    const start = catalogSource.indexOf(`  "${grade}": {`, catalogObjectStart);
    const nextGrade = gradeNames[index + 1];
    const end = nextGrade
      ? catalogSource.indexOf(`  "${nextGrade}": {`, start)
      : catalogSource.indexOf("// One shared rule", start);
    if (start < 0 || end < 0) {
      errors.push(`${grade}: could not inspect catalog source for duplicate keys`);
      continue;
    }
    const block = catalogSource.slice(start, end);
    const keys = [...block.matchAll(/^    (?:"([^"]+)"|([A-Za-z][A-Za-z0-9 &'/-]*)):\s*\{/gm)]
      .map(match => match[1] || match[2]);
    const counts = new Map();
    for (const key of keys) counts.set(key, (counts.get(key) || 0) + 1);
    for (const [key, count] of counts) {
      if (count > 1) errors.push(`${grade}: duplicate subject key "${key}" appears ${count} times`);
    }
  }
}


for (const [grade, subjects] of Object.entries(curriculumCatalog)) {
  if (!curriculumDirectory[grade]) errors.push(`${grade}: catalog grade is missing from the grade directory`);
  for (const [subject, curriculum] of Object.entries(subjects)) {
    if (!curriculumDirectory[grade]?.subjects?.includes(subject)) {
      errors.push(`${grade} / ${subject}: catalog subject is not listed in the grade directory`);
    }
    subjectCount += 1;
    const label = `${grade} / ${subject}`;
    if (!curriculum.title?.trim()) errors.push(`${label}: missing title`);
    if (!/^https:\/\//i.test(curriculum.sourceUrl || "")) errors.push(`${label}: missing or non-HTTPS source URL`);
    if (curriculum.reviewRequired === true) {
      if (!curriculum.reviewReason?.trim()) errors.push(`${label}: reviewRequired is true but reviewReason is missing`);
      if (!isCurriculumPlaceholder(null, curriculum)) errors.push(`${label}: review-required entry is not blocked from scheme generation`);
    }
    if (!Array.isArray(curriculum.strands) || curriculum.strands.length === 0) {
      errors.push(`${label}: no strands defined`);
      continue;
    }
    let hasIndexedTopic = false;
    for (const strand of curriculum.strands) {
      if (!strand.name?.trim()) errors.push(`${label}: a strand has no name`);
      if (!Array.isArray(strand.subStrands) || strand.subStrands.length === 0) {
        errors.push(`${label} / ${strand.name || "unnamed strand"}: no sub-strands`);
        continue;
      }
      for (const item of strand.subStrands) {
        if (typeof item !== "string" || !item.trim()) {
          errors.push(`${label} / ${strand.name}: blank or non-text sub-strand`);
        } else if (isCurriculumPlaceholder(item)) {
          // Explicit source-only placeholder: valid catalog record, but not a usable topic.
        } else {
          hasIndexedTopic = true;
          indexedSubStrandCount += 1;
        }
      }
    }
    // Duplicate sub-strand labels within a subject usually indicate an indexing mistake.
    const seenSubStrands = new Map();
    for (const strand of curriculum.strands || []) {
      for (const item of strand.subStrands || []) {
        const label = typeof item === "string" ? item : item?.name || item?.subStrand || "";
        const normalized = label
          .toLowerCase()
          .replace(/\(\d+\s+lessons?\)/i, "")
          .replace(/^\s*\d+(?:\.\d+)?\s*/, "")
          .trim();
        if (!normalized || isCurriculumPlaceholder(label)) continue;
        if (seenSubStrands.has(normalized)) {
          errors.push(label + ': duplicate sub-strand label in ' + grade + ' ' + subject + ' (also listed as "' + seenSubStrands.get(normalized) + '")');
        } else {
          seenSubStrands.set(normalized, label);
        }
      }
    }
    if (curriculum.reviewRequired === true) reviewRequiredCount += 1;
    else if (isCurriculumPlaceholder(null, curriculum) || !hasIndexedTopic) sourceOnlyCount += 1;

    // Where every sub-strand has an explicit lesson count, verify it against the declared total.
    // Placeholder-only and partial allocations are not treated as complete totals.
    const allocationValues = (curriculum.strands || []).flatMap(strand => strand.subStrands || []).map(item => {
      const match = typeof item === "string" ? item.match(/\((\d+)\s+lessons?\)/i) : null;
      return match ? Number(match[1]) : null;
    });
    if (!curriculum.reviewRequired && curriculum.totalSuggestedLessons && allocationValues.length > 0 && allocationValues.every(value => value !== null)) {
      const allocationTotal = allocationValues.reduce((sum, value) => sum + value, 0);
      const fullAllocationTotal = allocationTotal + (curriculum.additionalShowcaseLessons || 0);
      if (fullAllocationTotal !== curriculum.totalSuggestedLessons) {
        errors.push(`${label}: sub-strand lesson allocations plus showcase lessons sum to ${fullAllocationTotal}, but totalSuggestedLessons is ${curriculum.totalSuggestedLessons}`);
      }
    } else if (!curriculum.reviewRequired && curriculum.totalSuggestedLessons) {
      const strandAllocations = (curriculum.strands || []).map(strand => {
        const match = (strand.name || "").match(/\((\d+)\s+lessons across strand\)/i);
        return match ? Number(match[1]) : null;
      });
      if (strandAllocations.length > 0 && strandAllocations.every(value => value !== null)) {
        const strandTotal = strandAllocations.reduce((sum, value) => sum + value, 0);
        const fullStrandTotal = strandTotal + (curriculum.additionalShowcaseLessons || 0);
        if (fullStrandTotal !== curriculum.totalSuggestedLessons) {
          errors.push(`${label}: strand-level lesson allocations plus showcase lessons sum to ${fullStrandTotal}, but totalSuggestedLessons is ${curriculum.totalSuggestedLessons}`);
        }
      }
    }
  }
}

// Every subject listed in the official grade directory must have a catalog record.
 // Source-only placeholders are allowed, but missing grade/subject records are not.
for (const [grade, directory] of Object.entries(curriculumDirectory)) {
  for (const subject of directory.subjects ?? []) {
    if (!curriculumCatalog[grade]?.[subject]) {
      errors.push(`${grade} / ${subject}: directory subject has no catalog record`);
    }
  }
}

if (errors.length) {
  console.error("Curriculum catalog validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Curriculum catalog structure OK: ${subjectCount} grade/subject entries; ${indexedSubStrandCount} indexed sub-strand items; ${sourceOnlyCount} source-linked entries awaiting indexing; ${reviewRequiredCount} entries require manual review.`);
}
