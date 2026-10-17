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
// Directory of KICD-listed senior-school subject designs. This is a catalogue of
// available designs, not a claim that every subject is compulsory or offered by every school.
const seniorSubjects = [
  "Agriculture", "Advanced English", "Advanced Mathematics", "Arabic", "Aviation",
  "Biology", "Building and Construction", "Business Studies", "Chemistry",
  "Community Service Learning", "Computer Studies", "Core Mathematics",
  "Drawing and Design", "Electrical Technology", "English", "Fasihi ya Kiswahili",
  "Fine Arts", "French", "German", "General Science", "Geography",
  "History & Citizenship", "Home Science", "Hindu Religious Education",
  "ICT", "Indigenous Language", "Islamic Religious Education", "Kiswahili",
  "Literature in English", "Mandarin Chinese", "Marine and Fisheries",
  "Marine and Fisheries Technology", "Media Technology", "Metal Technology",
  "Music & Dance", "Physical Education", "Physics", "Power Mechanics",
  "Sign Language", "Sports & Recreation", "Theatre & Film", "Wood Technology",
  "Woodwork", "Christian Religious Education"
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
  "Pre-Primary 1": {
    "Creative Activities": {
      title: "Creative Activities Pre-Primary 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "CRE": {
      title: "Christian Religious Education Pre-Primary 1 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-PP1-APRIL-2024.pdf",
      sourceLabel: "Official KICD Pre-Primary 1 CRE design, April 2024. Verify any later revision before final school planning.",
      totalSuggestedLessons: 90,
      strands: [
        { name: "1.0 Creation", subStrands: ["1.1 Our God (7 lessons)", "1.2 God Our Creator (8 lessons)", "1.3 God Our Loving Father (8 lessons)"] },
        { name: "2.0 The Bible", subStrands: ["2.1 A Holy Book (7 lessons)", "2.2 David and Goliath (6 lessons)"] },
        { name: "3.0 The Life of Jesus Christ", subStrands: ["3.1 The Birth of Jesus Christ (8 lessons)", "3.2 The Wise Men (7 lessons)"] },
        { name: "4.0 Christian Values", subStrands: ["4.1 Love for God (7 lessons)", "4.2 Love for Neighbour (9 lessons)", "4.3 Sharing with Others (8 lessons)"] },
        { name: "5.0 The Church", subStrands: ["5.1 A House of God (7 lessons)", "5.2 Church Activities (8 lessons)"] }
      ]
    },
    "HRE": {
      title: "HRE Pre-Primary 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "IRE": {
      title: "IRE Pre-Primary 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Language Activities": {
      title: "Language Activities Pre-Primary 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Language Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mathematical Activities": {
      title: "Mathematical Activities Pre-Primary 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mathematical Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Environmental Activities": {
      title: "Environmental Activities Pre-Primary 1 (KICD revised design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Pre-Primary-1-Designs-Revised.pdf",
      sourceLabel: "Official KICD revised Pre-Primary 1 design, October 2024. Confirm the learning-area section against the full document before final planning.",
      totalSuggestedLessons: 154,
      strands: [
        { name: "1.0 Myself", subStrands: ["1.1 Self-awareness (10 lessons)", "1.2 External Body Parts (12 lessons)", "1.3 Handwashing (10 lessons)", "1.4 Brushing Teeth (10 lessons)"] },
        { name: "2.0 My Family", subStrands: ["2.1 Family Members (12 lessons)", "2.2 Feeding (12 lessons)"] },
        { name: "3.0 My Home", subStrands: ["3.1 Utensils Used at Home (12 lessons)", "3.2 Furniture Used at Home (10 lessons)"] },
        { name: "4.0 My Neighbourhood", subStrands: ["4.1 Classmates (10 lessons)", "4.2 Friends (10 lessons)", "4.3 Parts of a Plant (10 lessons)"] },
        { name: "5.0 My School", subStrands: ["5.1 My Class (10 lessons)", "5.2 Care for My Class (12 lessons)", "5.3 Cleanliness (14 lessons)"] }
      ]
    },
  },
  "Pre-Primary 2": {
    "Creative Activities": {
      title: "Creative Activities Pre-Primary 2 (KICD curriculum design, May 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/PP2-Creative-Activities-Curriculum-Designs-May-2024-final.pdf",
      sourceLabel: "Official KICD Pre-Primary 2 Creative Activities design, May 2024.",
      totalSuggestedLessons: 140,
      strands: [
        { name: "1.0 Our Neighbourhood", subStrands: ["1.1 Doodling (15 lessons)", "1.2 Painting (20 lessons)"] },
        { name: "2.0 Our School", subStrands: ["2.1 Mosaic (15 lessons)", "2.2 Swinging and Stretching (15 lessons)", "2.3 Body Percussions (20 lessons)"] },
        { name: "3.0 Our Market", subStrands: ["3.1 Colouring (20 lessons)"] },
        { name: "4.0 Animals", subStrands: ["4.1 Modelling (20 lessons)", "4.2 Walking and Hopping (15 lessons)"] }
      ]
    },
    "CRE": {
      title: "Christian Religious Education Pre-Primary 2 (KICD design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-PP2-APRIL-2024-1.pdf",
      sourceLabel: "Official KICD Pre-Primary 2 CRE curriculum design, April 2024.",
      totalSuggestedLessons: 90,
      strands: [
        { name: "1.0 Creation", subStrands: ["1.1 God the Creator (9 lessons)", "1.2 Caring for God's Creation (9 lessons)"] },
        { name: "2.0 The Holy Bible", subStrands: ["2.1 Handling the Holy Bible (8 lessons)", "2.2 Noah and the Ark (9 lessons)"] },
        { name: "3.0 The Life of Jesus Christ", subStrands: ["3.1 The Birth of Jesus Christ (9 lessons)", "3.2 Celebrating the Birth of Jesus (9 lessons)"] },
        { name: "4.0 Christian Values", subStrands: ["4.1 Respect for Parents (9 lessons)", "4.2 Responsibility (9 lessons)"] },
        { name: "5.0 The Church", subStrands: ["5.1 A House of God (9 lessons)", "5.2 Church Activities (10 lessons)"] }
      ]
    },
    "HRE": {
      title: "HRE Pre-Primary 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "IRE": {
      title: "IRE Pre-Primary 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Language Activities": {
      title: "Language Activities Pre-Primary 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Language Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mathematical Activities": {
      title: "Mathematical Activities Pre-Primary 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mathematical Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Environmental Activities": {
      title: "Environmental Activities Pre-Primary 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/pre-primary/",
      sourceLabel: "Official KICD Pre-Primary 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Environmental Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Pre-Primary 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
  "Grade 1": {
    "Creative Activities": {
      title: "Creative Activities Grade 1 (KICD curriculum design, May 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/GRADE-1-CREATIVE-ACTIVITIES-DESIGN-May-2024-final.pdf",
      sourceLabel: "Official KICD Grade 1 Creative Activities design, May 2024. Verify the detailed sequence and allocations against the full design before final school planning.",
      totalSuggestedLessons: 196,
      strands: [
        { name: "1.0 Creating and Executing", subStrands: ["Jumping (14 lessons)", "Rhythm (14 lessons)", "Drawing (14 lessons)", "Stretching (14 lessons)", "Painting and Colouring (14 lessons)", "Melody (14 lessons)", "Pattern Making (10 lessons)"] },
        { name: "2.0 Performing and Displaying", subStrands: ["Singing Games: Kenyan Style (13 lessons)", "Throwing and Catching (14 lessons)", "Paper Craft (10 lessons)", "Log Roll and T-Balances (14 lessons)", "Action Songs (13 lessons)", "Modelling (14 lessons)", "Percussion Musical Instruments (10 lessons)"] },
        { name: "3.0 Appreciation", subStrands: ["Musical Sounds (14 lessons)"] }
      ]
    },
    "CRE": {
      title: "CRE Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "CRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English Activities": {
      title: "English Activities Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Environmental Activities": {
      title: "Environmental Activities Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Environmental Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "HRE Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Languages": {
      title: "Indigenous Languages Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Languages curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "IRE": {
      title: "IRE Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mathematics": {
      title: "Mathematics Grade 1 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 1 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 1 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
  "Grade 2": {
    "Creative Activities": {
      title: "Creative Activities Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "CRE": {
      title: "CRE Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "CRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English Activities": {
      title: "English Activities Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Environmental Activities": {
      title: "Environmental Activities Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Environmental Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "HRE Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Languages": {
      title: "Indigenous Languages Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Languages curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "IRE": {
      title: "IRE Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mathematics": {
      title: "Mathematics Grade 2 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 2 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 2 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
  "Grade 3": {
    "Creative Activities": {
      title: "Creative Activities Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "CRE": {
      title: "CRE Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "CRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English Activities": {
      title: "English Activities Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Environmental Activities": {
      title: "Environmental Activities Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Environmental Activities curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "HRE Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Languages": {
      title: "Indigenous Languages Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Languages curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "IRE": {
      title: "IRE Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mathematics": {
      title: "Mathematics Grade 3 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/lower-primary/",
      sourceLabel: "Official KICD Grade 3 curriculum design page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 3 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
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
    },
    "Arabic": {
      title: "Arabic Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Creative Arts": {
      title: "Creative Arts Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "French curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "German": {
      title: "German Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "German curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "HRE Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Language Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "IRE": {
      title: "IRE Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin": {
      title: "Mandarin Grade 4 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Mandarin-Grade-4-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 4 Mandarin design, October 2024.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Phonological Awareness: intonation, articulation, syllable blending and sentence construction (9 lessons)", "Imitative Speaking: word recognition, vocabulary development, pronunciation and fluency (9 lessons)", "Listening for Gist: active listening and comprehension (9 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Reading Aloud: pronunciation, articulation, intonation, vocabulary, fluency and comprehension (12 lessons)", "Guided Reading: vocabulary development, drawing inferences, fluency and reading strategies (6 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Guided Writing: handwriting, spelling, punctuation, vocabulary, paragraph writing and sentence patterns (9 lessons)"] }
      ]
    },
    "Agriculture": {
      title: "Agriculture Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade 4 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Agriculture curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 4 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "CRE": {
      title: "CRE Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "CRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Four design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English": {
      title: "English Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Four design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Four design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Science & Technology": {
      title: "Science & Technology Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Science & Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Four design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 4 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-four-designs/",
      sourceLabel: "Official KICD Grade Four Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Social Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Four design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
  "Grade 5": {
    "CRE": {
      title: "Christian Religious Education Grade 5 (KICD revised design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/CRE-GRADE-5-DESIGN-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 5 CRE curriculum design, October 2024.",
      totalSuggestedLessons: 90,
      strands: [
        { name: "1.0 Creation", subStrands: ["1.1 My Purpose (Talents and Abilities) (3 lessons)", "1.2 Work (3 lessons)", "1.3 The Fall of Man (3 lessons)", "1.4 Family Unity (3 lessons)"] },
        { name: "2.0 The Bible", subStrands: ["2.1 The Bible as a Guide (3 lessons)", "2.2 Peter and John in the Temple (3 lessons)", "2.3 King Solomon the Wise Ruler (3 lessons)", "2.4 Noah and His Sons (3 lessons)", "2.5 A Hand Writes on the Wall (3 lessons)", "2.6 Mount Carmel Contest (3 lessons)", "2.7 God's Protection (3 lessons)", "2.8 The Call of Moses (3 lessons)"] },
        { name: "3.0 The Life of Jesus Christ", subStrands: ["3.1 John the Baptist (3 lessons)", "3.2 The Baptism of Jesus Christ (3 lessons)", "3.3 Calming the Storm (3 lessons)", "3.4 Feeding the Four Thousand (3 lessons)", "3.5 Healing the Paralysed Man (3 lessons)", "3.6 Parable of the Lost Sheep (3 lessons)", "3.7 Sermon on the Mount (3 lessons)", "3.8 The Rich Young Ruler (3 lessons)", "3.9 A Friend at Midnight (3 lessons)"] },
        { name: "4.0 The Church", subStrands: ["4.1 The Early Church (3 lessons)", "4.2 The Lord's Supper (3 lessons)", "4.3 The Holy Spirit (3 lessons)", "4.4 Peter's Miraculous Rescue (3 lessons)"] },
        { name: "5.0 Christian Living", subStrands: ["5.1 Friendship Formation (3 lessons)", "5.2 Human Sexuality (3 lessons)", "5.3 Sanctity of Life (3 lessons)", "5.4 Alcohol, Drugs and Substance Abuse (3 lessons)", "5.5 Social Media (3 lessons)"] }
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
      title: "English Grade 5 (KICD revised curriculum design, September 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/ENGLISH-GRADE-5-UPDATED-Revised-Sept.pdf",
      sourceLabel: "Official KICD revised Grade 5 English design, September 2024. The searchable summary's lesson-count arithmetic is inconsistent, so sub-strand labels are indexed here without assigning disputed individual allocations; confirm counts in the full PDF.",
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Listening Comprehension", "Pronunciation and Vocabulary", "Speaking Fluency"] },
        { name: "2.0 Reading", subStrands: ["Extensive Reading", "Intensive Reading", "Fluency"] },
        { name: "3.0 Grammar in Use", subStrands: ["Word Classes", "Language Patterns", "Tense"] },
        { name: "4.0 Writing", subStrands: ["Creative Writing", "Functional Writing", "Mechanics of Writing"] }
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
    },
    "Arabic": {
      title: "Arabic Grade 5 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-five-designs/",
      sourceLabel: "Official KICD Grade 5 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 5 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Creative Arts": {
      title: "Creative Arts Grade 5 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-five-designs/",
      sourceLabel: "Official KICD Grade 5 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 5 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 5 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/FRENCH-GRADE-5-CURRICULUM-DESIGN-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 5 French design, October 2024. The design gives strand-level allocations; individual sub-strand allocations are not listed in this index.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["1.1 Interactive Speaking", "1.2 Oral Expression", "1.3 Interactive Listening", "1.4 Active Listening", "1.5 Listening for Information"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["2.1 Reading Aloud", "2.2 Reading for Understanding", "2.3 Guided Reading"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["3.1 Guided Writing"] }
      ]
    },
    "German": {
      title: "German Grade 5 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/GERMAN-GRADE-5-Edited-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 5 German design, October 2024. Strand-level allocations are published; individual sub-strand counts are not listed in this index.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["Listening for Gist", "Imitative Speaking", "Phonological Awareness"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["Reading Aloud", "Guided Reading", "Reading for Comprehension"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["Guided Writing"] }
      ]
    },
    "HRE": {
      title: "HRE Grade 5 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-five-designs/",
      sourceLabel: "Official KICD Grade 5 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "HRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 5 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Languages Grade 5 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/FINAL-GRADE-5-INDIGENOUS-LANGUAGE-Revised-Oct.pdf",
      sourceLabel: "Official KICD revised Grade 5 Indigenous Language design, October 2024; language-specific adaptation should follow the official design.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Attentive Listening: Poetry (2 lessons)", "Listening for Information: translation, instructions and vocabulary building (4 lessons)", "Listening for Comprehension (2 lessons)", "Fluency: Pronunciation (2 lessons)", "Expressing Self Creatively (2 lessons)", "Conversational Skills (2 lessons)", "Public Speaking (2 lessons)", "Language Strategies on Daily Experiences (2 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Reading for Information (6 lessons)", "Reading Fluency: speed and accuracy (2 lessons)", "Reading Comprehension (6 lessons)", "Extensive Reading: grade-appropriate texts, narratives and dialogue (4 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Handwriting (2 lessons)", "Punctuation: exclamation marks, quotation marks and question marks (2 lessons)", "Sequencing Ideas: connectors (2 lessons)", "Creative Writing: idioms, stories and poetry (6 lessons)", "Functional Writing: friendly letter, shopping list and recipe (6 lessons)"] }
      ]
    },
    "IRE": {
      title: "IRE Grade 5 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-five-designs/",
      sourceLabel: "Official KICD Grade 5 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 5 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 5 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-five-designs/",
      sourceLabel: "Official KICD Grade 5 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 5 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin": {
      title: "Mandarin Grade 5 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Mandarin-Grade-5-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 5 Mandarin design, October 2024.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Phonological Awareness: sound discrimination, initials and finals, rhyming, vocabulary and tone discrimination (9 lessons)", "Listening for Gist: active listening, comprehension and summarising (9 lessons)", "Imitative Speaking: pronunciation, intonation, rhythm, stress patterns, active listening and fluency (9 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Reading Aloud: Chinese tones, fluency, word recognition, oral presentation and vocabulary expansion (10 lessons)", "Guided Reading: word recognition, vocabulary development, reading strategies, articulation and intonation (8 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Guided Writing: spelling, word order, punctuation, Chinese tones and characters, handwriting, vocabulary, paragraph writing and sentence structures (9 lessons)"] }
      ]
    },
    "Science & Technology": {
      title: "Science & Technology Grade 5 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-five-designs/",
      sourceLabel: "Official KICD Grade 5 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Science & Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 5 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
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
      title: "English Grade 6 (KICD revised curriculum design, September 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/ENGLISH-GRADE-6-UPDATED-Revised-Sept.pdf",
      sourceLabel: "Official KICD revised Grade 6 English design, September 2024.",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Pronunciation and Vocabulary (39 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Extensive Reading (11 lessons)", "Intensive Reading (22 lessons)", "Fluency (3 lessons)"] },
        { name: "3.0 Language Use", subStrands: ["Word Classes (33 lessons)", "Tenses (6 lessons)"] },
        { name: "4.0 Writing", subStrands: ["Creative Writing (14 lessons)", "Functional Writing (6 lessons)", "Mechanics of Writing (13 lessons)", "Guided Compositions (3 lessons)"] }
      ]
    },
    "IRE": {
      title: "Islamic Religious Education Grade 6 (Revised 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/IRE-GRADE-6-CURRICULUM-DESIGNS-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 6 IRE design, October 2024; complete strand sequence and 90-lesson allocation.",
      totalSuggestedLessons: 90,
      strands: [
        { name: "1.0 Qur'an", subStrands: ["1.1 Selected Chapters (Surah) (12 lessons)"] },
        { name: "2.0 Hadith", subStrands: ["2.1 Hadith on Purity of Actions (3 lessons)", "2.2 Hadith on Dressing (3 lessons)", "2.3 Hadith on Planting (3 lessons)", "2.4 Hadith on Responsible Capabilities and Resources (3 lessons)"] },
        { name: "3.0 Pillars of Iman", subStrands: ["3.1 Stories of Prophets Ibrahim and Yusuf (A.S.) (8 lessons)", "3.2 Taqwa (God Consciousness) (2 lessons)", "3.3 Tawakul (Reliance on Allah) (2 lessons)"] },
        { name: "4.0 Devotional Acts", subStrands: ["4.1 Twaharah (Purity) (6 lessons)", "4.2 Zakat (3 lessons)", "4.3 Saum (4 lessons)", "4.4 Hajj (3 lessons)"] },
        { name: "5.0 Akhlaq (Moral Teachings)", subStrands: ["5.1 Virtues: Work as a Form of Ibadah (2 lessons)", "5.2 Adalah (Justice) (2 lessons)", "5.3 Prohibitions in Islam: Intoxicants (3 lessons)", "5.4 Israf (Extravagance) (2 lessons)", "5.5 Dua (Supplication When Travelling) (2 lessons)"] },
        { name: "6.0 Muamalat (Social Relations)", subStrands: ["6.1 Fair Treatment of Workers (3 lessons)", "6.2 Relationship with People of Other Faiths (3 lessons)", "6.3 Corruption (4 lessons)"] },
        { name: "7.0 History of Islam", subStrands: ["7.1 Battle of Badr and Uhud (4 lessons)", "7.2 Treaty of Hudaybiya (3 lessons)", "7.3 Conquest of Makkah (7 lessons)", "7.4 Farewell Pilgrimage (3 lessons)"] }
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
    },
    "Arabic": {
      title: "Arabic Grade 6 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-six-designs/",
      sourceLabel: "Official KICD Grade 6 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 6 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Creative Arts": {
      title: "Creative Arts Grade 6 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-six-designs/",
      sourceLabel: "Official KICD Grade 6 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 6 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 6 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/FRENCH-GRADE-6-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 6 French design, October 2024. Strand-level allocations are listed; individual sub-strand lesson counts are not listed in this index.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["1.1 Interactive Speaking", "1.2 Oral Expression", "1.3 Interactive Listening", "1.4 Active Listening", "1.5 Listening for Information"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["2.1 Reading Aloud", "2.2 Reading for Understanding", "2.3 Guided Reading"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["3.1 Guided Writing"] }
      ]
    },
    "German": {
      title: "German Grade 6 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-six-designs/",
      sourceLabel: "Official KICD Grade 6 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "German curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 6 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "Hindu Religious Education Grade 6 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/HRE-GRADE-6-Revised.pdf",
      sourceLabel: "Official KICD Grade 6 Hindu Religious Education revised design, October 2024. Verify any later revision before final school planning.",
      totalSuggestedLessons: 90,
      strands: [
        { name: "1.0 Creation", subStrands: ["1.1 Creation as per Buddhist and Sikh Faiths (8 lessons)", "1.2 Gifts of Nature (8 lessons)"] },
        { name: "2.0 Manifestations of Paramatma", subStrands: ["2.1 Enlightened Beings and Social Welfare (8 lessons)"] },
        { name: "3.0 Scriptures", subStrands: ["3.1 Scriptures and Moral Values (8 lessons)"] },
        { name: "4.0 Worship", subStrands: ["4.1 Basic Chants and Mantras in Buddhist Faith (8 lessons)", "4.2 Buddhist Vihaars in Africa (8 lessons)"] },
        { name: "5.0 Sadachaar: Social Ethics", subStrands: ["5.1 Managing Resources (9 lessons)"] },
        { name: "6.0 Yoga", subStrands: ["6.1 Asanas (8 lessons)", "6.2 Communal Aspect of Yoga (9 lessons)"] },
        { name: "7.0 Principles of Dharma", subStrands: ["7.1 Virtues and Principles of Dharma in Buddhist Faith (8 lessons)"] },
        { name: "8.0 Utsav: Social Festivals", subStrands: ["8.1 Utsavs from Other Faiths (8 lessons)"] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Language Grade 6 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-six-designs/",
      sourceLabel: "Official KICD Grade 6 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 6 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 6 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-six-designs/",
      sourceLabel: "Official KICD Grade 6 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 6 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin": {
      title: "Mandarin Grade 6 (KICD revised curriculum design, October 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/10/Mandarin-Grade-6-Revised.pdf",
      sourceLabel: "Official KICD revised Grade 6 Mandarin design, October 2024.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Active Listening: attentive listening, pronunciation, comprehension and vocabulary development (9 lessons)", "Oral Expression: vocabulary and language use, organization of ideas, active listening and pronunciation (9 lessons)", "Interactive Speaking: vocabulary, turn-taking, active listening and presentation skills (9 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Reading Aloud: Chinese tones, pronunciation, word recognition, fluency and oral presentation (8 lessons)", "Guided Reading: vocabulary, fluency, comprehension and reading strategies (10 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Guided Writing: writing mechanics, Chinese characters, vocabulary, paragraph writing, sentence structures and handwriting (9 lessons)"] }
      ]
    },
    "Science & Technology": {
      title: "Science & Technology Grade 6 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-six-designs/",
      sourceLabel: "Official KICD Grade 6 Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Science & Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 6 design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
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
    },
    "Agriculture": {
      title: "Agriculture Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade7-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 Agriculture curriculum design, April 2024.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Conservation of Resources", subStrands: ["1.1 Controlling Soil Pollution (7 lessons)", "1.2 Constructing Water Retention Structures (8 lessons)", "1.3 Conserving Food Nutrients (9 lessons)", "1.4 Growing Trees (8 lessons)"] },
        { name: "2.0 Food Production Processes", subStrands: ["2.1 Crop Establishment (9 lessons)", "2.2 Selected Crop Management Practices (8 lessons)", "2.3 Preparing Animal Products (9 lessons)", "2.4 Cooking Food (9 lessons)"] },
        { name: "3.0 Hygiene Practices", subStrands: ["3.1 Hygiene in Rearing Animals (9 lessons)", "3.2 Laundry: Loose Coloured Items (8 lessons)"] },
        { name: "4.0 Production Techniques", subStrands: ["4.1 Knitting Skills (10 lessons)", "4.2 Constructing Framed Suspended Garden (10 lessons)", "4.3 Adding Value to Crop Produce (8 lessons)", "4.4 Making Homemade Soap (8 lessons)"] }
      ]
    },

    "Arabic": {
      title: "Arabic Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Creative Arts": {
      title: "Creative Arts Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "CRE": {
      title: "Christian Religious Education Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-7-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 CRE curriculum design, April 2024.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Overview of Christian Religious Education", subStrands: ["1.1 Importance of Learning CRE (6 lessons)"] },
        { name: "2.0 Creation", subStrands: ["2.1 Accounts of Creation (6 lessons)", "2.2 Responsibility over Animals, Fish and Birds (6 lessons)", "2.3 Responsibility over Plants (6 lessons)", "2.4 Use and Misuse of God's Creation (6 lessons)"] },
        { name: "3.0 The Bible", subStrands: ["3.1 Functions of the Bible (6 lessons)", "3.2 Divisions of the Bible (6 lessons)", "3.3 Bible Translation (6 lessons)", "3.4 Leadership in the Bible: Moses (7 lessons)"] },
        { name: "4.0 The Early Life of Jesus Christ", subStrands: ["4.1 Background to the Birth of Jesus Christ (12 lessons)", "4.2 The Birth and Childhood of Jesus Christ (7 lessons)"] },
        { name: "5.0 The Church in Action", subStrands: ["5.1 Selected Forms of Worship (6 lessons)", "5.2 Role of the Church in Education and Health (5 lessons)"] },
        { name: "6.0 Christian Living Today", subStrands: ["6.1 Human Sexuality (7 lessons)", "6.2 Christian Marriage and Family (7 lessons)", "6.3 Alcohol and Substance Use (7 lessons)", "6.4 Gambling (7 lessons)", "6.5 Social Media (7 lessons)"] }
      ]
    },
    "English": {
      title: "English Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-7-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 French curriculum design, April 2024. The design gives strand-level allocations; individual sub-strand lesson counts are not listed in this index.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["1.1 Interactive Speaking", "1.2 Oral Expression", "1.3 Interactive Listening", "1.4 Active Listening", "1.5 Listening for Information"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["2.1 Reading Aloud", "2.2 Reading for Understanding", "2.3 Guided Reading"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["3.1 Guided Writing"] }
      ]
    },
    "German": {
      title: "German Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "German curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "HRE": {
      title: "Hindu Religious Education Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-7-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 Hindu Religious Education design, April 2024. The source summary labels the allocation column 'Number of Lessons Per Week'; verify the design and any later revision before planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Manifestations of Paramatma", subStrands: ["1.1 Enlightened Beings (15 lessons)"] },
        { name: "2.0 Scriptures", subStrands: ["2.1 Scriptural Texts (14 lessons)"] },
        { name: "3.0 Principles of Dharma", subStrands: ["3.1 Fundamental Principles (14 lessons)"] },
        { name: "4.0 Religious Practices", subStrands: ["4.1 Buddhist Practices (15 lessons)", "4.2 Places of Worship (16 lessons)"] },
        { name: "5.0 Yog", subStrands: ["5.1 Concepts of Yog (16 lessons)", "5.2 Path of Devotion: Bhakti Yog (15 lessons)"] },
        { name: "6.0 Rites of Passage", subStrands: ["6.1 Religious Ceremonies (15 lessons)"] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Language Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Integrated Science": {
      title: "Integrated Science Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-7-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 Integrated Science curriculum design, April 2024.",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Scientific Investigation", subStrands: ["1.1 Introduction to Integrated Science (12 lessons)", "1.2 Laboratory Safety (14 lessons)", "1.3 Laboratory Apparatus and Instruments (16 lessons)"] },
        { name: "2.0 Mixtures, Elements and Compounds", subStrands: ["2.1 Mixtures (18 lessons)", "2.2 Acids, Bases and Indicators (22 lessons)"] },
        { name: "3.0 Living Things and the Environment", subStrands: ["3.1 Human Reproductive System (16 lessons)", "3.2 Human Excretory System (18 lessons)"] },
        { name: "4.0 Force and Energy", subStrands: ["4.1 Electrical Energy (18 lessons)", "4.2 Magnetism (16 lessons)"] }
      ]
    },

    "IRE": {
      title: "Islamic Religious Education Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-7-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 IRE curriculum design, April 2024.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Qur'an", subStrands: ["1.1 Ulumul Qur'an (8 lessons)", "1.2 Selected Chapters (Surah) (12 lessons)"] },
        { name: "2.0 Hadith", subStrands: ["2.1 Ulum al-Hadith (8 lessons)", "2.2 Selected Hadith (8 lessons)"] },
        { name: "3.0 Pillars of Iman", subStrands: ["3.1 Significance of Tawheed (4 lessons)", "3.2 Shirk (8 lessons)"] },
        { name: "4.0 Devotional Acts", subStrands: ["4.1 Swalah (10 lessons)", "4.2 Zakat (5 lessons)", "4.3 Saum (5 lessons)"] },
        { name: "5.0 Akhlaq (Moral Teachings)", subStrands: ["5.1 Dimensions of Morality in Islam (4 lessons)", "5.2 Virtues in Islam (5 lessons)", "5.3 Prohibitions in Islam (8 lessons)"] },
        { name: "6.0 Muamalat (Social Relations)", subStrands: ["6.1 Marriage (6 lessons)", "6.2 Trade and Finance in Islam (8 lessons)", "6.3 Contemporary Issues (8 lessons)"] },
        { name: "7.0 Islamic Heritage and Civilisation", subStrands: ["7.1 Reforms Introduced by Prophet Muhammad (S.A.W.) (13 lessons)"] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin": {
      title: "Mandarin Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mandarin curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Pre-Technical Studies": {
      title: "Pre-Technical Studies Grade 7 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/",
      sourceLabel: "Official KICD Grade Seven Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Pre-Technical Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Seven design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 7 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-7-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 7 Social Studies design, April 2024. Verify any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Social Studies and Personal Development", subStrands: ["1.1 Self-Exploration (6 lessons)", "1.2 Social Entrepreneurial Opportunities (5 lessons)"] },
        { name: "2.0 People and Relationships", subStrands: ["2.1 Human Origin (4 lessons)", "2.2 Early Civilisation (4 lessons)", "2.3 Slavery and Servitude (5 lessons)", "2.4 Developments in Medium of Trade (4 lessons)", "2.5 Diversity and Interpersonal Relationships (5 lessons)", "2.6 Peaceful Coexistence (4 lessons)"] },
        { name: "3.0 Community Service-Learning", subStrands: ["3.1 Community Service-Learning Project (20 lessons)"] },
        { name: "4.0 Natural and Historic Built Environments", subStrands: ["4.1 Historical Information (4 lessons)", "4.2 Historical Development of Agriculture (4 lessons)", "4.3 Maps and Map Work (10 lessons)", "4.4 Earth and the Solar System (5 lessons)", "4.5 Weather (5 lessons)", "4.6 Fieldwork (10 lessons)"] },
        { name: "5.0 Political Development and Governance", subStrands: ["5.1 Political Development in Africa (5 lessons)", "5.2 The Constitution of Kenya (5 lessons)", "5.3 Human Rights (5 lessons)", "5.4 African Diasporas (5 lessons)", "5.5 Citizenship (5 lessons)"] }
      ]
    },
  },
  "Grade 8": {
    "Agriculture": {
      title: "Agriculture Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-8-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 Agriculture design, April 2024; verify any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Conservation of Resources", subStrands: ["1.1 Soil Conservation Measures (10 lessons)", "1.2 Water Harvesting and Storage (9 lessons)"] },
        { name: "2.0 Food Production Processes", subStrands: ["2.1 Kitchen and Backyard Gardening (9 lessons)", "2.2 Poultry Rearing in a Fold (11 lessons)", "2.3 Crop Pest and Disease Control (10 lessons)", "2.4 Preparation of Animal Products (9 lessons)", "2.5 Preserving Animal Products (9 lessons)", "2.6 Cooking: Preparing a Balanced Meal (11 lessons)"] },
        { name: "3.0 Hygiene Practices", subStrands: ["3.1 Cleaning the Kitchen (9 lessons)"] },
        { name: "4.0 Production Techniques", subStrands: ["4.1 Sewing Skills: Constructing Household Items (14 lessons)", "4.2 Constructing an Innovative Animal Waterer (10 lessons)", "4.3 ICT Support Services (9 lessons)"] }
      ]
    },
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
    },
    "Arabic": {
      title: "Arabic Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Creative Arts": {
      title: "Creative Arts Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Creative Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "CRE": {
      title: "Christian Religious Education Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-8-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 CRE curriculum design, April 2024.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Creation", subStrands: ["1.1 Origin and Consequences of Sin (6 lessons)", "1.2 God's Plan for Redemption (6 lessons)"] },
        { name: "2.0 The Bible", subStrands: ["2.1 Faith and God's Promises (6 lessons)", "2.2 Abrahamic Covenant (6 lessons)", "2.3 Leadership in Israel: Saul (6 lessons)"] },
        { name: "3.0 The Life and Ministry of Jesus", subStrands: ["3.1 Healing of Blind Bartimaeus (7 lessons)", "3.2 Calming the Storm (7 lessons)", "3.3 Healing of the Paralytic (7 lessons)"] },
        { name: "4.0 Teachings of Jesus Christ", subStrands: ["4.1 Teaching on Prayer (7 lessons)", "4.2 The Lost Sheep (7 lessons)"] },
        { name: "5.0 The Church", subStrands: ["5.1 The Holy Spirit (7 lessons)", "5.2 Acts of Compassion (7 lessons)"] },
        { name: "6.0 Christian Living Today", subStrands: ["6.1 Family Relationships (6 lessons)", "6.2 Human Sexuality: Responsible Sexual Behaviour (7 lessons)", "6.3 Sacredness of Life (7 lessons)", "6.4 Bullying (7 lessons)", "6.5 Work: Talents and Abilities (7 lessons)", "6.6 Leisure (7 lessons)"] }
      ]
    },
    "English": {
      title: "English Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "French curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "German": {
      title: "German Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-8-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 German design, April 2024. Published allocations are 27 lessons for Listening and Speaking, 18 for Reading and 9 for Writing, plus 6 showcase lessons. Individual sub-strand lesson counts are not stated in this index; verify the design before planning.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking (27 lessons across strand)", subStrands: ["Active Listening", "Listening for Information", "Interactive Speaking", "Oral Expression"] },
        { name: "2.0 Reading (18 lessons across strand)", subStrands: ["Reading Comprehension", "Reading Aloud: Articulation", "Reading Aloud: Fluency"] },
        { name: "3.0 Writing (9 lessons across strand)", subStrands: ["Guided Writing", "German Orthography Rules", "Vocabulary", "Creative Writing", "Functional Writing"] }
      ]
    },
    "HRE": {
      title: "Hindu Religious Education Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-8-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 Hindu Religious Education design, April 2024. Verify any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Manifestations of Paramatma", subStrands: ["1.1 Enlightened Beings (14 lessons)"] },
        { name: "2.0 Scriptures", subStrands: ["2.1 Scriptural Texts (13 lessons)"] },
        { name: "3.0 Principles of Dharma", subStrands: ["3.1 Fundamental Principles (13 lessons)", "3.2 Buddhist Principles (13 lessons)"] },
        { name: "4.0 Religious Practices", subStrands: ["4.1 Protocols in Sanatan Dharma (14 lessons)", "4.2 Protocols in Jain Dharma (13 lessons)"] },
        { name: "5.0 Yog", subStrands: ["5.1 Path of Action: Karma Yog (14 lessons)"] },
        { name: "6.0 Sanskaars", subStrands: ["6.1 Religious Ceremonies (13 lessons)", "6.2 Buddhist Sanskaars (13 lessons)"] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Languages Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-8-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 Indigenous Languages design, April 2024; language-specific adaptation should follow the official design.",
      totalSuggestedLessons: 60,
      additionalShowcaseLessons: 6,
      strands: [
        { name: "1.0 Listening and Speaking", subStrands: ["Listening for Information (2 lessons)", "Listening for Comprehension (2 lessons)", "Attentive Listening (2 lessons)", "Public Speaking: Impromptu Speech (2 lessons)", "Storytelling (4 lessons)", "Self-Expression: Interviews (2 lessons)", "Presentation Skills: Debate and Songs (4 lessons)"] },
        { name: "2.0 Reading", subStrands: ["Reading Comprehension (4 lessons)", "Extensive Reading: Library Skills and Grade-Appropriate Texts (4 lessons)", "Reading for Information (8 lessons)", "Intensive Reading (2 lessons)"] },
        { name: "3.0 Writing", subStrands: ["Essay Writing (4 lessons)", "Social Writing: Cards (2 lessons)", "Creative Writing (4 lessons)", "Writing for Information (6 lessons)", "Functional Writing: Posters (2 lessons)"] }
      ]
    },
    "Integrated Science": {
      title: "Integrated Science Grade 8 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-8-Design-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 8 Integrated Science design, April 2024. Verify any later revision before final school planning.",
      totalSuggestedLessons: 150,
      strands: [
        { name: "1.0 Mixtures, Elements and Compounds", subStrands: ["1.1 Elements and Compounds (18 lessons)", "1.2 Physical and Chemical Changes (22 lessons)", "1.3 Classes of Fire (20 lessons)"] },
        { name: "2.0 Living Things and the Environment", subStrands: ["2.1 The Cell (20 lessons)", "2.2 Movement of Materials in and out of the Cell (16 lessons)", "2.3 Reproduction in Human Beings (18 lessons)"] },
        { name: "3.0 Force and Energy", subStrands: ["3.1 Transformation of Energy (20 lessons)", "3.2 Pressure (16 lessons)"] }
      ]
    },
    "IRE": {
      title: "IRE Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "IRE curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin": {
      title: "Mandarin Grade 8 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
      sourceLabel: "Official KICD Grade Eight Designs page. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mandarin curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade Eight design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Pre-Technical Studies": {
      title: "Pre-Technical Studies Grade 8 (KICD revised curriculum design, July 2024)",
      sourceUrl: "https://drive.google.com/file/d/1Cvh2JSBlrHU4z4FKt7uVMgTMXEWq9jdu/preview",
      sourceLabel: "KICD-linked revised Grade 8 design, July 2024. The summary table gives a 120-lesson sequence, but some detailed sub-strand pages show different allocations and labels; confirm the complete current sequence and lesson counts against the full design before final school planning.",
      totalSuggestedLessons: 120,
      reviewRequired: true,
      strands: [
        { name: "1.0 Foundations of Pre-Technical Studies", subStrands: ["1.1 Fire Safety (7 lessons)", "1.2 Data Safety (11 lessons)"] },
        { name: "2.0 Communication in Pre-Technical Studies", subStrands: ["2.1 Plane Geometry (4 lessons)", "2.2 Dimensioning (7 lessons)", "2.3 Plain Scale Drawing (6 lessons)", "2.4 Visual Programming (14 lessons)"] },
        { name: "3.0 Materials for Production", subStrands: ["3.1 Composite Materials (7 lessons)", "3.2 Ceramics (7 lessons)"] },
        { name: "4.0 Tools and Production", subStrands: ["4.1 Cutting Tools (15 lessons)", "4.2 Computer Software (6 lessons)"] },
        { name: "5.0 Entrepreneurship", subStrands: ["5.1 Bookkeeping (12 lessons)", "5.2 Income and Budgeting (9 lessons)", "5.3 Marketing Goods and Services (8 lessons)", "5.4 Distribution of Goods and Services (7 lessons)"] }
      ]
    },
    "Social Studies": {
      title: "Social Studies Grade 8 (KICD curriculum design, September 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/09/GRADE-8-SOCIAL-STUDIES.pdf",
      sourceLabel: "Official KICD Grade 8 Social Studies design, September 2024. Verify any later revision before final school planning.",
      totalSuggestedLessons: 120,
      strands: [
        { name: "1.0 Social Studies and Personal Management", subStrands: ["1.1 Self-Improvement (4 lessons)", "1.2 Self-Esteem Assessment (4 lessons)"] },
        { name: "2.0 Community Service Learning", subStrands: ["2.1 Community Service Learning Project (8 lessons)"] },
        { name: "3.0 People and Relationships", subStrands: ["3.1 Scientific Theory about Human Origin (6 lessons)", "3.2 Early Civilisations (8 lessons)", "3.3 Trans-Saharan Slave Trade (6 lessons)", "3.4 Population Growth in Africa (6 lessons)", "3.5 Diversity and Interpersonal Skills (8 lessons)", "3.6 Peaceful Conflict Resolution (8 lessons)"] },
        { name: "4.0 Natural and Historic Built Environments", subStrands: ["4.1 Map Reading and Interpretation (12 lessons)", "4.2 Weather and Climate (10 lessons)", "4.3 Vegetation in Africa (8 lessons)", "4.4 Historical Sites and Monuments in Africa (8 lessons)"] },
        { name: "5.0 Political Developments and Governance", subStrands: ["5.1 The Constitution of Kenya (6 lessons)", "5.2 Human Rights (8 lessons)", "5.3 Citizenship (10 lessons)"] }
      ]
    },
  },
  "Grade 9": {
    "Agriculture": {
      title: "Agriculture Grade 9 (KICD curriculum design, April 2024)",
      sourceUrl: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-9-Formatted-April-2024.pdf",
      sourceLabel: "Official KICD Grade 9 Agriculture design, April 2024. Verify any later revision before final school planning.",
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
    },
    "Agriculture": {
      title: "Agriculture Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Agriculture curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Aviation": {
      title: "Aviation Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Aviation curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Biology": {
      title: "Biology Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Biology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Chemistry": {
      title: "Chemistry Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Chemistry curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Community Service Learning": {
      title: "Community Service Learning Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Community Service Learning curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English": {
      title: "English Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Fasihi ya Kiswahili": {
      title: "Fasihi ya Kiswahili Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Fasihi ya Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Fine Arts": {
      title: "Fine Arts Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Fine Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "General Science": {
      title: "General Science Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "General Science curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Geography": {
      title: "Geography Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Geography curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "History & Citizenship": {
      title: "History & Citizenship Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "History & Citizenship curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Home Science": {
      title: "Home Science Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Home Science curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "ICT": {
      title: "ICT Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "ICT curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Literature in English": {
      title: "Literature in English Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Literature in English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Marine and Fisheries": {
      title: "Marine and Fisheries Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Marine and Fisheries curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Music & Dance": {
      title: "Music & Dance Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Music & Dance curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Physical Education": {
      title: "Physical Education Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Physical Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Power Mechanics": {
      title: "Power Mechanics Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Power Mechanics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Sports & Recreation": {
      title: "Sports & Recreation Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Sports & Recreation curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Theatre & Film": {
      title: "Theatre & Film Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Theatre & Film curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Woodwork": {
      title: "Woodwork Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Woodwork curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Advanced English": {
      title: "Advanced English Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Advanced English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Advanced Mathematics": {
      title: "Advanced Mathematics Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Advanced Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Arabic": {
      title: "Arabic Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Building and Construction": {
      title: "Building and Construction Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Building and Construction curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Business Studies": {
      title: "Business Studies Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Business Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Computer Studies": {
      title: "Computer Studies Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Computer Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Drawing and Design": {
      title: "Drawing and Design Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Drawing and Design curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Electrical Technology": {
      title: "Electrical Technology Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Electrical Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "French curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "German": {
      title: "German Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "German curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Hindu Religious Education": {
      title: "Hindu Religious Education Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Hindu Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Language Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Islamic Religious Education": {
      title: "Islamic Religious Education Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Islamic Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin Chinese": {
      title: "Mandarin Chinese Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mandarin Chinese curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Marine and Fisheries Technology": {
      title: "Marine and Fisheries Technology Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Marine and Fisheries Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Media Technology": {
      title: "Media Technology Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Media Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Metal Technology": {
      title: "Metal Technology Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Metal Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Sign Language": {
      title: "Sign Language Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Sign Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Wood Technology": {
      title: "Wood Technology Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Wood Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Christian Religious Education": {
      title: "Christian Religious Education Grade 10 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
      sourceLabel: "Official KICD Grade 10 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Christian Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 10 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
  "Grade 11": {
    "Agriculture": {
      title: "Agriculture Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Agriculture curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Aviation": {
      title: "Aviation Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Aviation curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Biology": {
      title: "Biology Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Biology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Chemistry": {
      title: "Chemistry Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Chemistry curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Community Service Learning": {
      title: "Community Service Learning Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Community Service Learning curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Core Mathematics": {
      title: "Core Mathematics Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Core Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English": {
      title: "English Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Fasihi ya Kiswahili": {
      title: "Fasihi ya Kiswahili Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Fasihi ya Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Fine Arts": {
      title: "Fine Arts Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Fine Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "General Science": {
      title: "General Science Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "General Science curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Geography": {
      title: "Geography Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Geography curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "History & Citizenship": {
      title: "History & Citizenship Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "History & Citizenship curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Home Science": {
      title: "Home Science Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Home Science curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "ICT": {
      title: "ICT Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "ICT curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Literature in English": {
      title: "Literature in English Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Literature in English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Marine and Fisheries": {
      title: "Marine and Fisheries Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Marine and Fisheries curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Music & Dance": {
      title: "Music & Dance Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Music & Dance curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Physical Education": {
      title: "Physical Education Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Physical Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Physics": {
      title: "Physics Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Physics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Power Mechanics": {
      title: "Power Mechanics Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Power Mechanics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Sports & Recreation": {
      title: "Sports & Recreation Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Sports & Recreation curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Theatre & Film": {
      title: "Theatre & Film Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Theatre & Film curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Woodwork": {
      title: "Woodwork Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Woodwork curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Advanced English": {
      title: "Advanced English Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Advanced English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Advanced Mathematics": {
      title: "Advanced Mathematics Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Advanced Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Arabic": {
      title: "Arabic Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Building and Construction": {
      title: "Building and Construction Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Building and Construction curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Business Studies": {
      title: "Business Studies Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Business Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Computer Studies": {
      title: "Computer Studies Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Computer Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Drawing and Design": {
      title: "Drawing and Design Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Drawing and Design curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Electrical Technology": {
      title: "Electrical Technology Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Electrical Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "French curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "German": {
      title: "German Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "German curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Hindu Religious Education": {
      title: "Hindu Religious Education Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Hindu Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Language Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Islamic Religious Education": {
      title: "Islamic Religious Education Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Islamic Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin Chinese": {
      title: "Mandarin Chinese Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mandarin Chinese curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Marine and Fisheries Technology": {
      title: "Marine and Fisheries Technology Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Marine and Fisheries Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Media Technology": {
      title: "Media Technology Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Media Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Metal Technology": {
      title: "Metal Technology Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Metal Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Sign Language": {
      title: "Sign Language Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Sign Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Wood Technology": {
      title: "Wood Technology Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Wood Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Christian Religious Education": {
      title: "Christian Religious Education Grade 11 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eleven/",
      sourceLabel: "Official KICD Grade 11 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Christian Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 11 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  },
  "Grade 12": {
    "Agriculture": {
      title: "Agriculture Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Agriculture curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Aviation": {
      title: "Aviation Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Aviation curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Biology": {
      title: "Biology Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Biology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Chemistry": {
      title: "Chemistry Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Chemistry curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Community Service Learning": {
      title: "Community Service Learning Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Community Service Learning curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Core Mathematics": {
      title: "Core Mathematics Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Core Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "English": {
      title: "English Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Fasihi ya Kiswahili": {
      title: "Fasihi ya Kiswahili Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Fasihi ya Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Fine Arts": {
      title: "Fine Arts Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Fine Arts curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "General Science": {
      title: "General Science Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "General Science curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Geography": {
      title: "Geography Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Geography curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "History & Citizenship": {
      title: "History & Citizenship Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "History & Citizenship curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Home Science": {
      title: "Home Science Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Home Science curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "ICT": {
      title: "ICT Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "ICT curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Kiswahili": {
      title: "Kiswahili Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Kiswahili curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Literature in English": {
      title: "Literature in English Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Literature in English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Marine and Fisheries": {
      title: "Marine and Fisheries Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Marine and Fisheries curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Music & Dance": {
      title: "Music & Dance Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Music & Dance curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Physical Education": {
      title: "Physical Education Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Physical Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Physics": {
      title: "Physics Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Physics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Power Mechanics": {
      title: "Power Mechanics Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Power Mechanics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Sports & Recreation": {
      title: "Sports & Recreation Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Sports & Recreation curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Theatre & Film": {
      title: "Theatre & Film Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Theatre & Film curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Woodwork": {
      title: "Woodwork Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. Verify the relevant senior-school pathway/track and current design. Curriculum sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Woodwork curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 design for the selected pathway/track to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Advanced English": {
      title: "Advanced English Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Advanced English curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Advanced Mathematics": {
      title: "Advanced Mathematics Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Advanced Mathematics curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Arabic": {
      title: "Arabic Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Arabic curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Building and Construction": {
      title: "Building and Construction Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Building and Construction curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Business Studies": {
      title: "Business Studies Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Business Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Computer Studies": {
      title: "Computer Studies Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Computer Studies curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Drawing and Design": {
      title: "Drawing and Design Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Drawing and Design curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Electrical Technology": {
      title: "Electrical Technology Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Electrical Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "French": {
      title: "French Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "French curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "German": {
      title: "German Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "German curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Hindu Religious Education": {
      title: "Hindu Religious Education Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Hindu Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Indigenous Language": {
      title: "Indigenous Language Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Indigenous Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Islamic Religious Education": {
      title: "Islamic Religious Education Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Islamic Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Mandarin Chinese": {
      title: "Mandarin Chinese Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Mandarin Chinese curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Marine and Fisheries Technology": {
      title: "Marine and Fisheries Technology Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Marine and Fisheries Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Media Technology": {
      title: "Media Technology Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Media Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Metal Technology": {
      title: "Metal Technology Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Metal Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Sign Language": {
      title: "Sign Language Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Sign Language curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Wood Technology": {
      title: "Wood Technology Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Wood Technology curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
    "Christian Religious Education": {
      title: "Christian Religious Education Grade 12 (KICD source-linked placeholder)",
      sourceUrl: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-twelve/",
      sourceLabel: "Official KICD Grade 12 curriculum-design page. This is an available subject design, not a claim that every learner takes it. Topic sequence awaits transcription and verification before scheme generation.",
      strands: [
        { name: "Christian Religious Education curriculum sequence not yet indexed", subStrands: ["Use the official KICD Grade 12 subject design to confirm the current strand and sub-strand sequence before planning."] }
      ]
    },
  }
};

// One shared rule keeps the UI and the validation script from disagreeing about
// whether an entry contains real topic labels or a source-only placeholder.
const placeholderPattern = /(?:use the official KICD .* to confirm the current strand and sub-strand sequence|curriculum sequence not yet indexed|awaits transcription and verification|strand sequence awaits transcription)/i;

export function isCurriculumPlaceholder(item, curriculum = null) {
  if (typeof item === "string" && placeholderPattern.test(item)) return true;
  if (!curriculum) return false;
  // A source may contain a topic list but still require human reconciliation before planning.
  if (curriculum.reviewRequired === true) return true;
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
