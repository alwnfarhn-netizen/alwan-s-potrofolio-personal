// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ALWAN.SYS — PORTFOLIO CONTENT CONFIGURATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// 📌 INSTRUKSI:
// Isi SEMUA data di bawah ini sesuai dengan informasi
// personal kamu. File ini adalah SATU-SATUNYA file
// yang perlu diedit untuk mempersonalisasi portfolio.
//
// Setelah selesai mengisi, save file ini,
// lalu beritahu saya agar saya menghubungkan
// semua data ke komponen website.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// ═══════════════════════════════════
// 1. IDENTITAS UTAMA
// ═══════════════════════════════════

export const identity = {
  name: "Alwan",                          // Nama tampilan utama
  fullName: "Alwan Farhan",                           // Nama lengkap (contoh: "Muhammad Alwan")
  tagline: "ED-TECH LAB",                // Tagline di navbar (maks 15 karakter)
  role: "Educational Systems Designer",// Role utama
  location: "Indonesia",                  // Lokasi (kota/negara)
  locationCode: "INDONESIA",              // Kode lokasi uppercase untuk UI
  status: "AVAILABLE",                    // Status saat ini: AVAILABLE / BUSY / OPEN TO WORK
  avatarUrl: "",                          // URL foto profil (opsional, bisa kosong)
};


// ═══════════════════════════════════
// 2. SEO & META
// ═══════════════════════════════════

export const seo = {
  title: "ALWAN.SYS | Educational Technology Laboratory",
  description: "AI-powered educational media developer, research consultant, and educational technology innovator. Building the future of interactive learning through AI systems.",
  keywords: ["AI education", "educational technology", "research consultant", "interactive learning", "UI/UX design"],
  ogImage: "",                            // URL gambar untuk social media preview (opsional)
};


// ═══════════════════════════════════
// 3. HERO SECTION
// ═══════════════════════════════════

export const hero = {
  // Headlines yang akan bergantian (rotasi otomatis setiap 4 detik)
  headlines: [
    "EDUCATIONAL SYSTEMS DESIGNER",
    "INTERACTIVE MEDIA DEVELOPER",
    "SPECIAL EDUCATION RESEARCHER",
  ],

  // Teks deskripsi di bawah headline
  subtitle: "Integrating educational technology, UI/UX design, and AI systems to create inclusive and engaging learning environments.",

  // Label status bar di atas headline
  statusLabel: "EDUCATIONAL TECHNOLOGY LABORATORY",
};


// ═══════════════════════════════════
// 4. ABOUT / CHARACTER PROFILE
// ═══════════════════════════════════

export const about = {
  // ID karakter untuk tampilan retro
  characterId: "ALW-EDTECH-99",
  characterTitle: "Educational Technology Architect",

  // Stats cards (4 kotak di atas bio)
  stats: [
    { label: "CLASS", value: "ED-TECH", icon: "◈" },
    { label: "SPECIALTY", value: "AI SYSTEMS", icon: "⬡" },
    { label: "FOCUS", value: "INCLUSIVE UX", icon: "◇" },
    { label: "STATUS", value: "BUILDING", icon: "◉", active: true },
  ],

  // Angka pencapaian (4 kotak di bawah portrait)
  metrics: [
    { label: "Projects Deployed", value: "20+", color: "text-cyan-desat" },
    { label: "Research Papers", value: "5+", color: "text-muted-magenta" },
    { label: "AI Workflows", value: "15+", color: "text-electric-blue" },
    { label: "Happy Clients", value: "30+", color: "text-retro-green" },
  ],

  // Bio paragraf di terminal window
  bio: [
    "I focus on the development of educational technology, interactive learning media, and AI-based systems to create more inclusive and engaging learning experiences.",
    "With a background in Special Education, I am interested in combining educational technology, UI/UX design, and AI systems to support modern learning needs and academic research productivity.",
  ],

  // Mission statement (dalam kotak kutipan)
  missionStatement:
    "To build the future of learning by transforming passive consumption into interactive, AI-assisted exploration.",
};


