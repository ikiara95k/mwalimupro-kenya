// Official KICD curriculum-design directory for regular learners.
// Grade/subject names are listed as navigation aids; always verify the actual design on KICD.
export const KICD_CURRICULUM_URL = "https://kicd.ac.ke/cbc-materials/curriculum-designs/";
const ROOT = "https://kicd.ac.ke/cbc-materials/curriculum-designs/";

const primarySubjects = [
  "Agriculture", "Arabic", "Creative Arts", "CRE", "English", "French",
  "German", "HRE", "Indigenous Language", "IRE", "Kiswahili", "Mandarin",
  "Mathematics", "Science & Technology", "Social Studies"
];
const juniorSubjects = [
  "Agriculture", "Arabic", "Creative Arts", "CRE", "English", "French",
  "German", "HRE", "Indigenous Language", "Integrated Science", "IRE",
  "Kiswahili", "Mandarin", "Mathematics", "Pre-Technical Studies", "Social Studies"
];
const seniorSubjects = [
  "Agriculture", "Aviation", "Biology", "Chemistry", "Community Service Learning",
  "Core Mathematics", "English", "Fasihi ya Kiswahili", "Fine Arts",
  "General Science", "Geography", "History & Citizenship", "Home Science",
  "ICT", "Kiswahili", "Literature in English", "Marine and Fisheries",
  "Music & Dance", "Physical Education", "Physics", "Power Mechanics",
  "Sports & Recreation", "Theatre & Film", "Woodwork"
];

export const curriculumDirectory = {
  "Pre-Primary 1": { url: "https://kicd.ac.ke/cbc-materials/pre-primary/", subjects: ["Creative Activities", "Language Activities", "Mathematical Activities", "Environmental Activities"] },
  "Pre-Primary 2": { url: "https://kicd.ac.ke/cbc-materials/pre-primary/", subjects: ["Creative Activities", "Language Activities", "Mathematical Activities", "Environmental Activities"] },
  "Grade 1": { url: ROOT + "lower-primary-designs/", subjects: ["Mathematics", "English", "Kiswahili", "Environmental Activities", "Hygiene and Nutrition", "Movement and Creative Activities", "Religious Education"] },
  "Grade 2": { url: ROOT + "lower-primary-designs/", subjects: ["Mathematics", "English", "Kiswahili", "Environmental Activities", "Hygiene and Nutrition", "Movement and Creative Activities", "Religious Education"] },
  "Grade 3": { url: ROOT + "lower-primary-designs/", subjects: ["Mathematics", "English", "Kiswahili", "Environmental Activities", "Hygiene and Nutrition", "Movement and Creative Activities", "Religious Education"] },
  "Grade 4": { url: ROOT + "grade-four-designs/", subjects: primarySubjects },
  "Grade 5": { url: ROOT + "grade-five-designs/", subjects: primarySubjects },
  "Grade 6": { url: ROOT + "grade-six-designs/", subjects: primarySubjects },
  "Grade 7": { url: ROOT + "grade-seven-designs/", subjects: juniorSubjects },
  "Grade 8": { url: ROOT + "grade-eight-designs/", subjects: juniorSubjects },
  "Grade 9": { url: ROOT + "grade-nine-designs/", subjects: juniorSubjects },
  "Grade 10": { url: ROOT + "grade-ten/", subjects: seniorSubjects },
  "Grade 11": { url: ROOT + "grade-eleven/", subjects: seniorSubjects },
  "Grade 12": { url: ROOT + "grade-twelve/", subjects: seniorSubjects }
};

