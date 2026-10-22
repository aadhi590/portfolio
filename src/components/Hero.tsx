"use client";

import React from "react";
import { ArrowDown, Mail, FileText, ArrowRight, Sparkles, Network, Terminal, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";

export function Hero() {
  const { hero, personal } = SITE_CONFIG;

  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Role Alignment Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white text-neutral-800 border border-neutral-200/90 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>AI Systems Engineer & Full-Stack Developer</span>
            </div>

            {/* Confident Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              {hero.headline}
            </h1>

            {/* Supporting Copy */}
            <div className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl font-sans">
              <p>
                I'm Aadhitya, an AI engineer and full-stack developer focused on multi-agent systems, generative AI, and practical AI-powered applications. I design and build tools that simplify complex workflows, reduce friction, and improve how people work.
              </p>
            </div>

            {/* Location & Academic Baseline */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 pt-1">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span>Chennai, India</span>
              <span>·</span>
              <span>SRM IST (B.Tech CSE Business Systems, CGPA 9.1)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-xs"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 font-medium text-xs sm:text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-colors shadow-xs"
              >
                <span>Get in Touch</span>
              </a>

              {/* Direct Resume link - NO pop up */}
              <a
                href={personal.resume.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-neutral-200 bg-white/80 hover:bg-white text-neutral-700 hover:text-neutral-900 font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Restrained Visual AI Workflow Topology */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm relative overflow-hidden">
              {/* Visual Label */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-900">
                  <Network className="w-4 h-4 text-blue-600" />
                  <span>Agentic Workflow Architecture</span>
                </div>
                <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Active Topology
                </span>
              </div>

              {/* Micro Workflow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                {/* Node 1: Input / Brief */}
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-neutral-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <div className="font-bold text-neutral-900 text-[11px]">Designer Input / Intent</div>
                      <div className="text-[10px] text-neutral-500 font-sans">Natural-language styling criteria & briefs</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-400">Stream IN</span>
                </div>

                {/* Flow arrow down */}
                <div className="flex justify-center text-neutral-300">
                  <div className="h-3 w-0.5 bg-neutral-200" />
                </div>

                {/* Node 2: Multi-Agent / Multimodal Router */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    <div>
                      <div className="font-bold text-blue-900 text-[11px]">Orchestration & Retrieval Layer</div>
                      <div className="text-[10px] text-blue-700 font-sans">Gemini Multimodal · FAISS Vector Space</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-blue-600 font-semibold">&lt;50ms</span>
                </div>

                {/* Flow arrow down */}
                <div className="flex justify-center text-neutral-300">
                  <div className="h-3 w-0.5 bg-neutral-200" />
                </div>

                {/* Node 3: Synthesized Output */}
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-neutral-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <div>
                      <div className="font-bold text-neutral-900 text-[11px]">Structured Creative Output</div>
                      <div className="text-[10px] text-neutral-500 font-sans">Ranked references, token palettes, brief dossier</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Ready</span>
                </div>
              </div>

              {/* Subtext info */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Deterministic Tool-Calling</span>
                <span>Human-in-the-Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