// ═══════════════════════════════════
// 5. SKILLS
// ═══════════════════════════════════
// category: "CORE" | "TECH" | "SYSTEM" | "CREATIVE"
// level: 0-100 (proficiency percentage)
// connections: array ID skill lain yang terhubung

export const skills = [
  {
    id: "ai",
    label: "AI & Prompt Engineering",
    description: "Advanced prompt design, LLM optimization, and AI-assisted content generation pipelines.",
    level: 95,
    category: "CORE",
    connections: ["workflow", "edmedia", "research"],
  },
  {
    id: "edmedia",
    label: "Educational Media",
    description: "Interactive learning tools, gamified platforms, and multimedia educational content.",
    level: 92,
    category: "CORE",
    connections: ["ai", "uiux", "frontend"],
  },
  {
    id: "research",
    label: "Research Consultation",
    description: "Academic workflow automation, literature synthesis, and thesis methodology design.",
    level: 88,
    category: "CORE",
    connections: ["ai", "workflow"],
  },
  {
    id: "frontend",
    label: "Frontend Development",
    description: "Next.js, React, TypeScript — building performant, accessible web experiences.",
    level: 90,
    category: "TECH",
    connections: ["edmedia", "uiux", "branding"],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    description: "Human-centered design, inclusive interfaces, and educational UX research.",
    level: 87,
    category: "TECH",
    connections: ["edmedia", "frontend"],
  },
  {
    id: "edtech",
    label: "Educational Technology",
    description: "LMS integration, e-learning systems, and adaptive learning architectures.",
    level: 91,
    category: "SYSTEM",
    connections: ["ai", "edmedia", "research"],
  },
  {
    id: "workflow",
    label: "AI Workflow Systems",
    description: "Automation pipelines, tool chaining, and productivity optimization.",
    level: 85,
    category: "SYSTEM",
    connections: ["ai", "research"],
  },
  {
    id: "branding",
    label: "Digital Branding",
    description: "Strategic brand identity, visual systems, and e-commerce development.",
    level: 83,
    category: "CREATIVE",
    connections: ["frontend", "uiux"],
  },
  {
    id: "creative",
    label: "Creative AI Tools",
    description: "Generative design, AI art direction, and creative automation workflows.",
    level: 80,
    category: "CREATIVE",
    connections: ["ai", "branding"],
  },
];


// ═══════════════════════════════════
// 6. AI LAB
// ═══════════════════════════════════

export const aiLab = {
  // Deskripsi utama lab
  title: "Command Center for Research & Automation",
  description:
    "Inside the laboratory, I build and experiment with AI workflow systems, prompting frameworks, and automation pipelines. The goal is to integrate educational AI seamlessly into productivity systems that serve both researchers and learners.",

  // Terminal commands (muncul satu per satu seperti booting)
  terminalCommands: [
    "> INITIALIZING AI RESEARCH ENGINE...",
    "> ANALYZING LEARNING PATTERNS...",
    "> GENERATING EDUCATIONAL CONTENT...",
    "> COMPILING PROMPT FRAMEWORKS...",
    "> BUILDING INTERACTIVE MEDIA...",
    "> OPTIMIZING WORKFLOW PIPELINES...",
    "> ALL SYSTEMS OPERATIONAL.",
    "> AWAITING INPUT...",
  ],

  // Modul lab (4 kartu)
  modules: [
    {
      title: "Workflow Automation",
      desc: "End-to-end AI pipelines for content creation, research synthesis, and educational media production.",
      status: "ACTIVE",   // ACTIVE | BETA | PLANNED
      icon: "⚡",
    },
    {
      title: "Prompt Engineering",
      desc: "Systematic frameworks for LLM optimization, chain-of-thought design, and output calibration.",
      status: "ACTIVE",
      icon: "◈",
    },
    {
      title: "Research Systems",
      desc: "Automated literature review, citation management, and thesis progress tracking dashboards.",
      status: "ACTIVE",
      icon: "⬡",
    },
    {
      title: "Productivity Pipelines",
      desc: "Integrated tool chains connecting AI assistants, documentation, and deployment workflows.",
      status: "BETA",
      icon: "◇",
    },
  ],
};


