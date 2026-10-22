"use client";

import React from "react";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";

export function AboutSection() {
  const { personal, about } = SITE_CONFIG;
  const { education } = personal;

  return (
    <section id="about" className="py-20 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
              <span>Engineering Philosophy & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed font-sans">
              <p className="font-normal">
                {about.narrative}
              </p>
              <p className="text-neutral-600 text-sm">
                {about.subtext}
              </p>
            </div>

            {/* Target Alignment Focus Points */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-3">
                Core Engineering Strengths
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Agent orchestration with LangGraph & Gemini</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>High-performance FastAPI microservices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Vector embeddings & FAISS similarity indexing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Design-oriented workflow tool integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Compact Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-neutral-100">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                    Academic Background
                  </span>
                  <h3 className="text-base font-bold text-neutral-900">
                    SRM Institute of Science and Technology
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-neutral-500 font-mono text-[11px] block mb-0.5">Degree Program</span>
                  <span className="text-neutral-900 font-semibold text-sm">
                    {education.degree}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
                  <div>
                    <span className="text-neutral-500 font-mono text-[11px] block mb-0.5">CGPA</span>
                    <span className="text-blue-600 font-bold text-xl font-mono">
                      {education.cgpa}
                    </span>
                    <span className="text-neutral-400 text-[10px] block">Verified Official</span>
                  </div>

                  <div>
                    <span className="text-neutral-500 font-mono text-[11px] block mb-0.5">Expected Graduation</span>
                    <span className="text-neutral-900 font-bold text-sm font-mono">
                      {education.graduation}
                    </span>
                    <span className="text-neutral-400 text-[10px] block">{education.period}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{personal.location}</span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-semibold border border-emerald-200">
                    In Good Standing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
