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
      title: "Mathematics Grade 4 (Revised 2024)",
      sourceUrl: "https://drive.google.com/file/d/1o5tDq16yC0Jj1h6zb9mo3dsxtjqXUk4G/preview",
      sourceLabel: "KICD Grade 4 Mathematics design (linked from the official KICD Grade Four Designs page)",
      strands: [
        { name: "1.0 Numbers", subStrands: ["1.1 Whole Numbers (10 lessons)", "1.2 Addition (8 lessons)", "1.3 Subtraction (8 lessons)", "1.4 Multiplication (8 lessons)", "1.5 Division (8 lessons)", "1.6 Fractions (6 lessons)", "1.7 Decimals (10 lessons)", "1.8 Use of Letters (6 lessons)"] },
        { name: "2.0 Measurement", subStrands: ["2.1 Length (10 lessons)", "2.2 Area (8 lessons)", "2.3 Volume (8 lessons)", "2.4 Capacity (8 lessons)", "2.5 Mass (8 lessons)", "2.6 Time (10 lessons)", "2.7 Money (8 lessons)"] },
        { name: "3.0 Geometry", subStrands: ["3.1 Position and Direction (5 lessons)", "3.2 Angles (5 lessons)", "3.3 Plane Figures (6 lessons)"] },
        { name: "4.0 Data Handling", subStrands: ["4.1 Data (10 lessons)"] }
      ]
    }
  },
  "Grade 5": {
    "Mathematics": {
      title: "Mathematics Grade 5 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Grade-5-Mathematics.pdf",
      sourceLabel: "Official KICD Grade 5 Mathematics curriculum design (revised 2024)",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Numbers", subStrands: ["1.1 Whole Numbers (20 lessons)", "1.2 Addition (6 lessons)", "1.3 Subtraction (6 lessons)", "1.4 Multiplication (6 lessons)", "1.5 Division (6 lessons)", "1.6 Fractions (8 lessons)", "1.7 Decimals (6 lessons)", "1.8 Simple Equations (6 lessons)"] },
        { name: "2.0 Measurement", subStrands: ["2.1 Length (12 lessons)", "2.2 Area (6 lessons)", "2.3 Volume (6 lessons)", "2.4 Capacity (12 lessons)", "2.5 Mass (12 lessons)", "2.6 Time (8 lessons)", "2.7 Money (8 lessons)"] },
        { name: "3.0 Geometry", subStrands: ["3.1 Lines (4 lessons)", "3.2 Angles (6 lessons)", "3.3 Three Dimension (3-D) Objects (6 lessons)"] },
        { name: "4.0 Data Handling", subStrands: ["4.1 Data Representation (6 lessons)"] }
      ]
    }
  },
  "Grade 6": {
    "Mathematics": {
      title: "Mathematics Grade 6 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Grade-6-Mathematics-Revised.pdf",
      sourceLabel: "Official KICD Grade 6 Mathematics curriculum design (revised 2024)",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Numbers", subStrands: ["1.1 Whole Numbers (20 lessons)", "1.2 Multiplication (6 lessons)", "1.3 Division (6 lessons)", "1.4 Fractions (12 lessons)", "1.5 Decimals (12 lessons)", "1.6 Inequalities (8 lessons)"] },
        { name: "2.0 Measurement", subStrands: ["2.1 Length (14 lessons)", "2.2 Area (6 lessons)", "2.3 Capacity (6 lessons)", "2.4 Mass (14 lessons)", "2.5 Time (10 lessons)", "2.6 Money (8 lessons)"] },
        { name: "3.0 Geometry", subStrands: ["3.1 Lines (6 lessons)", "3.2 Angles (6 lessons)", "3.3 3-D Objects (6 lessons)"] },
        { name: "4.0 Data Handling", subStrands: ["4.1 Bar Graphs (10 lessons)"] }
      ]
    }
  },
  "Grade 7": {
    "Mathematics": {
      title: "Mathematics Grade 7 (Revised July 2024)",
      sourceUrl: "https://drive.google.com/file/d/12Vb6W1_Vzn9BEH2MsM2WmUwWL5OKoucK/preview",
      sourceLabel: "KICD Grade 7 Mathematics design (linked from the official KICD Grade Seven Designs page)",
      strands: [
        { name: "1.0 Numbers", subStrands: ["1.1 Whole Numbers (20 lessons)", "1.2 Factors (7 lessons)", "1.3 Fractions (9 lessons)", "1.4 Decimals (6 lessons)", "1.5 Squares and Square Roots (5 lessons)"] },
        { name: "2.0 Algebra", subStrands: ["2.1 Algebraic Expressions (5 lessons)", "2.2 Linear Equations (6 lessons)", "2.3 Linear Inequalities (8 lessons)"] },
        { name: "3.0 Measurements", subStrands: ["3.1 Pythagorean Relationship (4 lessons)", "3.2 Length (6 lessons)", "3.3 Area (8 lessons)", "3.4 Volume and Capacity (8 lessons)", "3.5 Time, Distance and Speed (8 lessons)", "3.6 Temperature (6 lessons)", "3.7 Money (14 lessons)"] },
        { name: "4.0 Geometry", subStrands: ["4.1 Angles (8 lessons)", "4.2 Geometrical Constructions (12 lessons)"] },
        { name: "5.0 Data Handling and Probability", subStrands: ["5.1 Data Handling (10 lessons)"] }
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