// ═══════════════════════════════════
// 7. PROJECTS (YANG PALING PENTING!)
// ═══════════════════════════════════
// Tambah/kurangi project sesuai kebutuhan.
// Setiap project = 1 "level" di portfolio.

export const projects = [
  {
    id: "dyscare",
    level: "LEVEL_01",
    title: "DysCare",
    type: "INCLUSIVE EDUCATION",
    description:
      "Interactive learning media designed as an intervention for children with learning difficulties. Integrates adaptive methodologies to support special education needs.",
    problem:
      "Children with learning difficulties need specialized, engaging digital tools that cater to their specific cognitive profiles.",
    impact:
      "Provides accessible and interactive learning modules tailored for neurodivergent learners, increasing engagement.",
    techStack: ["JavaScript", "HTML", "CSS", "UI/UX Design"],
    status: "ACTIVE",
    repoUrl: "https://github.com/alwnfarhn-netizen/DysCare_v3",
  },
];


// ═══════════════════════════════════
// 8. SERVICES
// ═══════════════════════════════════

export const services = [
  {
    title: "Educational Media Development",
    desc: "Interactive learning tools, accessible UI/UX for education, and gamified learning platforms designed for inclusive classrooms.",
    icon: "◈",
    tag: "CORE",
  },
  {
    title: "Thesis & Research Consultation",
    desc: "Workflow automation, academic dashboard setups, AI-assisted literature synthesis, and research methodology design.",
    icon: "⬡",
    tag: "RESEARCH",
  },
  {
    title: "AI Workflow Setup",
    desc: "Custom AI tool integration, prompt engineering frameworks, and productivity pipelines for teams and individuals.",
    icon: "⚡",
    tag: "AI",
  },
  {
    title: "Website Development",
    desc: "Premium, performant web experiences built with modern frameworks. From landing pages to full-stack applications.",
    icon: "◇",
    tag: "TECH",
  },
  {
    title: "UMKM Digital Branding",
    desc: "Strategic e-commerce development, modern retro aesthetics, and high-conversion digital presence for small businesses.",
    icon: "✦",
    tag: "BUSINESS",
  },
  {
    title: "UI/UX Design",
    desc: "Human-centered design systems, inclusive interfaces, and educational UX research for digital products.",
    icon: "◉",
    tag: "DESIGN",
  },
  {
    title: "AI Productivity Systems",
    desc: "End-to-end automation pipelines connecting AI assistants, documentation, and deployment workflows.",
    icon: "⟐",
    tag: "SYSTEM",
  },
];


// ═══════════════════════════════════
// 9. TESTIMONIALS
// ═══════════════════════════════════
// Tambah/kurangi testimonial sesuai kebutuhan.

