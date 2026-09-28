export const profile = {
  name: "Akbar Farizky",
  role: "Software Developer",
  email: "toakbarfarizky@gmail.com",
  linkedin: "https://linkedin.com/in/akbarfarizky",
  github: "https://github.com/akbarfarizky",
  portfolio: "omabang.my.id",
  location: "Bandung, Indonesia",
  headline: "I build secure, scalable, intelligent systems.",
  manifesto: "Secure today, stronger tomorrow.",
};

export const roles = ["Cyber Security", "Software Developer", "QA Engineer"];

export const navLinks = [
  ["Home", "home"],
  ["Work", "projects"],
  ["Experience", "experience"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

export const skills = {
  Cybersecurity: ["Cybersecurity", "IT Security Fundamentals", "Vulnerability Assessment", "Penetration Testing", "Security Operations", "OWASP ZAP", "Burp Suite"],
  Development: ["Python", "JavaScript", "Golang", "Arduino", "SQL / PostgreSQL", "Next.js", "Node.js", "Supabase", "REST API Development"],
  "Emerging Technology": ["Artificial Intelligence", "Data Engineering", "Quality Assurance"],
};

export const techStack = [
  "Python",
  "JavaScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Burp Suite",
  "OWASP ZAP",
  "Supabase",
  "Golang",
  "Arduino",
  "AI / LLM",
];

export const projects = [
  {
    title: "E-Voting Application for Student Senate Election",
    tech: "Next.js",
    image: "/images/project-voting.jpeg",
    repo: "https://github.com/akbarfarizky/e-voting",
    description: "Developed a secure web-based electronic voting system with vote management, authentication, and reporting features.",
    detail: "Ensured data integrity and audit trail for the election process.",
  },
  {
    title: "School Readiness Assessment Application",
    tech: "Next.js + LLM Integration",
    image: "/images/project-school.jpeg",
    repo: "https://github.com/akbarfarizky/Aku-Masuk-TK",
    description: "Built a web application to assess and monitor early childhood school readiness indicators.",
    detail: "Designed an intuitive UI for educators and parents to track developmental progress.",
  },
  {
    title: "AI-Based Financial Recording Application",
    tech: "Node.js + LLM Integration",
    image: "/images/project-financial.jpeg",
    repo: "https://github.com/akbarfarizky/bot-finance-wa",
    description: "Developed an AI-assisted financial recording platform with automated transaction categorization.",
    detail: "Integrated Large Language Model (LLM) for natural language financial data processing and insights.",
  },
  {
    title: "PQC-File-Encryption-Lab",
    tech: "Golang + PQC",
    image: "/images/encrypt1.png",
    repo: "https://github.com/akbarfarizky/PQC-File-Encryption-Lab",
    description: "Built a post-quantum file encryption lab implementing quantum-resistant cryptography to protect files at rest.",
    detail: "Explores PQC key encapsulation paired with symmetric encryption so data stays safe against future quantum attacks.",
  },
];

export const education = [
  {
    degree: "Master of Cyber Defense",
    period: "2025 – Present",
    school: "Universitas Pertahanan Republik Indonesia (UNHAN RI)",
    highlight: "Full Scholarship Recipient",
    note: [
      "Top 5 Winner – Pentest Competition organized by Litbang TNI AD",
      "Finalist – AI Open Innovation Challenge 2026",
    ],
  },
  {
    degree: "Bachelor of Informatics Engineering",
    period: "2015 – 2020",
    school: "Universitas Komputer Indonesia (UNIKOM), Bandung",
    highlight: "",
    note: [],
  },
];

export const certifications = [
  ["Certificate of Completion – Cybersecurity Foundation", "Jabar Elite Academy — 2026"],
  ["Digital Forensics and Incident Response Training", "THALES CERT — 2026"],
  ["QA Engineer Bootcamp", "Sanbercode — 2025"],
  ["Associate Data Engineer", "BNSP · Valid 2023–2028"],
  ["Data Engineer Bootcamp", "Digitalskola — 2023"],
];

export const experiences = [
  {
    role: "Founder & Technology Business Owner",
    period: "2023 – 2025",
    company: "Laptop Sales & IT Services",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Managed end-to-end laptop sales operations including procurement, inventory, and supplier relationship management.",
      "Provided technical consultation and after-sales support, ensuring high customer satisfaction.",
      "Implemented digital business processes to streamline operations and online sales channels.",
    ],
  },
  {
    role: "Founder & IT Business Manager",
    period: "2018 – 2023",
    company: "Computer Hardware & Software Business",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Oversaw daily business operations including hardware/software procurement, inventory management, and technical troubleshooting.",
      "Delivered technical consultation and customer support for B2B and B2C clients.",
      "Managed multi-channel online sales and expanded business reach through digital marketing.",
    ],
  },
];

export const achievements = [
  ["Full Scholarship Awardee", "Universitas Pertahanan Republik Indonesia · Master's Program"],
  ["Top 5 Winner", "Pentest Competition · Litbang TNI AD"],
  ["Finalist", "AI Open Innovation Challenge 2026"],
  ["3rd Place", "East Java & Bali Regional Choir Competition · 2014"],
];

export const testimonials = [
  {
    quote: "Akbar is a highly skilled professional with deep knowledge in cybersecurity. He's proactive, detail-oriented and always delivers outstanding results.",
    name: "Colleague",
    role: "Cybersecurity Collaboration",
  },
  {
    quote: "He connects security, product quality, and practical engineering. Reliable under pressure and clear in communication.",
    name: "Project Partner",
    role: "Software Delivery",
  },
  {
    quote: "A builder who treats integrity as a feature. From pentest thinking to AI-assisted products, the work is thoughtful and complete.",
    name: "Mentor",
    role: "Technology Leadership",
  },
];
