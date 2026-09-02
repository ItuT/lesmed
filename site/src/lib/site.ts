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
    qualifications: "MBChB (Pret)",
    role: "Medical Practitioner · Founder & Director",
    email: "dr.lesofe@lesmedhealth.co.za",
    bio: "Dr. Lesofe founded Lesmed Community Health Centre to bring quality, affordable healthcare closer to the people of Verena and the surrounding communities.",
  },
  {
    name: "Mrs. P Manyaka-Lesofe",
    qualifications:
      "BSc, BSc (Hons) (Pret), PG Dip Management (NWU), MBA candidate (SU)",
    role: "Medical Scientist · Co-Founder & CEO",
    email: "p.lesofe@lesmedhealth.co.za",
    bio: "As Medical Scientist and CEO, Mrs. Manyaka-Lesofe leads the centre's operations and its laboratory services, combining scientific rigour with a passion for community health.",
  },
];

export const mission =
  "Our mission is simple: to make healthcare accessible, reliable, and inclusive, ensuring that every individual has the opportunity to live a healthier life.";

export const initiatives =
  "We empower rural communities through proactive health education and preventive care programs. Our initiatives are designed to promote wellness and ensure that every member of our community has access to the knowledge and resources needed for a healthier future.";
