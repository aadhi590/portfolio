# Aadhitya H — Personal Portfolio & AI Engineering Showcase

> **Target Role:** AI Generalist (Design) & AI Systems Engineer at **Ather Energy**  
> **Specialization:** Multi-Agent Systems, Generative AI, Workflow Automation, and Full-Stack Engineering

Production-grade, minimalist portfolio website designed and engineered for **Aadhitya H**. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Tailored specifically for the **AI Generalist (Design)** internship at Ather Energy, emphasizing practical AI integration, early-stage design workflow automation, and rigorous systems engineering.

---

## ⚡ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Generation)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict typing)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Refined editorial tokens, off-white `#FBFBFB` background, charcoal typography, electric cobalt accents)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment Target:** [Vercel](https://vercel.com/) (Instant zero-config deploy)

---

## 🚀 Quickstart & Local Development

### 1. Install Dependencies
```bash
cd C:\aadhitya-portfolio
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠 Project Structure & Key Files

```
aadhitya-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Metadata, OpenGraph, Viewport, Font setup
│   │   ├── page.tsx           # Assembled page structure
│   │   └── globals.css        # Editorial styling & reduced-motion rules
│   ├── components/
│   │   ├── Navbar.tsx         # Wordmark, responsive menu, Resume trigger
│   │   ├── Hero.tsx           # Confident typography & micro agentic workflow diagram
│   │   ├── DesignFlowShowcase.tsx # Primary case study for Ather AI Generalist (Design)
│   │   ├── DesignFlowWalkthrough.tsx # Interactive UI mockup & capability simulation
│   │   ├── ArchitectureDiagram.tsx   # Custom SVG architecture diagram (FastAPI + Gemini + FAISS)
│   │   ├── ProjectsSection.tsx       # MAEC, CityMind AI, Gym Management System
│   │   ├── ExperienceSection.tsx     # Editorial timeline of verified internships
│   │   ├── SkillsSection.tsx         # Grouped technical competencies (no progress bars)
│   │   ├── AboutSection.tsx          # Concise professional narrative & education card
│   │   ├── ContactSection.tsx        # One-click copy email, social links, footer
│   │   └── ResumeModal.tsx           # Resume preview & PDF download handler
│   ├── config/
│   │   └── portfolio.ts       # Centralized configuration (URLs, placeholders, bio, copy)
│   └── lib/
│       └── utils.ts           # Class merging helper (cn)
├── public/
│   ├── Aadhitya_H_Resume.pdf  # Verified resume PDF (pre-generated)
│   └── screenshots/           # Dropzone for production screenshot captures
└── README.md
```

---

## 🎯 Primary Featured Project: DesignFlow AI

Targeted directly at the **AI Generalist (Design)** internship at **Ather Energy**:
- **Problem:** Designers spend valuable time searching across fragmented folders and moodboards for historical references, style tokens, and matching aesthetics.
- **Solution:** A multi-modal design workflow assistant that parses unstructured product briefs, queries visual CAD/moodboard assets via high-dimensional FAISS embeddings, and extracts color/texture tokens.
- **Human-in-the-Loop:** Designed to amplify human designers rather than claiming autonomous vehicle design.
- **Architecture:** Next.js Client → FastAPI Gateway → Gemini Multimodal API → FAISS Vector Store + Metadata Cache.

---

## ⚙️ Configuration & Customization (`src/config/portfolio.ts`)

All personal details, URLs, and external links are centralized in `src/config/portfolio.ts`:
- **GitHub Repositories:** Set `isAvailable: true` once you publish public GitHub repositories for *DesignFlow AI*, *MAEC*, or *CityMind AI*.
- **Live Demo URLs:** Set `isAvailable: true` when live demos are deployed.
- **Resume File:** Pre-placed at `public/Aadhitya_H_Resume.pdf`. You can swap in an updated PDF file with the same name anytime.

---

## 🚢 Deploying to Vercel

1. **Create a new repository on GitHub:**
   ```bash
   cd C:\aadhitya-portfolio
   git remote add origin https://github.com/aadhi590/aadhitya-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
   - Select `aadhitya-portfolio` from your GitHub accounts.
   - Vercel will automatically detect Next.js with zero manual configuration needed.
   - Click **Deploy**.
