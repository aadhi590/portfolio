"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Search, 
  FolderTree, 
  FileText, 
  Sliders, 
  Layers, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Database,
  Workflow
} from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { DesignFlowWalkthrough } from "./DesignFlowWalkthrough";

export function DesignFlowShowcase() {
  const project = SITE_CONFIG.featuredProject;
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "workflow" | "decisions">("overview");

  return (
    <section id="work" className="py-20 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              Featured Case Study · AI Generalist (Design) Alignment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
              {project.title}
            </h2>
            <p className="text-neutral-500 font-mono text-xs sm:text-sm mt-2">
              {project.category}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.links.github.isAvailable ? (
              <a
                href={project.links.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 text-xs font-medium text-neutral-800 bg-white hover:bg-neutral-50 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            ) : null}

            {project.links.live.isAvailable ? (
              <a
                href={project.links.live.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-xs"
              >
                <span>Live Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Narrative & Positioning Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-neutral-900 text-white mb-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-2">
              Role Positioning & Intent
            </span>
            <p className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed">
              "{project.tagline}"
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-400 leading-relaxed font-sans flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Design Philosophy:</strong> {project.targetAlignment}
              </span>
            </div>
          </div>
        </div>

        {/* Content Tabs Switcher */}
        <div className="flex border-b border-neutral-200 mb-8 overflow-x-auto gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "overview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Problem & Solution
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "workflow"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Workflow & Capabilities
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "architecture"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab("decisions")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "decisions"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Engineering Trade-Offs
          </button>
        </div>

        {/* TAB 1: Overview (Problem & Solution) */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                    <Workflow className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900">The Problem</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {project.problem}
                </p>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-600 font-mono space-y-1.5">
                  <div className="text-neutral-800 font-semibold uppercase text-[10px] tracking-wider">
                    Observed Pain Points:
                  </div>
                  <div>• Keyword searches fail on nuanced visual styles</div>
                  <div>• Scattered assets across cloud drives with no unified taxonomy</div>
                  <div>• Slow context-switching between PRDs and moodboards</div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-blue-200/80 shadow-2xs relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900">The Solution</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {project.solution}
                </p>
                <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200/60 text-xs text-neutral-700 font-mono space-y-1.5">
                  <div className="text-blue-900 font-semibold uppercase text-[10px] tracking-wider">
                    Core Architectural Approach:
                  </div>
                  <div>• Multimodal embeddings for visual silhouette & finish matching</div>
                  <div>• Deterministic constraint extraction from unstructured briefs</div>
                  <div>• Non-destructive reference curation that respects designer autonomy</div>
                </div>
              </div>
            </div>

            {/* Implemented Capabilities Grid */}
            <div>
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  Implemented Scope
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                  Core Verified Capabilities
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-2xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Preview Teaser */}
            <DesignFlowWalkthrough />
          </div>
        )}

        {/* TAB 2: Workflow & Interactive Walkthrough */}
        {activeTab === "workflow" && (
          <div className="space-y-8">
            <DesignFlowWalkthrough />
          </div>
        )}

        {/* TAB 3: System Architecture */}
        {activeTab === "architecture" && (
          <div className="space-y-8">
            <ArchitectureDiagram />

            {/* Stack Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Client Application
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">Frontend Tier</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {project.technicalArchitecture.frontend}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Microservices
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">Backend Gateway</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {project.technicalArchitecture.backend}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Reasoning Backbone
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">AI & Embeddings</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {project.technicalArchitecture.aiOrchestration}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Data Persistence
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">Vector & Metadata</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {project.technicalArchitecture.storage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Engineering Trade-Offs */}
        {activeTab === "decisions" && (
          <div className="space-y-6">
            <div className="mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Technical Rigor
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                Key Engineering Decisions & Trade-Offs
              </h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-2xl">
                Real architectural decisions made during development to balance latency, recall precision, and designer trust.
              </p>
            </div>

            <div className="space-y-4">
              {project.engineeringDecisions.map((dec, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                      DECISION 0{i + 1}
                    </span>
                    <h4 className="text-base font-bold text-neutral-900">{dec.title}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-neutral-100">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-1">
                        Chosen Approach
                      </span>
                      <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                        {dec.decision}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                        Acknowledged Trade-Off & Mitigation
                      </span>
                      <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                        {dec.tradeoff}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
