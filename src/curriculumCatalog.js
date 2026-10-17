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
  "Grade 4": {
    "CRE": {
      title: "Christian Religious Education Grade 4 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs directory; select CRE for the authoritative design.",
      strands: [
        { name: "CRE curriculum design", subStrands: ["Use the official KICD Grade Four Designs page to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English": {
      title: "English Grade 4 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs directory; select English for the authoritative design.",
      strands: [
        { name: "English curriculum design", subStrands: ["Use the official KICD Grade Four Designs page to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 4 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs directory; select Kiswahili for the authoritative design.",
      strands: [
        { name: "Kiswahili curriculum design", subStrands: ["Use the official KICD Grade Four Designs page to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Science & Technology": {
      title: "Science and Technology Grade 4 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs directory; select Science and Technology for the authoritative design.",
      strands: [
        { name: "Science and Technology curriculum design", subStrands: ["Use the official KICD Grade Four Designs page to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 4 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs directory; select Social Studies for the authoritative design.",
      strands: [
        { name: "Social Studies curriculum design", subStrands: ["Use the official KICD Grade Four Designs page to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
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
    "CRE": {
      title: "Christian Religious Education Grade 5 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/CRE-GRADE-5-DESIGN-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 5 CRE curriculum design (October 2024). Strand sequence awaits transcription and verification.",
      strands: [
        { name: "CRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Five CRE design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Agriculture": {
      title: "Agriculture Grade 5 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/AGRICULTURE-Grade-5-30.07.2024.pdf",
      sourceLabel: "Official KICD Grade 5 Agriculture curriculum design (revised 2024)",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Conservation of Resources", subStrands: ["1.1 Soil Conservation (8 lessons)", "1.2 Water Conservation (9 lessons)", "1.3 Conserving Wild Animals (6 lessons)"] },
        { name: "2.0 Food Production Processes", subStrands: ["2.1 Growing Vegetables (9 lessons)", "2.2 Uses of Domestic Animals (8 lessons)", "2.3 Preservation of Cereals and Pulses (10 lessons)", "2.4 Food Nutrients (10 lessons)", "2.5 Cooking Food (9 lessons)"] },
        { name: "3.0 Hygiene Practices", subStrands: ["3.1 Good Grooming Practices (7 lessons)", "3.2 Home Hygiene (9 lessons)", "3.3 Laundering Cotton Item (10 lessons)"] },
        { name: "4.0 Production Techniques", subStrands: ["4.1 Repairing Garments (11 lessons)", "4.2 Constructing Innovative Gardens (14 lessons)"] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 5 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Grade-5-Social-Studies-Revised-1.pdf",
      sourceLabel: "Official KICD Grade 5 Social Studies curriculum design (revised 2024)",
      strands: [
        { name: "1.0 Natural and the Built Environments", subStrands: ["Elements of a Map (4 lessons)", "Location, Position and Size of Kenya (4 lessons)", "Main Physical Features in Kenya (5 lessons)", "Weather and Climate (4 lessons)", "The Built Environments (4 lessons)"] },
        { name: "2.0 People and Social Organisation", subStrands: ["Language Groups in Kenya (5 lessons)", "Population Distribution in Kenya (4 lessons)", "African Traditional Education (4 lessons)", "School Administration (4 lessons)"] },
        { name: "3.0 Resources and Economic Activities in Eastern Africa", subStrands: ["Resources in Kenya (4 lessons)", "Mining in Kenya (5 lessons)", "Fishing in Kenya (5 lessons)", "Wildlife and Tourism in Kenya (5 lessons)", "Development of Transport (5 lessons)", "Development of Communication (4 lessons)"] },
        { name: "4.0 Political Systems", subStrands: ["Traditional Leaders in Kenya (4 lessons)", "Early Forms of Government in Kenya (5 lessons)", "Citizenship in Kenya (4 lessons)"] }
      ]
    },
    "English": {
      title: "English Grade 5 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/ENGLISH-GRADE-5-UPDATED-Revised-Sept.pdf",
      sourceLabel: "Official KICD Grade 5 English curriculum design; language skills and grammar are developed through the listed themes.",
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["1. Child Rights and Responsibilities", "2. National Celebrations", "3. Etiquette - Table Manners", "4. Road Accidents - Prevention", "5. Nutrition - Traditional Foods", "6. Jobs and Occupations - Various Occupations", "7. Technology - Learning through Technology", "8. The Farm - Cash Crops", "9. Diseases - Communicable Diseases", "10. Leisure Time Activities", "11. Sports - Appreciating Talents", "12. Environmental Pollution", "13. Money - Savings and Banking"] },
        { name: "2.0 Reading", subStrands: ["1. Child Rights and Responsibilities", "2. National Celebrations", "3. Etiquette - Table Manners", "4. Road Accidents - Prevention", "5. Nutrition - Traditional Foods", "6. Jobs and Occupations - Various Occupations", "7. Technology - Learning through Technology", "8. The Farm - Cash Crops", "9. Diseases - Communicable Diseases", "10. Leisure Time Activities", "11. Sports - Appreciating Talents", "12. Environmental Pollution", "13. Money - Savings and Banking"] },
        { name: "3.0 Grammar in Use", subStrands: ["1. Child Rights and Responsibilities", "2. National Celebrations", "3. Etiquette - Table Manners", "4. Road Accidents - Prevention", "5. Nutrition - Traditional Foods", "6. Jobs and Occupations - Various Occupations", "7. Technology - Learning through Technology", "8. The Farm - Cash Crops", "9. Diseases - Communicable Diseases", "10. Leisure Time Activities", "11. Sports - Appreciating Talents", "12. Environmental Pollution", "13. Money - Savings and Banking"] },
        { name: "4.0 Writing", subStrands: ["1. Child Rights and Responsibilities", "2. National Celebrations", "3. Etiquette - Table Manners", "4. Road Accidents - Prevention", "5. Nutrition - Traditional Foods", "6. Jobs and Occupations - Various Occupations", "7. Technology - Learning through Technology", "8. The Farm - Cash Crops", "9. Diseases - Communicable Diseases", "10. Leisure Time Activities", "11. Sports - Appreciating Talents", "12. Environmental Pollution", "13. Money - Savings and Banking"] }
      ]
    },
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
    "CRE": {
      title: "Christian Religious Education Grade 6 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/CRE-GRADE-6-DESIGN-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 6 CRE curriculum design (October 2024). Strand sequence awaits transcription and verification.",
      strands: [
        { name: "CRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Six CRE design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 6 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Grade-6-Social-studies-Revised-Oct-1.pdf",
      sourceLabel: "Official KICD Grade 6 Social Studies curriculum design (revised 2024)",
      strands: [
        { name: "1.0 Natural and the Built Environments", subStrands: ["Position and Size of Countries in Eastern Africa (3 lessons)", "Main Physical Features in Eastern Africa (4 lessons)", "Climatic Regions in Eastern Africa (5 lessons)", "Vegetation in Eastern Africa (4 lessons)", "Historic Built Environments (4 lessons)"] },
        { name: "2.0 People and Social Organisation", subStrands: ["Language Groups in Eastern Africa (5 lessons)", "Population Distribution in Eastern Africa (3 lessons)", "Culture and Social Organisation (4 lessons)", "School and Community (3 lessons)"] },
        { name: "3.0 Resources and Economic Activities in Eastern Africa", subStrands: ["Beef Farming (4 lessons)", "Fishing in Eastern Africa (5 lessons)", "Wildlife and Tourism in Eastern Africa (5 lessons)", "Transport in Eastern Africa (4 lessons)", "Communication in Eastern Africa (4 lessons)", "Mining in Eastern Africa (5 lessons)"] },
        { name: "4.0 Political Systems", subStrands: ["Traditional Forms of Government (5 lessons)", "Regional Co-operations (4 lessons)", "Citizenship (4 lessons)", "Human Rights (4 lessons)"] },
        { name: "5.0 Governance", subStrands: ["Peace and Conflict Resolution (4 lessons)", "Government Revenue and Expenditure (4 lessons)", "The Preamble of the Constitution of Kenya (3 lessons)"] }
      ]
    },
    "English": {
      title: "English Grade 6 (KICD curriculum design)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/09/GRADE-6-ENGLISH.pdf",
      sourceLabel: "Official KICD Grade 6 English curriculum design; language skills and grammar are developed through the listed themes.",
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["1. Child Labour", "2. Cultural and Religious Celebrations", "3. Etiquette - Telephone Etiquette", "4. Emergency Rescue Services", "5. Our Tourist Attractions", "6. Jobs and Occupations - Work Ethics", "7. Technology - Scientific Innovations", "8. The Farm - Animal Safety and Care", "9. Diseases - Lifestyle Diseases", "10. Proper Use of Leisure Time", "11. Sports - Indoor Games", "12. Environmental Conservation", "13. Money - Trade"] },
        { name: "2.0 Reading", subStrands: ["1. Child Labour", "2. Cultural and Religious Celebrations", "3. Etiquette - Telephone Etiquette", "4. Emergency Rescue Services", "5. Our Tourist Attractions", "6. Jobs and Occupations - Work Ethics", "7. Technology - Scientific Innovations", "8. The Farm - Animal Safety and Care", "9. Diseases - Lifestyle Diseases", "10. Proper Use of Leisure Time", "11. Sports - Indoor Games", "12. Environmental Conservation", "13. Money - Trade"] },
        { name: "3.0 Grammar in Use", subStrands: ["1. Child Labour", "2. Cultural and Religious Celebrations", "3. Etiquette - Telephone Etiquette", "4. Emergency Rescue Services", "5. Our Tourist Attractions", "6. Jobs and Occupations - Work Ethics", "7. Technology - Scientific Innovations", "8. The Farm - Animal Safety and Care", "9. Diseases - Lifestyle Diseases", "10. Proper Use of Leisure Time", "11. Sports - Indoor Games", "12. Environmental Conservation", "13. Money - Trade"] },
        { name: "4.0 Writing", subStrands: ["1. Child Labour", "2. Cultural and Religious Celebrations", "3. Etiquette - Telephone Etiquette", "4. Emergency Rescue Services", "5. Our Tourist Attractions", "6. Jobs and Occupations - Work Ethics", "7. Technology - Scientific Innovations", "8. The Farm - Animal Safety and Care", "9. Diseases - Lifestyle Diseases", "10. Proper Use of Leisure Time", "11. Sports - Indoor Games", "12. Environmental Conservation", "13. Money - Trade"] }
      ]
    },
    "IRE": {
      title: "Islamic Religious Education Grade 6 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/IRE-GRADE-6-CURRICULUM-DESIGNS-Revised.pdf",
      sourceLabel: "Official KICD Grade 6 IRE curriculum design (revised 2024)",
      strands: [
        { name: "1.0 Qur'an", subStrands: ["1.1 Selected Chapters (Surah) (12 lessons)"] },
        { name: "2.0 Hadith", subStrands: ["2.1 Hadith on Purity of Actions (3 lessons)", "2.2 Hadith on Dressing (3 lessons)", "2.3 Hadith on Planting (3 lessons)", "2.4 Hadith on Responsible Capabilities and Resources (3 lessons)"] },
        { name: "3.0 Pillars of Iman", subStrands: ["3.1 Stories of Prophets Ibrahim and Yusuf (A.S.) (8 lessons)", "3.2 Taqwa (God Consciousness) (2 lessons)", "3.3 Tawakul (Reliance on Allah) (2 lessons)"] },
        { name: "4.0 Devotional Acts", subStrands: ["4.1 Twaharah (Purity) (6 lessons)", "4.2 Zakat (3 lessons)", "4.3 Saum (4 lessons)", "4.4 Hajj (3 lessons)"] },
        { name: "5.0 Akhlaq (Moral Teachings)", subStrands: ["5.1 Virtues: Work as a Form of Ibadah (2 lessons)", "5.2 Adalah (Justice) (2 lessons)", "5.3 Prohibitions in Islam: Intoxicants (3 lessons)", "5.4 Israf (Extravagance) (2 lessons)", "5.5 Dua (Supplication When Travelling) (2 lessons)"] }
      ]
    },
    "Agriculture": {
      title: "Agriculture Grade 6 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/AGRICULTURE-Grade-6-30.07.2024.pdf",
      sourceLabel: "Official KICD Grade 6 Agriculture curriculum design (revised 2024)",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Conservation of Resources", subStrands: ["1.1 Controlling Soil Erosion (11 lessons)", "1.2 Conserving Water (11 lessons)", "1.3 Conserving Wild Animals (10 lessons)"] },
        { name: "2.0 Food Production Processes", subStrands: ["2.1 Rearing Small Domestic Animals (12 lessons)", "2.2 Preserving Crop Products (11 lessons)", "2.3 Cooking Food (13 lessons)"] },
        { name: "3.0 Hygiene Practices", subStrands: ["3.1 Good Grooming (9 lessons)", "3.2 Laundry: Stain Removal (12 lessons)"] },
        { name: "4.0 Production Techniques", subStrands: ["4.1 Crocheting of Personal Protective Equipment (16 lessons)", "4.2 Constructing Moist Bed Garden (15 lessons)"] }
      ]
    },
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
