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
  "Pre-Primary 2": { url: ROOT + "pre-primary-designs/", subjects: ["Creative Activities", "Language Activities", "Mathematical Activities", "Environmental Activities"] },
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
