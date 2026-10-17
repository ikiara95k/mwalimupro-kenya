import { curriculumCatalog } from "../src/curriculumCatalog.js";

const errors = [];
let subjectCount = 0;
let indexedSubStrandCount = 0;
let sourceOnlyCount = 0;
const placeholderPattern = /use the official KICD .* to confirm the current strand and sub-strand sequence/i;

for (const [grade, subjects] of Object.entries(curriculumCatalog)) {
  for (const [subject, curriculum] of Object.entries(subjects)) {
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
        } else if (placeholderPattern.test(item)) {
          // Explicit source-only placeholder: valid catalog record, but not a usable topic.
        } else {
          hasIndexedTopic = true;
          indexedSubStrandCount += 1;
        }
      }
    }
    if (!hasIndexedTopic) sourceOnlyCount += 1;
  }
}

if (errors.length) {
  console.error("Curriculum catalog validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Curriculum catalog structure OK: ${subjectCount} grade/subject entries; ${indexedSubStrandCount} indexed sub-strand items; ${sourceOnlyCount} source-linked entries still awaiting topic indexing.`);
}
