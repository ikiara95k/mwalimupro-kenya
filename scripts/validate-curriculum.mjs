import { curriculumCatalog, curriculumDirectory, isCurriculumPlaceholder } from "../src/curriculumCatalog.js";

const errors = [];
let subjectCount = 0;
let indexedSubStrandCount = 0;
let sourceOnlyCount = 0;


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
    if (isCurriculumPlaceholder(null, curriculum) || !hasIndexedTopic) sourceOnlyCount += 1;

    // Where every sub-strand has an explicit lesson count, verify it against the declared total.
    // Placeholder-only and partial allocations are not treated as complete totals.
    const allocationValues = (curriculum.strands || []).flatMap(strand => strand.subStrands || []).map(item => {
      const match = typeof item === "string" ? item.match(/\((\d+)\s+lessons?\)/i) : null;
      return match ? Number(match[1]) : null;
    });
    if (curriculum.totalSuggestedLessons && allocationValues.length > 0 && allocationValues.every(value => value !== null)) {
      const allocationTotal = allocationValues.reduce((sum, value) => sum + value, 0);
      const fullAllocationTotal = allocationTotal + (curriculum.additionalShowcaseLessons || 0);
      if (fullAllocationTotal !== curriculum.totalSuggestedLessons) {
        errors.push(`${label}: sub-strand lesson allocations plus showcase lessons sum to ${fullAllocationTotal}, but totalSuggestedLessons is ${curriculum.totalSuggestedLessons}`);
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
  console.log(`Curriculum catalog structure OK: ${subjectCount} grade/subject entries; ${indexedSubStrandCount} indexed sub-strand items; ${sourceOnlyCount} source-linked entries still awaiting topic indexing.`);
}
