"use client";

import React, { useState } from "react";
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Bot, 
  Building2, 
  Dumbbell, 
  CheckCircle2, 
  Cpu
} from "lucide-react";
import { SITE_CONFIG, Project } from "@/config/portfolio";

export function ProjectsSection() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "maec":
        return Bot;
      case "citymind-ai":
        return Building2;
      case "gym-management":
        return Dumbbell;
      default:
        return Cpu;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-neutral-200 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-neutral-700 border border-neutral-200 mb-3">
            <span>Engineering Depth & Multi-Agent Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
            Selected Systems & Applications
          </h2>
          <p className="text-neutral-600 text-sm mt-2 max-w-2xl leading-relaxed">
            Multi-agent orchestrations, real-time data sync, and production full-stack systems built with system design rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.otherProjects.map((p) => {
            const Icon = getProjectIcon(p.id);
            const isExpanded = expandedProjectId === p.id;

            return (
              <div
                key={p.id}
                className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-7 flex flex-col justify-between hover:border-neutral-300 transition-all shadow-2xs group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {p.id === "gym-management" ? "Full-Stack" : "Multi-Agent"}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-1">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {p.tagline}
                  </p>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Capabilities Accordion */}
                  <div className="pt-3 border-t border-neutral-100">
                    <button
                      onClick={() => toggleExpand(p.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-neutral-700 hover:text-blue-600 transition-colors py-1"
                    >
                      <span>
                        {isExpanded ? "Hide Implementation Specs" : "View Implementation Specs"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-2 text-xs text-neutral-600 font-sans">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                          Verified Implemented Features:
                        </div>
                        {p.capabilities.map((c, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-tight text-neutral-700">{c}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  {p.links.github?.isAvailable ? (
                    <a
                      href={p.links.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-neutral-400">
                      Repo: Configured in site.config
                    </span>
                  )}

                  {p.links.live?.isAvailable && (
                    <a
                      href={p.links.live.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
