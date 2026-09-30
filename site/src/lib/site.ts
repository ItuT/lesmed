export const site = {
  name: "Lesmed Community Health Centre",
  shortName: "Lesmed",
  url: "https://lesmedhealth.co.za",
  tagline: "Bringing Healthcare Closer to Home",
  motto: "Quality Care. Compassionate Service. Healthier Community.",
  secondaryLine: "Quality Affordable Healthcare Starts Here",
  preventionLine:
    "Your health is our priority — because prevention is better than cure.",
  practiceNumber: "1328034",
  address: {
    street: "922 Manqoba Complex, R25",
    town: "Verena",
    province: "Mpumalanga",
    country: "South Africa",
  },
  phone: {
    primary: "078 531 6460",
    primaryIntl: "+27785316460",
    afterHours: "066 493 6192",
    afterHoursIntl: "+27664936192",
  },
  whatsapp:
    "https://wa.me/27785316460?text=Hello%20Lesmed%2C%20I%27d%20like%20to%20book%20an%20appointment.",
  email: "dr.lesofe@lesmedhealth.co.za",
  instagram: "lesmed_community_health",
  instagramUrl: "https://www.instagram.com/lesmed_community_health",
  googleMapsShare: "https://share.google/MxPbKmBLqHnP8UZPU",
  mapEmbed:
    "https://maps.google.com/maps?q=Lesmed%20Community%20Health%20Centre%2C%20Verena%2C%20Mpumalanga&output=embed",
  hours: [
    { days: "Monday – Friday", time: "08:00 – 17:00" },
    { days: "Saturday", time: "08:00 – 14:30" },
    { days: "Sunday & Public Holidays", time: "Closed" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
};

export const services: Service[] = [
  {
    slug: "general-medical-care",
    title: "General Medical Care",
    icon: "stethoscope",
    summary:
      "Comprehensive primary care for adults, managing chronic conditions and offering preventive health screenings to maintain long-term wellness.",
    detail:
      "From everyday illnesses to ongoing chronic disease management, our general consultations cover the full spectrum of primary care. We focus on prevention as much as treatment, with regular health screenings that catch problems early — because prevention is better than cure.",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    icon: "female",
    summary:
      "Comprehensive care for reproductive health, including gynaecological consultations, maternal care, and specialised health education for women.",
    detail:
      "We provide pregnancy tests and antenatal care, family planning and contraception, pap smears and cervical cancer screening, and gynaecological consultations — all delivered with privacy, dignity, and care.",
  },
  {
    slug: "mens-health",
    title: "Men's Health",
    icon: "male",
    summary:
      "Specialised care for men's health, focusing on cardiovascular wellness, prostate health, and health education tailored to the male community.",
    detail:
      "Our men's health service encourages regular check-ups in a comfortable, judgement-free environment — covering cardiovascular screening, prostate health, circumcision, and general wellness education.",
  },
  {
    slug: "paediatric-care",
    title: "Paediatric Care",
    icon: "child",
    summary:
      "Expert care for children from infancy through adolescence, providing growth monitoring, vaccinations, and developmental health support.",
    detail:
      "Children need care that grows with them. We provide growth and development monitoring, vaccinations, and treatment of childhood illnesses — for every stage from infancy through adolescence.",
  },
  {
    slug: "minor-procedures",
    title: "Minor Procedures",
    icon: "bandage",
    summary:
      "Professional, safe, and accessible minor procedures performed in our clinic, including circumcision, wound care and suturing.",
    detail:
      "Not everything needs a hospital. We safely perform minor procedures on-site — circumcision, wound care, suturing, and IV therapy — saving our community the time and cost of travelling further for care.",
  },
  {
    slug: "laboratory-services",
    title: "Laboratory Services",
    icon: "flask",
    summary:
      "Accurate diagnostic testing and laboratory analysis provided on-site, ensuring timely results and continuity of care for our patients.",
    detail:
      "On-site laboratory testing of blood and urine with diagnostic panels means faster answers and uninterrupted care. We also offer sonar imaging, blood tests, and health screening panels.",
  },
];

export const alsoOffered = [
  "Pregnancy Tests & Antenatal Care",
  "Family Planning & Contraception",
  "Chronic Disease Management",
  "Health Screening & Preventative Care",
  "IV Therapy & Blood Tests",
  "Sonar",
  "Medical Forms",
  "Pap Smears & Cervical Cancer Screening",
];

export const team = [
  {
    name: "Dr. R.E Lesofe",
    photo: "/images/re-lesofe.jpg",
    qualifications: "MBChB (Pret)",
    role: "Medical Practitioner · Founder & Director",
    email: "dr.lesofe@lesmedhealth.co.za",
    bio: "Dr. Lesofe founded Lesmed Community Health Centre to bring quality, affordable healthcare closer to the people of Verena and the surrounding communities.",
  },
  {
    name: "Mrs. P Manyaka-Lesofe",
    photo: "/images/p-manyaka-lesofe.jpg",
    qualifications:
      "BSc, BSc (Hons) (Pret), PG Dip Management (NWU), MBA candidate (SU)",
    role: "Medical Scientist · Co-Founder & CEO",
    email: "p.lesofe@lesmedhealth.co.za",
    bio: "As Medical Scientist and CEO, Mrs. Manyaka-Lesofe leads the centre's operations and its laboratory services, combining scientific rigour with a passion for community health.",
  },
];

export const staff = [
  {
    name: "Mr Cedric Ditshego",
    firstName: "Cedric",
    role: "Healthcare Support, Counselling & Patient Services Officer",
    photo: "/images/cedric-ditshego.jpg",
    bio: [
      "With 18 years of experience across community health, counselling, clinical research and patient support, Cedric brings a wealth of experience and, most importantly, a genuine passion for people.",
      "He has worked as a Lead Research Counsellor at Ndlovu Research Centre, a counsellor/field worker at Ndlovu Medical Centre, and a care worker supporting patients living with dementia and Alzheimer's. His experience includes HIV counselling and testing, patient adherence and retention, health education, participant support and community-based follow-up.",
      "He also holds training in HIV & AIDS Counselling and Testing, Basic Counselling and Psychotherapy, Good Clinical Practice, Home-Based Healthcare, First Aid and CPR, among other professional training.",
    ],
    callout: {
      heading: "Because mental health matters too.",
      text: "Sometimes people don't just need medicine. They need someone who will listen, understand, encourage and help them navigate their health journey.",
    },
    languages: ["English", "Sepedi", "isiNdebele", "isiZulu"],
    languagesNote:
      "helping us create a more comfortable and accessible environment for the diverse communities we serve.",
    closing:
      "We are building Lesmed to be a place where our patients feel seen, heard, respected and cared for. Welcome to Lesmed, Cedric!",
  },
];

export const mission =
  "Our mission is simple: to make healthcare accessible, reliable, and inclusive, ensuring that every individual has the opportunity to live a healthier life.";

export const initiatives =
  "We empower rural communities through proactive health education and preventive care programs. Our initiatives are designed to promote wellness and ensure that every member of our community has access to the knowledge and resources needed for a healthier future.";

export const events = [
  {
    slug: "diabetes-book-launch-2026",
    kind: "Book Launch & Health Talk",
    title: "Diabetes: The Load Shedding of Our Health",
    subtitle: "Raising Awareness | Empowering Communities",
    tagline: "Knowledge today for a healthier tomorrow!",
    date: "Saturday, 31 October 2026",
    isoDate: "2026-10-31",
    venue: `${site.address.street}, ${site.address.town}, ${site.address.province}`,
    admission: "RSVP only · Maximum 100 participants",
    rsvpUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3wmRBL-PY0seYBFIkYqAt1UXelIMOp3f3TFvLOmBRpFFVtA/viewform",
    poster: "/images/event-diabetes-poster.jpg",
    speakersPoster: "/images/event-diabetes-speakers.jpg",
    themes: [
      { icon: "check", label: "Understand Diabetes" },
      { icon: "heart", label: "Make Healthier Choices" },
      { icon: "shield", label: "Stronger Communities" },
      { icon: "stethoscope", label: "A Healthier South Africa" },
    ],
    programme: [
      "Author conversation",
      "Keynote",
      "Community Q&A",
      "Health screening",
      "HbA1c testing",
      "Accu-Chek demonstration",
    ],
    speakers: [
      {
        name: "Dr. Ralits'ili Emile Lesofe",
        role: "Independent Medical Practitioner · HPCSA Reg: MP 0873330",
        bio: "Dr. Ralits'ili Emile Lesofe is an Independent Medical Practitioner with extensive experience across public and private healthcare settings, including paediatrics, general medicine and primary care. His career spans Philadelphia Hospital, Botshabelo District Hospital and Witbank Tertiary Hospital, where he developed skills in patient management, emergency care and multidisciplinary collaboration. As Founder and Director of Lesmed Community Health Centre in Verena, Mpumalanga, he is driven by a passion to bring quality, affordable healthcare to rural communities. He is certified in Basic Life Support, Advanced Cardiovascular Life Support, ECG interpretation, ultrasound and basic surgical skills.",
      },
      {
        name: "Dr. Rendani I. Manenzhe, PhD",
        role: "Medical Scientist · Author · Public Health Advocate",
        bio: "Dr. Rendani I. Manenzhe is a South African medical scientist, author and public health advocate dedicated to improving health outcomes through research, education and community engagement. He earned an MSc in Medicine and a PhD in Medical Microbiology from the University of Cape Town (UCT), where he developed expertise in infectious diseases, pathogen research and antimicrobial resistance. His work has contributed to the scientific understanding of how to prevent and control infectious diseases, particularly in vulnerable communities. In 2026, he published Diabetes: The Load Shedding of Our Health, a practical guide to diabetes awareness, management and prevention in South Africa.",
      },
    ],
  },
];
