import { curriculumCatalog, curriculumDirectory, isCurriculumPlaceholder } from "../src/curriculumCatalog.js";

const gradeOrder = Object.keys(curriculumDirectory);
const gradeRank = grade => {
  if (grade.startsWith("Pre-Primary")) return Number(grade.at(-1)) - 2;
  return Number(grade.replace("Grade ", ""));
};
const orderedGrades = [...gradeOrder].sort((a, b) => gradeRank(a) - gradeRank(b));

const normalize = value => String(value)
  .toLowerCase()
  .replace(/\(\d+\s+lessons?\)/gi, "")
  .replace(/^\s*\d+(?:\.\d+)?\s*/, "")
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .trim();

const indexedLabels = (grade, subject) => {
  const entry = curriculumCatalog[grade]?.[subject];
  if (!entry || entry.reviewRequired || isCurriculumPlaceholder(null, entry)) return null;
  return (entry.strands ?? []).flatMap(strand =>
    (strand.subStrands ?? [])
      .filter(item => typeof item === "string" && !isCurriculumPlaceholder(item))
      .map(item => ({ label: item, normalized: normalize(item) }))
  ).filter(item => item.normalized);
};

const findings = [];
let comparedPairs = 0;
for (let index = 1; index < orderedGrades.length; index += 1) {
  const previousGrade = orderedGrades[index - 1];
  const currentGrade = orderedGrades[index];
  const subjects = curriculumDirectory[previousGrade]?.subjects ?? [];
  for (const subject of subjects) {
    if (!(curriculumDirectory[currentGrade]?.subjects ?? []).includes(subject)) continue;
    const previous = indexedLabels(previousGrade, subject);
    const current = indexedLabels(currentGrade, subject);
    if (!previous || !current) continue;
    comparedPairs += 1;
    const previousSet = new Set(previous.map(item => item.normalized));
    for (const item of current) {
      if (previousSet.has(item.normalized)) {
        findings.push({ previousGrade, currentGrade, subject, label: item.label });
      }
    }
  }
}

console.log("MwalimuPro Kenya — adjacent-grade sequence review");
console.log("=================================================");
console.log("This is a screening report, not an automatic curriculum judgement.");
console.log("Repeated labels can be intentional spiralling; each finding needs teacher/KICD review.");
console.log(`Adjacent grade/subject pairs compared: ${comparedPairs}`);
console.log(`Repeated sub-strand labels to review: ${findings.length}`);
if (findings.length) {
  for (const item of findings) {
    console.log(`REVIEW | ${item.previousGrade} → ${item.currentGrade} | ${item.subject} | ${item.label}`);
  }
} else {
  console.log("No exact repeated labels found in the indexed adjacent-grade pairs.");
}
