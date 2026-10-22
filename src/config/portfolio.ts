export interface ProjectLink {
  label: string;
  url: string;
  isAvailable: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured?: boolean;
  roleAlignment?: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  architecture?: {
    overview: string;
    frontend?: string;
    backend?: string;
    aiOrchestration?: string;
    storage?: string;
  };
  engineeringDecisions?: {
    title: string;
    decision: string;
    tradeoff: string;
  }[];
  links: {
    github?: ProjectLink;
    live?: ProjectLink;
  };
  screenshots?: {
    title: string;
    description: string;
    caption: string;
    tags: string[];
    isPlaceholder?: boolean;
    imagePath?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  badge?: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; focus?: string }[];
}

export const SITE_CONFIG = {
  personal: {
    name: "Aadhitya H",
    title: "AI Engineer & Full-Stack Developer",
    targetRole: "AI Generalist (Design) & AI Systems Engineer",
    location: "Chennai, India",
    education: {
      degree: "B.Tech in Computer Science and Engineering (Business Systems)",
      institution: "SRM Institute of Science and Technology",
      period: "Aug 2023 – May 2027",
      graduation: "May 2027",
      cgpa: "9.1",
    },
    contact: {
      email: "aadhihari626@gmail.com",
      github: "https://github.com/aadhi590",
      linkedin: "https://linkedin.com/in/aadhitya-h",
    },
    resume: {
      fileName: "Aadhitya_H_Resume.pdf",
      filePath: "/Aadhitya_H_Resume.pdf",
      // Verified generated PDF is placed in public/
      existsInPublic: true,
    },
  },
  hero: {
    badge: "Available for AI Engineering & AI Generalist (Design) Opportunities",
    headline: "Building intelligent systems that solve real problems.",
    subheadline:
      "I'm Aadhitya, an AI engineer and full-stack developer focused on multi-agent systems, generative AI, and practical AI-powered applications. I design and engineer tools that simplify complex workflows, reduce friction, and improve how teams think and create.",
    locationLine: "Chennai, India · SRM Institute of Science and Technology (CGPA 9.1)",
  },
  featuredProject: {
    id: "designflow-ai",
    title: "DesignFlow AI",
    category: "AI Integration · Design Workflow Automation",
    badge: "Primary Case Study · Design Workflow Automation",
    tagline: "An AI-powered design workflow assistant that helps organize design assets, retrieve relevant visual references, and streamline early-stage design research.",
    targetAlignment:
      "Engineered to demonstrate practical AI integration into human creative workflows. Rather than attempting autonomous vehicle or industrial design, DesignFlow AI acts as a high-speed intelligence amplifier for human designers—automating asset retrieval, palette analysis, and brief decomposition.",
    problem:
      "Industrial and digital design teams spend extensive hours searching across disparate drives and moodboards to locate historical visual assets, style tokens, and relevant references. Manual tagging is inconsistent, semantic context is lost, and early-stage design research requires repetitive manual synthesis of ambiguous briefs.",
    solution:
      "DesignFlow AI integrates multi-modal embedding models with high-speed vector retrieval and automated brief parsing. Designers query using natural language (e.g., 'aerodynamic commuter styling with matte finish and dual-tone accents') to immediately surface relevant visual references, extract extracted design tokens, and generate structured design research briefs.",
    capabilities: [
      "Semantic search over design assets and visual references using natural-language queries",
      "AI-assisted asset categorization, auto-tagging, and style taxonomy extraction",
      "Natural-language visual reference retrieval with attribute matching",
      "Design research summaries and brief decomposition into moodboard themes",
      "Centralized visual asset library with instantaneous similarity lookup",
      "Design brief processing that converts unstructured PRDs into design constraint checklists",
    ],
    technicalArchitecture: {
      overview:
        "End-to-end client-server architecture balancing instant visual feedback in the UI with low-latency multimodal vector queries in the backend.",
      frontend: "Next.js (App Router), TypeScript, Tailwind CSS, Lucide icons, responsive interactive asset explorer",
      backend: "FastAPI REST microservices with asynchronous endpoints for brief ingestion and query processing",
      aiOrchestration: "Gemini API for multimodal vision reasoning and text embeddings, FAISS vector index for sub-50ms similarity search",
      storage: "Structured metadata cache with SQLite/Postgres and local/cloud asset storage",
    },
    engineeringDecisions: [
      {
        title: "Hybrid Search (Vector Embeddings + Metadata Filtering)",
        decision:
          "Combined FAISS dense vector retrieval with structured relational filters (asset type, date, project phase, aspect ratio).",
        tradeoff:
          "Pure vector search frequently ignores strict hard constraints like file format or specific component tags. The hybrid pipeline ensures conceptual relevance while strictly respecting design project boundaries.",
      },
      {
        title: "Local Metadata Caching vs. Direct Vector Queries",
        decision:
          "Implemented client-side session caching for frequently inspected reference clusters and active brief tokens.",
        tradeoff:
          "Increased client memory footprint slightly, but eliminated redundant API latency when designers rapidly toggle between related moodboards during brainstorm sessions.",
      },
      {
        title: "Human-in-the-Loop Workflow Philosophy",
        decision:
          "Designed outputs as non-destructive reference suggestions, token palettes, and brief checklists instead of synthetic generated final designs.",
        tradeoff:
          "Avoids the hallucination pitfalls of fully autonomous generative models, building trust with professional design teams who require precise artistic control.",
      },
    ],
    links: {
      github: {
        label: "Repository",
        url: "https://github.com/aadhi590/designflow-ai",
        isAvailable: false, // Set to true once public repo URL is provided
      },
      live: {
        label: "Live Demo",
        url: "https://designflow-ai.vercel.app",
        isAvailable: false, // Set to true once live demo is deployed
      },
    },
    interactiveWalkthroughSteps: [
      {
        step: "01",
        name: "Brief Ingestion & Constraint Decomposition",
        description: "Designer enters project brief or PRD. DesignFlow extracts aesthetic themes, ergonomics constraints, and moodboard direction.",
        metrics: "Structured Extraction · Zero Hallucination",
      },
      {
        step: "02",
        name: "Multimodal Semantic Reference Search",
        description: "Natural-language query matches visual silhouettes, surfacing relevant internal CAD snapshots, photos, and moodboard assets.",
        metrics: "FAISS Vector Search · Sub-50ms Querying",
      },
      {
        step: "03",
        name: "Automated Categorization & Palette Synthesis",
        description: "Surfaced references are clustered by style taxonomy with extracted hex color palettes, surface textures, and design tokens.",
        metrics: "Automated Tagging · Token Extraction",
      },
      {
        step: "04",
        name: "Design Research Output & Export",
        description: "Export clean research summary sheets with annotated visual citations ready for review by design leads and engineering teams.",
        metrics: "Exportable Markdown · Visual Citations",
      },
    ],
  },
  otherProjects: [
    {
      id: "maec",
      title: "MAEC — Multi-Agent Educational Copilot",
      category: "Multi-Agent Systems · Orchestration & Reasoning",
      tagline: "A multi-agent educational application coordinating Planner, Tutor, Evaluator, Coach, and Critic agents through a FastAPI orchestration layer.",
      description:
        "Engineered an autonomous multi-agent pedagogical system where specialized agents collaborate to analyze student mastery, generate adaptive curriculum roadmaps, and provide context-aware interactive tutoring.",
      technologies: ["React", "FastAPI", "LangChain", "LangGraph", "Gemini API", "Firebase Firestore"],
      capabilities: [
        "Modular multi-agent coordination with specialized agents: Planner, Tutor, Evaluator, Coach, Critic",
        "Learner-state estimation and adaptive mastery tracking based on continuous evaluation",
        "Personalized learning roadmaps generated dynamically from student interaction history",
        "Firebase Firestore as a real-time reactive knowledge store for learner state and session memory",
        "Interactive React dashboard featuring real-time AI tutoring chat, curriculum progression trees, and mastery analytics",
        "REST API-based full-stack state synchronization ensuring predictable agent state transitions",
      ],
      links: {
        github: {
          label: "Repository",
          url: "https://github.com/aadhi590/MAEC",
          isAvailable: false,
        },
        live: {
          label: "Live System",
          url: "",
          isAvailable: false,
        },
      },
    },
    {
      id: "citymind-ai",
      title: "CityMind AI — Agentic Urban Intelligence System",
      category: "Agentic AI · Large-Scale Decision Systems",
      tagline: "A multi-agent system for analyzing urban traffic and power distribution, coordinating five or more AI agents using Gemini 2.5 Pro as its reasoning backbone.",
      description:
        "Designed and implemented an agentic simulation and analytics platform that evaluates urban grid telemetry, models congestion patterns, and automates load-balancing recommendations across city-scale infrastructure datasets.",
      technologies: ["Python", "Gemini API", "LangGraph", "FastAPI"],
      capabilities: [
        "Multi-agent autonomous coordination of 5+ specialized agents for urban traffic, power grid, and emergency routing",
        "Gemini 2.5 Pro integrated as the core reasoning backbone for context-heavy spatial and temporal queries",
        "Agent orchestration workflows with structured tool-calling for data retrieval, anomaly detection, and action synthesis",
        "Scalable analysis pipelines processing synthetic and real-world city-scale datasets",
        "Context-aware reasoning producing explainable, audited urban intelligence recommendations",
      ],
      links: {
        github: {
          label: "Repository",
          url: "https://github.com/aadhi590/CityMind-AI",
          isAvailable: false,
        },
        live: {
          label: "Live System",
          url: "",
          isAvailable: false,
        },
      },
    },
    {
      id: "gym-management",
      title: "Gym Management System",
      category: "Full-Stack Development · Scalable Web Architecture",
      tagline: "A full-stack MERN gym management platform with real-time class scheduling, member tracking, JWT-based authentication, and secure RESTful backend architecture.",
      description:
        "Built a production-grade web application to streamline administrative and member operations, handling class capacities, subscription lifecycles, and role-based access control.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
      capabilities: [
        "Real-time class booking and dynamic capacity enforcement with conflict resolution",
        "Comprehensive member tracking, attendance logging, and subscription status monitoring",
        "Secure JSON Web Token (JWT) authentication with role-based access control (Admin, Trainer, Member)",
        "RESTful API backend designed for concurrent database operations and robust schema validation",
        "Responsive, intuitive user interface for desktop and mobile self-service",
      ],
      links: {
        github: {
          label: "Repository",
          url: "https://github.com/aadhi590/gym-management-system",
          isAvailable: false,
        },
        live: {
          label: "Live System",
          url: "",
          isAvailable: false,
        },
      },
    },
  ],
  experience: [
    {
      role: "AI & Backend Developer Intern",
      company: "D Advaya FM Pvt. Ltd. (Government Startup)",
      badge: "Current / Active",
      period: "February 2026 – May 2026",
      location: "Chennai, India",
      isCurrent: true,
      highlights: [
        "Engineered RESTful backend services using FastAPI to power AI-driven Identity Verification (IDV) workflows for labor onboarding at scale.",
        "Designed and implemented document verification and worker authentication modules, integrating multi-step verification pipelines with secure database operations.",
        "Architected scalable API layers supporting concurrent verification requests, enabling seamless integration with government-facing deployment environments.",
      ],
    },
    {
      role: "AI Intern",
      company: "Hovernest Private Limited",
      badge: "Completed",
      period: "October 2025 – January 2026",
      location: "Chennai, India",
      isCurrent: false,
      highlights: [
        "Deployed AI-driven drone systems for real-time industrial monitoring, enabling autonomous navigation and low-latency live decision-making under production constraints.",
        "Developed and integrated production-grade AI inference pipelines to automate operational data interaction and real-time workflow orchestration.",
      ],
    },
    {
      role: "Database Developer Intern",
      company: "Femtosoft Technologies",
      badge: "Completed",
      period: "June 2025 – July 2025",
      location: "Chennai, India",
      isCurrent: false,
      highlights: [
        "Architected scalable backend APIs for real-time applications, reducing response latency by approximately 40% through query optimization and indexing strategies.",
        "Engineered database schemas with indexing and query tuning techniques across high-traffic production systems, improving throughput under concurrent workloads.",
      ],
    },
  ],
  skills: [
    {
      title: "AI and Agentic Systems",
      skills: [
        { name: "LangChain" },
        { name: "LangGraph" },
        { name: "Gemini API" },
        { name: "TensorFlow" },
        { name: "Scikit-learn" },
        { name: "OpenCV" },
        { name: "FAISS" },
        { name: "Prompt Engineering" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "C++" },
        { name: "JavaScript" },
        { name: "SQL" },
      ],
    },
    {
      title: "Backend Engineering",
      skills: [
        { name: "FastAPI" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Flutter" },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB" },
        { name: "Firebase Firestore" },
        { name: "Supabase" },
      ],
    },
    {
      title: "Cloud & Developer Tools",
      skills: [
        { name: "AWS EC2" },
        { name: "AWS S3" },
        { name: "AWS Lambda" },
        { name: "Git" },
        { name: "Postman" },
        { name: "Power BI" },
      ],
    },
  ],
  about: {
    narrative:
      "I'm interested in the intersection of AI engineering, product development, and practical problem-solving. My work spans multi-agent systems, semantic retrieval, backend engineering, and full-stack applications. I enjoy turning emerging AI capabilities into usable systems that solve concrete problems.",
    subtext:
      "When building AI-powered tools, I prioritize reliable orchestration, deterministic failure modes, low cognitive load for users, and clean system architecture over superficial generative gimmicks.",
  },
};