export const testimonials = [
  {
    id: "LOG_001",
    author: "DR. HENDRA S.",       // Nama pemberi testimoni (uppercase)
    role: "ACADEMIC ADVISOR",      // Peran/jabatan
    content:
      "Alwan's approach to integrating AI into educational media is highly systematic. He doesn't just build tools; he builds frameworks that enhance the cognitive aspects of learning. His thesis work demonstrated exceptional methodology.",
    date: "2024.05.10",            // Format: YYYY.MM.DD
    signal: "STRONG",              // STRONG | NOMINAL (indikator kekuatan sinyal)
  },
  {
    id: "LOG_002",
    author: "SARAH F.",
    role: "UI/UX COLLABORATOR",
    content:
      "Working with Alwan on the DysCare project showed his deep understanding of inclusive design. His technical execution is matched only by his empathy for the end-user. Every interaction is purposeful.",
    date: "2024.03.22",
    signal: "STRONG",
  },
  {
    id: "LOG_003",
    author: "ANDI R.",
    role: "UMKM CLIENT — RETAIL",
    content:
      "The digital branding overhaul exceeded expectations. The conversion rates doubled within a month. Professional, strategic, and visionary approach to our entire digital presence.",
    date: "2024.01.15",
    signal: "STRONG",
  },
  {
    id: "LOG_004",
    author: "MAYA L.",
    role: "RESEARCH STUDENT",
    content:
      "Alwan's thesis consultation completely transformed my research workflow. The AI-assisted literature review system saved me weeks of manual work. Highly recommend his systematic approach.",
    date: "2024.04.08",
    signal: "NOMINAL",
  },
];


// ═══════════════════════════════════
// 10. INSIGHTS / BLOG ENTRIES
// ═══════════════════════════════════

export const insights = [
  {
    id: "INS_001",
    title: "AI-Assisted Learning: Beyond Automation",
    category: "AI IN EDUCATION",
    date: "2024.05.12",
    sizeKb: "128KB",
    preview: "Exploring how AI can be a collaborative partner in learning rather than a replacement for human instruction.",
    // url: "",  // Link ke artikel lengkap (opsional)
  },
  {
    id: "INS_002",
    title: "Designing for Neurodivergent Learners",
    category: "INCLUSIVE DESIGN",
    date: "2024.04.28",
    sizeKb: "96KB",
    preview: "UI/UX principles for creating educational interfaces that work for all cognitive profiles.",
  },
  {
    id: "INS_003",
    title: "The Research Workflow Revolution",
    category: "METHODOLOGY",
    date: "2024.04.15",
    sizeKb: "112KB",
    preview: "How prompt engineering and AI pipelines can transform academic research productivity.",
  },
  {
    id: "INS_004",
    title: "Prompt Engineering for Education",
    category: "PROMPT DESIGN",
    date: "2024.03.30",
    sizeKb: "84KB",
    preview: "Building systematic prompt frameworks that produce consistent educational content.",
  },
  {
    id: "INS_005",
    title: "Interactive Media vs Static Content",
    category: "EDTECH",
    date: "2024.03.15",
    sizeKb: "72KB",
    preview: "Why gamified, interactive learning outperforms traditional static digital content in engagement metrics.",
  },
  {
    id: "INS_006",
    title: "The Future of Digital Classrooms",
    category: "VISION",
    date: "2024.02.28",
    sizeKb: "144KB",
    preview: "A vision for adaptive, AI-integrated learning environments that respond to individual student needs.",
  },
];


// ═══════════════════════════════════
// 11. CONTACT & SOCIAL LINKS
// ═══════════════════════════════════

export const contact = {
  // Heading & description
  heading: "Initialize Contact",
  description:
    "Looking for a creative technologist to build educational systems or digital experiences? The terminal is open.",

  // Link sosial media (isi dengan URL & label yang benar)
  socials: [
    { name: "EMAIL", href: "mailto:alwnfarhn@gmail.com", label: "alwnfarhn@gmail.com" },
    { name: "WHATSAPP", href: "https://wa.me/62856510020556", label: "+62 856-5100-20556" },
    { name: "GITHUB", href: "https://github.com/alwnfarhn-netizen", label: "@alwnfarhn-netizen" },
    { name: "INSTAGRAM", href: "https://instagram.com/alwnfarhn", label: "@alwnfarhn" },
  ],
};


// ═══════════════════════════════════
// 12. FOOTER
// ═══════════════════════════════════

export const footer = {
  quote: "Designed through research, technology, and experimentation.",
  buildVersion: "v2.0.0",
  copyrightName: "ALWAN.SYS",
};
