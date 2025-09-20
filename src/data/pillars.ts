export type Pillar = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  badge?: string;
  highlights?: string[];
  stats?: Array<{ label: string; value: string }>;
  faqs?: Array<{ q: string; a: string }>;
  intro?: string;
  cardImage?: string;   // image for home card
  detailImage?: string; // image for detail page hero
  modalImage?: string;  // image for Quick Peek modal
  quickPeek?: Array<{
    icon: string; // e.g., 'map', 'shield', 'cpu', 'wrench', 'sun', 'users', 'book', 'check', 'activity', 'stethoscope'
    title: string;
    desc: string;
  }>;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
};

export const pillars: Pillar[] = [
  {
    slug: "building",
    title: "Building",
    tagline: "Designing the Future of Healthcare – One Facility at a Time",
    shortDescription: "Comprehensive healthcare infrastructure development and design.",
    heroImage: "/Architecture & Equipment Planning.jpg",
    cardImage: "/hospital planning and feasibility.jpg",
    detailImage: "/Architecture & Equipment Planning.jpg",
    modalImage: "/Hospital Operations & Commissioning.jpg",
    badge: "Core Foundation",
    quickPeek: [
      { icon: 'map', title: 'Master Planning Ready', desc: 'Site fit, zoning, adjacencies, and growth scenarios modeled from day one.' },
      { icon: 'wrench', title: 'Integrated MEP + BioMed', desc: 'Seamless engineering with medical equipment planning and room templates.' },
      { icon: 'cpu', title: 'Digital Health Infra', desc: 'IT backbone, EMR readiness, IoT & monitoring designed into the facility.' },
      { icon: 'shield', title: 'Compliance Pathway', desc: 'Local codes and accreditation mapped to milestones for smooth approvals.' },
      { icon: 'leaf', title: 'Sustainable Design', desc: 'Eco-friendly solutions and energy-efficient systems for green healthcare facilities.' },
    ],
    intro:
      "We partner with promoters and clinicians to plan, design, and deliver compliant, scalable and future‑ready healthcare facilities. Our approach balances evidence‑based design, operational efficiency, and capital discipline.",
    highlights: [
      "Future‑ready, scalable facilities",
      "Compliance‑first design",
      "Integrated digital health",
    ],
    stats: [
      { label: "Avg. Build Time", value: "12–18 mo" },
      { label: "Compliance Score", value: "95%+" },
      { label: "CapEx Efficiency", value: "+12%" },
    ],
    faqs: [
      { q: "What inputs do you need to start?", a: "A brief on scope, site details (if available), preferred specialties, and budget range are ideal to begin." },
      { q: "Do you support turnkey delivery?", a: "Yes. We can engage end‑to‑end from feasibility to commissioning, with milestone‑based delivery." },
    ],
    sections: [
      {
        heading: "Our Approach",
        body:
          "We combine technology with evidence-based design to create functional and healing-oriented facilities. From concept to commissioning, we ensure compliance, scalability, and patient-first environments.",
        bullets: [
          "Master Planning & Concept Design",
          "Architectural Design & Engineering",
          "MEP & Biomedical Integration",
          "Digital Health Infrastructure",
        ],
      },
      {
        heading: "Typical Phases",
        body:
          "Projects advance through planning, detailed design, approvals, and commissioning, tailored to your scope and accreditation needs.",
        bullets: [
          "Feasibility & Planning",
          "Architecture & Design",
          "Licensing & Approvals",
          "Commissioning & Operations",
        ],
      },
    ],
  },
  {
    slug: "caring",
    title: "Caring",
    tagline: "Putting Patients, People, and Communities at the Heart of Healthcare",
    shortDescription: "Patient-centric systems and environments that heal and inspire.",
    heroImage: "/Patient-Centric Design.jpeg",
    cardImage: "/patient care.jpg",
    detailImage: "/Patient-Centric Design.jpeg",
    modalImage: "/patient care.jpg",
    badge: "Compassion",
    quickPeek: [
      { icon: 'map', title: 'Wayfinding & Clarity', desc: 'Intuitive routes, signage, and arrival experiences to reduce stress.' },
      { icon: 'shield', title: 'Privacy & Safety', desc: 'Dignity-first layouts and protocols aligned to global safety standards.' },
      { icon: 'sun', title: 'Healing Environments', desc: 'Natural light, acoustics, and materials tuned for calm and recovery.' },
      { icon: 'users', title: 'Family-Centered Care', desc: 'Inclusive spaces that support families and caregivers across journeys.' },
      { icon: 'heart', title: 'Patient Advocacy', desc: 'Dedicated support to ensure patient voices are heard and respected.' },
    ],
    intro:
      "Caring is our philosophy made practical — environments, processes, and teams designed to preserve dignity and deliver superior outcomes. We infuse patient experience into workflows, spaces, and service design.",
    highlights: [
      "Wayfinding & clarity",
      "Privacy & dignity",
      "Healing materials & light",
      "Patient dignity & comfort",
      "Global safety standards",
      "Humanized care systems",
    ],
    stats: [
      { label: "HCAHPS Uplift", value: "+15%" },
      { label: "Avg. LOS Impact", value: "−0.5 day" },
      { label: "Safety Events", value: "−20%" },
      { label: "Wayfinding Errors", value: "−30%" },
      { label: "Noise Levels", value: "−25%" },
      { label: "PX Score", value: "+12%" },
    ],
    faqs: [
      { q: "How do you measure patient experience?", a: "We implement standardized PX surveys, staff feedback loops, and operational KPIs tied to service design." },
      { q: "Can we retrofit existing facilities?", a: "Yes, we specialize in phased upgrades that minimize disruption to ongoing services." },
      { q: "Can we phase upgrades?", a: "Yes, we implement phased design upgrades without disrupting critical services." },
      { q: "Do you audit existing layouts?", a: "We perform PX and safety audits to identify high‑impact design changes quickly." },
    ],
    sections: [
      {
        heading: "Patient-Centered Care",
        body:
          "Care isn’t a department — it’s the entire experience. We align clinical goals with human needs to create calm, inclusive environments that protect dignity, reduce anxiety, and enable teams to deliver consistently excellent care.",
        bullets: [
          "Dignity-first layouts and private zones",
          "Safety-by-design aligned to global standards",
          "Humanized care pathways across OP/IP/ER",
          "Family & caregiver-inclusive spaces",
        ],
      },
      {
        heading: "Design Tenets",
        body:
          "Our patient‑centric design system translates research into real‑world decisions that make hospitals intuitive, quieter, and more reassuring for everyone.",
        bullets: [
          "Intuitive wayfinding & legible signage maps",
          "Barrier‑free circulation with family lounges",
          "Acoustic zoning, privacy screens, soft finishes",
          "Daylight access, greenery, and warm materials",
          "Clear arrival, triage, and discharge touchpoints",
          "Inclusive design for ages, abilities, and cultures",
        ],
      },
      {
        heading: "Phases",
        body: "Change is successful when everyone owns it. We co‑create with clinical, admin, and facilities teams to deliver improvements that stick.",
        bullets: [
          "PX & Safety Audit (shadowing, heatmaps, issues)",
          "Concept & Mockups (flows, layouts, prototypes)",
          "Stakeholder Review (nursing, clinicians, admin)",
          "Implementation (phased works with minimal downtime)",
          "Measure & Refine (PX, safety, throughput KPIs)",
        ],
      },
    ],
  },
  {
    slug: "education",
    title: "Education & Training",
    tagline: "Empowering Healthcare Professionals Through Continuous Learning",
    shortDescription: "World-class education and upskilling pathways for clinicians.",
    heroImage: "/Recruitment & Training.jpeg",
    cardImage: "/hospital training.jpg",
    detailImage: "/Recruitment & Training.jpeg",
    modalImage: "/hospital training.jpg",
    badge: "Growth",
    quickPeek: [
      { icon: 'book', title: 'Global Pathways', desc: 'Guidance for MRCP, MRCS, MRCOG, MRCEM, MRCPsych, FRCR programs.' },
      { icon: 'check', title: 'Exam Strategy', desc: 'Mentorship, mock exams, and feedback loops tailored to your specialty.' },
      { icon: 'activity', title: 'Skills Workshops', desc: 'Simulation-based practice and focused bootcamps where applicable.' },
      { icon: 'stethoscope', title: 'Career Tracks', desc: 'Structured tracks mapped to competencies and real-world practice.' },
      { icon: 'users', title: 'Faculty Development', desc: 'Specialized training for educators to enhance teaching methodologies.' },
      { icon: 'award', title: 'Certification Support', desc: 'Comprehensive assistance with documentation and accreditation processes.' },
    ],
    intro:
      "We enable clinicians to pursue globally recognized qualifications and modern competencies. From foundational guidance to exam strategy and hands‑on skills, we help build careers that elevate care quality.",
    highlights: [
      "Globally recognized pathways",
      "Exam‑oriented coaching",
      "Clinical skill development",
    ],
    stats: [
      { label: "Pass Rate Boost", value: "+18%" },
      { label: "Programs", value: "8+" },
      { label: "Learner NPS", value: "9.2/10" },
    ],
    faqs: [
      { q: "Do you provide mentorship?", a: "Yes, our mentors guide candidates on curricula, practice patterns, and exam strategy." },
      { q: "Are there onsite workshops?", a: "We organize focused bootcamps and simulation‑based workshops as needed." },
    ],
    sections: [
      {
        heading: "Professional Pathways",
        body:
          "Programs like MRCP, MRCS, MRCOG, MRCEM, MRCPsych, and FRCR equip professionals with globally recognized competencies.",
        bullets: [
          "Comprehensive learning tracks",
          "Exam-oriented guidance",
          "Clinical skill development",
          "Career mentorship",
        ],
      },
    ],
  },
];

export const getPillarBySlug = (slug: string) => pillars.find(p => p.slug === slug);
