import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DesignFlowShowcase } from "@/components/DesignFlowShowcase";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DesignFlowShowcase />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
