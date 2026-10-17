// Topic/sub-strand index transcribed from KICD Grade 10 curriculum design summaries.
// The official design remains the authority; use the source link to verify details and lesson allocations.
export const KICD_CURRICULUM_URL = "https://kicd.ac.ke/cbc-materials/curriculum-designs/";

export const curriculumCatalog = {
  "Grade 10": {
    Mathematics: {
      title: "Core Mathematics Grade 10 (July 2025)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "KICD Grade 10 designs",
      strands: [
        {
          name: "1.0 Numbers and Algebra",
          subStrands: [
            "1.1 Real Numbers",
            "1.2 Indices and Logarithms",
            "1.3 Quadratic Expressions and Equations"
          ]
        },
        {
          name: "2.0 Measurements and Geometry",
          subStrands: [
            "2.1 Similarity and Enlargement",
            "2.2 Reflection and Congruence",
            "2.3 Rotation",
            "2.4 Trigonometry",
            "2.7 Surface Area and Volume of Solids",
            "2.8 Vectors"
          ]
        },
        {
          name: "3.0 Statistics and Probability",
          subStrands: [
            "3.1 Statistics",
            "3.2 Probability"
          ]
        }
      ]
    },
    Physics: {
      title: "Physics Grade 10 (2025)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "KICD Grade 10 designs",
      strands: [
        {
          name: "1.0 Mechanics and Thermal Physics",
          subStrands: [
            "1.1 Introduction to Physics",
            "1.2 Pressure",
            "1.3 Mechanical Properties of Materials",
            "1.4 Temperature and Thermal Expansion",
            "1.5 Moments and Equilibrium",
            "1.6 Energy, Work, Power and Machines"
          ]
        },
        {
          name: "2.0 Waves and Optics",
          subStrands: [
            "2.1 Properties of Waves",
            "2.2 Radioactivity and Stability of Isotopes"
          ]
        },
        {
          name: "3.0 Electricity and Magnetism",
          subStrands: [
            "3.1 Electrostatics",
            "3.2 Current Electricity",
            "3.3 Introduction to Electronics"
          ]
        },
        {
          name: "4.0 Environmental and Space Physics",
          subStrands: [
            "4.1 Greenhouse Effect and Climate Change",
            "4.2 Introduction to Space Physics"
          ]
        }
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
    strand.subStrands.map(subStrand => ({
      strand: strand.name,
      subStrand
    }))
  );
}
