"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
            <span>Work History & Engineering Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
            Professional Experience
          </h2>
          <p className="text-neutral-600 text-sm mt-2 max-w-2xl leading-relaxed">
            Real production engineering experience across AI-driven identity verification, autonomous drone inference systems, and high-throughput database optimization.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-neutral-200 ml-3 sm:ml-6 space-y-12">
          {SITE_CONFIG.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 bg-white transition-all ${
                  exp.isCurrent
                    ? "border-blue-600 ring-4 ring-blue-50"
                    : "border-neutral-400 group-hover:border-neutral-900"
                }`}
              />

              {/* Card Container */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 transition-all shadow-2xs">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-100 gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                        {exp.role}
                      </h3>
                      {exp.isCurrent ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                          Current Role
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                          Completed
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-neutral-700 font-sans">
                      {exp.company}
                    </div>
                  </div>

                  {/* Period & Location Metadata */}
                  <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-500 gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
