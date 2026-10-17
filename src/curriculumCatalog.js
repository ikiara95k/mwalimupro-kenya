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
  "Pre-Primary 1": { url: "https://kicd.ac.ke/cbc-materials/pre-primary/", subjects: ["Creative Activities", "CRE", "HRE", "IRE", "Language Activities", "Mathematical Activities", "Environmental Activities"] },
  "Pre-Primary 2": { url: "https://kicd.ac.ke/cbc-materials/pre-primary/", subjects: ["Creative Activities", "CRE", "HRE", "IRE", "Language Activities", "Mathematical Activities", "Environmental Activities"] },
  "Grade 1": { url: "https://kicd.ac.ke/cbc-materials/lower-primary/", subjects: ["Creative Activities", "CRE", "English Activities", "Environmental Activities", "HRE", "Indigenous Languages", "IRE", "Kiswahili", "Mathematics"] },
  "Grade 2": { url: "https://kicd.ac.ke/cbc-materials/lower-primary/", subjects: ["Creative Activities", "CRE", "English Activities", "Environmental Activities", "HRE", "Indigenous Languages", "IRE", "Kiswahili", "Mathematics"] },
  "Grade 3": { url: "https://kicd.ac.ke/cbc-materials/lower-primary/", subjects: ["Creative Activities", "CRE", "English Activities", "Environmental Activities", "HRE", "Indigenous Languages", "IRE", "Kiswahili", "Mathematics"] },
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
        { name: "2.0 Food Production Processes", subStrands: ["2.1 Growing Vegetables (9 lessons)", "2.2 Uses of Domestic Animals (8 lessons)", "2.3 Preservation of Cereals and Pulses (10 lessons)", "2.4 Food Nutrients (10 lessons)", "2.5 Dry Fat Frying and Deep Frying (9 lessons)"] },
        { name: "3.0 Hygiene Practices", subStrands: ["3.1 Good Grooming Practices (7 lessons)", "3.2 Home Hygiene (9 lessons)", "3.3 Laundering Cotton Item (10 lessons)"] },
        { name: "4.0 Production Techniques", subStrands: ["4.1 Repairing Garments (11 lessons)", "4.2 Constructing Vertical and Horizontal Garden (14 lessons)"] }
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
  "Grade 8": {
    "Mathematics": {
      title: "Mathematics Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-8-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 Mathematics curriculum design; verify against any later revision before final school planning.",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Numbers", subStrands: ["1.1 Integers (6 lessons)", "1.2 Fractions (6 lessons)", "1.3 Decimals (8 lessons)", "1.4 Squares and Square Roots (6 lessons)", "1.5 Rates, Ratio, Proportions and Percentages (14 lessons)"] },
        { name: "2.0 Algebra", subStrands: ["2.1 Algebraic Expressions (6 lessons)", "2.2 Linear Equations (7 lessons)"] },
        { name: "3.0 Measurements", subStrands: ["3.1 Circles (5 lessons)", "3.2 Area (10 lessons)", "3.3 Money (9 lessons)"] },
        { name: "4.0 Geometry", subStrands: ["4.1 Geometrical Constructions (12 lessons)", "4.2 Coordinates and Graphs (14 lessons)", "4.3 Scale Drawing (14 lessons)", "4.4 Common Solids (16 lessons)"] },
        { name: "5.0 Data Handling and Probability", subStrands: ["5.1 Data Presentation and Interpretation (10 lessons)", "5.2 Probability (7 lessons)"] }
      ]
    }
  },
  "Grade 9": {
    "Agriculture": {
      title: "Agriculture and Nutrition Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-9-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Agriculture and Nutrition curriculum design, April 2024; verify against any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Conservation of Resources", subStrands: ["1.1 Conserving Animal Feed: Hay (12 lessons)", "1.2 Conserving Leftover Food (11 lessons)", "1.3 Integrated Farming (12 lessons)"] },
        { name: "2.0 Food Production Processes", subStrands: ["2.1 Organic Gardening (14 lessons)", "2.2 Storage of Crop Produce (10 lessons)", "2.3 Cooking: Using Flour Mixtures (14 lessons)"] },
        { name: "3.0 Hygiene Practices", subStrands: ["3.1 Cleaning Waste Disposal Facilities (9 lessons)", "3.2 Disinfecting Clothing and Household Articles (12 lessons)"] },
        { name: "4.0 Production Techniques", subStrands: ["4.1 Grafting in Plants (13 lessons)", "4.2 Homemade Sun Dryer (13 lessons)"] }
      ]
    },
    "Arabic": {
      title: "Arabic Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Arabic-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Arabic curriculum design, April 2024; the 54 sub-strand lessons are accompanied by 6 additional showcasing lessons.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Interactive Speaking (6 lessons)", "Listening for Information (4 lessons)", "Active Speaking (2 lessons)", "Oral Expression (4 lessons)", "Active Listening (2 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Guided Reading: Reading Fluency (6 lessons)", "Guided Reading: Reading Aloud (2 lessons)", "Guided Reading: Reading Comprehension (2 lessons)", "Reading for Information (6 lessons)", "Extensive Reading: Library Skills (2 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Guided Writing: Paragraph Writing (2 lessons)", "Guided Writing: Handwriting (4 lessons)", "Guided Writing (6 lessons)", "Guided Writing: Imaginative Composition (2 lessons)", "Guided Writing: Summary Writing (2 lessons)", "Guided Writing: Poetry (2 lessons)"] }
      ]
    },
    "French": {
      title: "French Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 French design, April 2024. Strand allocations are 27 lessons for Listening and Speaking, 18 for Reading, and 9 for Writing, plus 6 showcase lessons; individual sub-strand allocations are not listed in this index.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["Interactive Speaking", "Oral Expression", "Interactive Listening", "Active Listening", "Listening for Information"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["Reading Aloud", "Reading for Understanding", "Guided Reading"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["Guided Writing"] }
      ]
    },
    "German": {
      title: "German Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 German design, April 2024. Strand allocations are 27 lessons for Listening and Speaking, 18 for Reading, and 9 for Writing, plus 6 showcase lessons; individual sub-strand allocations are not listed in this index.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["Active Listening", "Listening for Information", "Interactive Speaking", "Oral Expression"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["Reading Comprehension", "Reading Aloud (Articulation)", "Reading Aloud (Fluency)", "Extensive Reading", "Speed Reading"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["Guided Writing", "German Orthography Rules", "Vocabulary", "Creative Writing", "Functional Writing"] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Languages Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-9-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Indigenous Languages design, April 2024; 54 sub-strand lessons plus 6 showcasing lessons, with language-specific adaptation as appropriate.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Listening for Information (2 lessons)", "Listening for Comprehension (2 lessons)", "Fluency: Pronunciation (2 lessons)", "Conversational Skills: Negotiation (2 lessons)", "Presentation Skills: Debate and Public Speaking (4 lessons)", "Intensive Listening (2 lessons)", "Storytelling: Legends (2 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Reading Comprehension (6 lessons)", "Extensive Reading: Library Skills (2 lessons)", "Extensive Reading: Short Stories and Grade-Appropriate Texts (6 lessons)", "Reading for Information: Plays and Visuals (4 lessons)", "Intensive Reading (2 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Handwriting (2 lessons)", "Social Writing: Emails (2 lessons)", "Creative Writing: Poems, Plays and Short Stories (6 lessons)", "Essay Writing: Descriptive Essay (2 lessons)", "Writing for Information (2 lessons)", "Assessment of Writing (2 lessons)", "Functional Writing: Application Letters (2 lessons)"] }
      ]
    },
    "IRE": {
      title: "Islamic Religious Education Grade 9 (KICD curriculum design, March 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-9-Formatted-12.3.2024.pdf",
      sourceLabel: "Official KICD Grade 9 Islamic Religious Education curriculum design; verify against any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Qur'an", subStrands: ["1.1 Ulum al-Qur'an (7 lessons)", "1.2 Selected Chapter Surah Al-Hujurat (Q 49) (5 lessons)"] },
        { name: "2.0 Hadith", subStrands: ["2.1 Ulum al-Hadith (10 lessons)", "2.2 Selected Hadith (8 lessons)"] },
        { name: "3.0 Pillars of Iman", subStrands: ["3.1 Belief in the Last Day (Day of Judgement) (5 lessons)", "3.2 Belief in Qadar (4 lessons)"] },
        { name: "4.0 Devotional Acts", subStrands: ["4.1 Shariah (Islamic Law) (6 lessons)", "4.2 Tawbah (Repentance) (5 lessons)"] },
        { name: "5.0 Akhlaq (Moral Teachings)", subStrands: ["5.1 Virtues in Islam (9 lessons)", "5.2 Significance of Islamic Morality (2 lessons)", "5.3 Prohibitions in Islam (6 lessons)"] },
        { name: "6.0 Muamalat (Social Relations)", subStrands: ["6.1 Domestic Violence (6 lessons)", "6.2 Iddah (5 lessons)", "6.3 Child Custody (4 lessons)", "6.4 Polygamy in Islam (6 lessons)", "6.5 Trade and Finance in Islam (6 lessons)", "6.6 Contemporary Issues (6 lessons)"] },
        { name: "7.0 Islamic Heritage and Civilisation", subStrands: ["7.1 Islam in Kenya (7 lessons)", "7.2 Unity of Muslims (4 lessons)", "7.3 Muslim Institutions (9 lessons)"] }
      ]
    },
    "CRE": {
      title: "Christian Religious Education Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 CRE design, April 2024. The source summary table has inconsistent numbering for Leisure and Wealth, Money and Poverty, so those labels are listed without disputed numbers; verify against the PDF before final use.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Creation", subStrands: ["Work (8 lessons)"] },
        { name: "2.0 Bible", subStrands: ["Christian Moral Values (10 lessons)", "Kings David and Solomon (10 lessons)"] },
        { name: "3.0 Life and Ministry of Jesus Christ", subStrands: ["Raising the Widow's Son (8 lessons)", "Healing the Ten Lepers (8 lessons)", "Parable on Prayer (8 lessons)", "Nicodemus' Encounter with Jesus Christ (8 lessons)", "Jesus' Ministry in Jerusalem (10 lessons)"] },
        { name: "4.0 Church", subStrands: ["Early Church (8 lessons)", "Gifts of the Holy Spirit (8 lessons)"] },
        { name: "5.0 Christian Living Today", subStrands: ["Courtship and Marriage (10 lessons)", "Responsible Parenthood (8 lessons)", "Leisure (8 lessons)", "Wealth, Money and Poverty (8 lessons)"] }
      ]
    },
    "Pre-Technical Studies": {
      title: "Pre-Technical Studies Grade 9 (KICD curriculum design, 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-9.pdf",
      sourceLabel: "Official KICD Grade 9 Pre-Technical Studies curriculum design; verify against any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Foundations of Pre-Technical Studies", subStrands: ["1.1 Safety on Raised Platforms (8 lessons)", "1.2 Handling Hazardous Substances (9 lessons)", "1.3 Self-Exploration and Career Development (6 lessons)"] },
        { name: "2.0 Communication in Pre-Technical Studies", subStrands: ["2.1 Oblique Projection (14 lessons)", "2.2 Visual Programming (15 lessons)"] },
        { name: "3.0 Materials for Production", subStrands: ["3.1 Wood (8 lessons)", "3.2 Handling Waste Materials (8 lessons)"] },
        { name: "4.0 Tools and Production", subStrands: ["4.1 Holding Tools (8 lessons)", "4.2 Driving Tools (8 lessons)", "4.3 Project (20 lessons)"] },
        { name: "5.0 Entrepreneurship", subStrands: ["5.1 Financial Services (4 lessons)", "5.2 Government and Business (6 lessons)", "5.3 Business Plan (6 lessons)"] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-9-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Social Studies design, April 2024; verify against any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Social Studies and Career Development", subStrands: ["1.1 Pathway Choices (4 lessons)", "1.2 Pre-career Support Systems (4 lessons)"] },
        { name: "2.0 Community Service-Learning", subStrands: ["2.1 Community Service-Learning Project (8 lessons)"] },
        { name: "3.0 People and Relationships", subStrands: ["3.1 Socio-Economic Practices of Early Humans (6 lessons)", "3.2 Indigenous Knowledge Systems in African Societies (8 lessons)", "3.3 Poverty Reduction (6 lessons)", "3.4 Population Structure (8 lessons)", "3.5 Peaceful Conflict Resolution (8 lessons)", "3.6 Healthy Relationships (4 lessons)"] },
        { name: "4.0 Natural and Historic Built Environments", subStrands: ["4.1 Topographical Maps (8 lessons)", "4.2 Internal Land Forming Processes (8 lessons)", "4.3 Multipurpose River Projects in Africa (8 lessons)", "4.4 Management and Conservation of the Environment (6 lessons)", "4.5 World Heritage Sites in Africa (6 lessons)"] },
        { name: "5.0 Political Developments and Governance", subStrands: ["5.1 The Constitution of Kenya (8 lessons)", "5.2 Civic Engagement in Governance (6 lessons)", "5.3 Kenya's Bill of Rights (8 lessons)", "5.4 Cultural Globalisation (6 lessons)"] }
      ]
    },
    "Mathematics": {
      title: "Mathematics Grade 9 (KICD revised regular-learner design, September 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/09/GRADE-9-MATHEMATICS.pdf",
      sourceLabel: "Official KICD revised Grade 9 Mathematics curriculum design for regular learners; verify against any later revision before final school planning.",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Numbers", subStrands: ["1.1 Integers (6 lessons)", "1.2 Cubes and Cube Roots (6 lessons)", "1.3 Indices and Logarithms (8 lessons)", "1.4 Compound Proportions and Rates of Work (9 lessons)"] },
        { name: "2.0 Algebra", subStrands: ["2.1 Matrices (8 lessons)", "2.2 Equation of a Straight Line (15 lessons)", "2.3 Linear Inequalities (6 lessons)"] },
        { name: "3.0 Measurements", subStrands: ["3.1 Area (8 lessons)", "3.2 Volume of Solids (8 lessons)", "3.3 Mass, Volume, Weight and Density (8 lessons)", "3.4 Time, Distance and Speed (10 lessons)", "3.5 Money (7 lessons)", "3.6 Approximations and Errors (4 lessons)"] },
        { name: "4.0 Geometry", subStrands: ["4.1 Coordinates and Graphs (6 lessons)", "4.2 Scale Drawing (14 lessons)", "4.3 Similarity and Enlargement (8 lessons)", "4.4 Trigonometry (7 lessons)"] },
        { name: "5.0 Data Handling and Probability", subStrands: ["5.1 Data Interpretation (Grouped Data) (6 lessons)", "5.2 Probability (6 lessons)"] }
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
    "Creative Arts": {
      title: "Creative Arts & Sports Grade 9 (KICD source-linked placeholder)",
      sourceUrl: "https://drive.google.com/file/d/1XONxUP98Z6I85bPKx7CYIsAkEucl_dm-/preview",
      sourceLabel: "Official KICD Grade Nine Designs page links to this revised design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Nine design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English": {
      title: "English Grade 9 (KICD source-linked placeholder)",
      sourceUrl: "https://drive.google.com/file/d/1ehe01q4q8G-ft1PsA0r7skcz6grZfiNQ/preview",
      sourceLabel: "Official KICD Grade Nine Designs page links to the revised October design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Nine design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "HRE Grade 9 (KICD source-linked placeholder)",
      sourceUrl: "https://drive.google.com/file/d/1ePaw7pIrLG3AjX2mbTXIEimXTRnkdfuC/preview",
      sourceLabel: "Official KICD Grade Nine Designs page links to the July 2024 design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Nine design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Gredi 9 (KICD source-linked placeholder)",
      sourceUrl: "https://drive.google.com/file/d/14r0D5u2jy79nZdcixJ2Gu3qTattpY0_Y/preview",
      sourceLabel: "Official KICD Grade Nine Designs page links to the revised October design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Nine design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin": {
      title: "Mandarin Grade 9 (KICD source-linked placeholder)",
      sourceUrl: "https://drive.google.com/file/d/1Qn8CsuytmDlsnmfaf89KAZ3Fg2y-bYe2/preview",
      sourceLabel: "Official KICD Grade Nine Designs page links to the revised October design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mandarin curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Nine design to confirm the current strand and sub-strand sequence before planning."] }
      ]
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
  const topics = curriculum.strands.flatMap(strand =>
    strand.subStrands.map(subStrand => ({ strand: strand.name, subStrand }))
  );
  // Some KICD language designs allocate additional lessons to showcasing/exhibitions.
  // Keep these visible in the generated scheme instead of silently dropping those lessons.
  if (curriculum.additionalShowcaseLessons > 0) {
    topics.push({
      strand: "Showcasing of Skills and Concepts",
      subStrand: `Showcasing of Skills and Concepts (Exhibition) (${curriculum.additionalShowcaseLessons} lessons)`
    });
  }
  return topics;
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