export const curriculumCatalog = {
  "Grade 4": {
    "Mathematics": {
      title: "Mathematics Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Mathematics curriculum design. Topic sequence is intentionally not indexed until it can be transcribed and verified from the regular-learner design.",
      strands: [
        { name: "Grade 9 Mathematics sequence not yet indexed", subStrands: ["Use the official KICD Grade 9 Mathematics design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Integrated Science": {
      title: "Integrated Science Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Integrated Science curriculum design; verify against any later revision before final school planning.",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Mixtures, Elements and Compounds", subStrands: ["1.1 Structure of the Atom (14 lessons)", "1.2 Metals and Alloys (16 lessons)", "1.3 Water Hardness (14 lessons)"] },
        { name: "2.0 Living Things and the Environment", subStrands: ["2.1 Nutrition in Plants (18 lessons)", "2.2 Nutrition in Animals (16 lessons)", "2.3 Reproduction in Plants (20 lessons)", "2.4 The Interdependence of Life (18 lessons)"] },
        { name: "3.0 Force and Energy", subStrands: ["3.1 Curved Mirrors (18 lessons)", "3.2 Waves (16 lessons)"] }
      ]
    }
  },
  "Grade 10": {
    "Core Mathematics": {
      title: "Core Mathematics Grade 10 (July 2025)",
      sourceUrl: ROOT + "grade-ten/",
      sourceLabel: "KICD Grade 10 designs",
      strands: [
        { name: "1.0 Numbers and Algebra", subStrands: ["1.1 Real Numbers", "1.2 Indices and Logarithms", "1.3 Quadratic Expressions and Equations"] },
        { name: "2.0 Measurements and Geometry", subStrands: ["2.1 Similarity and Enlargement", "2.2 Reflection and Congruence", "2.3 Rotation", "2.4 Trigonometry", "2.5 Area of Polygons", "2.6 Area of a Part of a Circle", "2.7 Surface Area and Volume of Solids", "2.8 Vectors", "2.9 Linear Motion"] },
        { name: "3.0 Statistics and Probability", subStrands: ["3.1 Statistics I", "3.2 Probability I"] }
      ]
    },
    Physics: {
      title: "Physics Grade 10 (2025)",
      sourceUrl: ROOT + "grade-ten/",
      sourceLabel: "KICD Grade 10 designs",
      strands: [
        { name: "1.0 Mechanics and Thermal Physics", subStrands: ["1.1 Introduction to Physics", "1.2 Pressure", "1.3 Mechanical Properties of Materials", "1.4 Temperature and Thermal Expansion", "1.5 Moments and Equilibrium", "1.6 Energy, Work, Power and Machines"] },
        { name: "2.0 Waves and Optics", subStrands: ["2.1 Properties of Waves", "2.2 Radioactivity and Stability of Isotopes"] },
        { name: "3.0 Electricity and Magnetism", subStrands: ["3.1 Electrostatics", "3.2 Current Electricity", "3.3 Introduction to Electronics"] },
        { name: "4.0 Environmental and Space Physics", subStrands: ["4.1 Greenhouse Effect and Climate Change", "4.2 Introduction to Space Physics"] }
      ]
    }
  }
};

// One shared rule keeps the UI and the validation script from disagreeing about
// whether an entry contains real topic labels or a source-only placeholder.
const placeholderPattern = /(?:use the official KICD .* to confirm the current strand and sub-strand sequence|curriculum sequence not yet indexed|awaits transcription and verification|strand sequence awaits transcription)/i;

export function isCurriculumPlaceholder(item, curriculum = null) {
  if (typeof item === "string" && placeholderPattern.test(item)) return true;
  if (!curriculum) return false;
  if (placeholderPattern.test(curriculum.title || "")) return true;
  if (placeholderPattern.test(curriculum.sourceLabel || "")) return true;
  return (curriculum.strands || []).some(strand =>
    placeholderPattern.test(strand.name || "") ||
    (strand.subStrands || []).some(value => typeof value === "string" && placeholderPattern.test(value))
  );
}

// Coverage reporting separates indexed topic lists from source-linked placeholders.
// "Indexed" means the app has topic labels in its catalog; teachers should still verify them against KICD.
export function getCurriculumCoverage() {
  const grades = Object.entries(curriculumDirectory).map(([grade, directory]) => {
    const subjects = directory.subjects ?? [];
    let indexed = 0;
    let sourceOnly = 0;
    for (const subject of subjects) {
      const entry = curriculumCatalog[grade]?.[subject];
      if (!entry) continue;
      const isPlaceholder = isCurriculumPlaceholder(null, entry);
      if (isPlaceholder) sourceOnly++;
      else if (entry.strands?.some(strand => strand.subStrands?.length)) indexed++;
    }
    return { grade, total: subjects.length, indexed, sourceOnly, notIndexed: subjects.length - indexed - sourceOnly };
  });
  return {
    grades,
    total: grades.reduce((sum, item) => sum + item.total, 0),
    indexed: grades.reduce((sum, item) => sum + item.indexed, 0),
    sourceOnly: grades.reduce((sum, item) => sum + item.sourceOnly, 0),
    notIndexed: grades.reduce((sum, item) => sum + item.notIndexed, 0)
  };
}

export function getCurriculum(grade, subject) {
  return curriculumCatalog[grade]?.[subject] ?? null;
}

export function getCurriculumTopics(grade, subject) {
  const curriculum = getCurriculum(grade, subject);
  if (!curriculum) return [];
  return curriculum.strands.flatMap(strand =>
    strand.subStrands.map(subStrand => ({ strand: strand.name, subStrand }))
  );
}

export function getSubjectsForGrade(grade) {
  return curriculumDirectory[grade]?.subjects ?? [];
}

export function getCurriculumSourceUrl(grade) {
  return curriculumDirectory[grade]?.url ?? KICD_CURRICULUM_URL;
}

export function getGrades() {
  return Object.keys(curriculumDirectory);
}
