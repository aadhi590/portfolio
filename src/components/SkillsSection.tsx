"use client";

import React from "react";
import { Sparkles, Terminal, Server, Layout, Database, Cloud } from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";

export function SkillsSection() {
  const getCategoryIcon = (title: string) => {
    if (title.includes("AI")) return Sparkles;
    if (title.includes("Programming")) return Terminal;
    if (title.includes("Backend")) return Server;
    if (title.includes("Frontend")) return Layout;
    if (title.includes("Databases")) return Database;
    return Cloud;
  };

  return (
    <section id="skills" className="py-20 border-b border-neutral-200 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-neutral-700 border border-neutral-200 mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
            Skills & Core Tooling
          </h2>
          <p className="text-neutral-600 text-sm mt-2 max-w-2xl leading-relaxed">
            Categorized technical stack focused on multi-agent engineering, API infrastructure, and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.skills.map((category, idx) => {
            const Icon = getCategoryIcon(category.title);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-neutral-100">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F9FAFB] text-neutral-800 border border-neutral-200/80 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-colors cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Category 0{idx + 1}</span>
                  <span>{category.skills.length} Competencies</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
