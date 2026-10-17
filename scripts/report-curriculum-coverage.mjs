import { curriculumCatalog, curriculumDirectory, isCurriculumPlaceholder } from "../src/curriculumCatalog.js";

const rows = [];
for (const [grade, directory] of Object.entries(curriculumDirectory)) {
  for (const subject of directory.subjects ?? []) {
    const entry = curriculumCatalog[grade]?.[subject];
    const topicCount = (entry?.strands ?? []).reduce(
      (sum, strand) => sum + (strand.subStrands ?? []).length,
      0
    );
    let status = "NOT_INDEXED";
    if (entry?.reviewRequired === true) status = "REVIEW_REQUIRED";
    else if (entry && isCurriculumPlaceholder(null, entry)) status = "SOURCE_ONLY";
    else if (entry && topicCount > 0) status = "INDEXED_NEEDS_TEACHER_VERIFICATION";

    rows.push({
      grade,
      subject,
      status,
      topicCount,
      sourceUrl: entry?.sourceUrl ?? directory.url ?? ""
    });
  }
}

const counts = rows.reduce((acc, row) => {
  acc[row.status] = (acc[row.status] ?? 0) + 1;
  return acc;
}, {});

console.log("MwalimuPro Kenya — curriculum coverage audit");
console.log("============================================");
const indexedCount = counts.INDEXED_NEEDS_TEACHER_VERIFICATION ?? 0;
const indexedPercent = rows.length ? (indexedCount / rows.length * 100).toFixed(1) : "0.0";
console.log(`Catalogue entries checked: ${rows.length}`);
console.log(`Indexed topic coverage: ${indexedCount}/${rows.length} (${indexedPercent}%)`);
for (const status of [
  "INDEXED_NEEDS_TEACHER_VERIFICATION",
  "SOURCE_ONLY",
  "REVIEW_REQUIRED",
  "NOT_INDEXED"
]) {
  console.log(`${status}: ${counts[status] ?? 0}`);
}
console.log("\nPer-grade summary");
for (const grade of Object.keys(curriculumDirectory)) {
  const gradeRows = rows.filter(row => row.grade === grade);
  const gradeCounts = gradeRows.reduce((acc, row) => {
    acc[row.status] = (acc[row.status] ?? 0) + 1;
    return acc;
  }, {});
  console.log(
    `${grade}: ${gradeRows.length} subjects | indexed ${gradeCounts.INDEXED_NEEDS_TEACHER_VERIFICATION ?? 0} (${gradeRows.length ? ((gradeCounts.INDEXED_NEEDS_TEACHER_VERIFICATION ?? 0) / gradeRows.length * 100).toFixed(1) : "0.0"}%) | source-only ${gradeCounts.SOURCE_ONLY ?? 0} | review ${gradeCounts.REVIEW_REQUIRED ?? 0} | missing ${gradeCounts.NOT_INDEXED ?? 0}`
  );
}

const unresolved = rows.filter(row => row.status !== "INDEXED_NEEDS_TEACHER_VERIFICATION");
if (unresolved.length) {
  console.log("\nEntries requiring follow-up (grade | subject | status | source)");
  for (const row of unresolved) {
    console.log(`${row.grade} | ${row.subject} | ${row.status} | ${row.sourceUrl}`);
  }
}
