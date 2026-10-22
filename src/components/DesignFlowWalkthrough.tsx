"use client";

import React, { useState } from "react";
import { 
  Search, 
  Layers, 
  Palette, 
  FileText, 
  SlidersHorizontal, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Image as ImageIcon,
  Tag,
  Info
} from "lucide-react";

export function DesignFlowWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "brief",
      title: "1. Brief & Constraint Parsing",
      short: "Brief Ingestion",
      icon: FileText,
      description:
        "Processes raw text product briefs or PRD excerpts to isolate visual styling constraints, ergonomic bounds, and target design themes.",
      wireframe: {
        type: "brief",
        prompt: "Urban electric commuter vehicle: minimal cockpit, matte titanium surfacing, aggressive geometric headlamps, high-contrast digital cluster.",
        extractedTags: ["Minimal Cockpit", "Matte Titanium", "Geometric Headlamps", "High-Contrast UI", "Urban Commuter"],
        constraints: [
          { name: "Surface Treatment", value: "Matte low-glare powder coat / satin finish", status: "Extracted" },
          { name: "Silhouette Profile", value: "Aggressive forward-lean, tight wheelbase", status: "Extracted" },
          { name: "Lighting Architecture", value: "Dual horizontal LED lightguide with sharp bevels", status: "Extracted" },
        ],
      },
    },
    {
      id: "search",
      title: "2. Multimodal Semantic Reference Retrieval",
      short: "Semantic Search",
      icon: Search,
      description:
        "Converts natural language and visual intent into high-dimensional embeddings to query internal CAD sketches, photography, and inspiration archives.",
      wireframe: {
        type: "search",
        query: "matte dark finish with sharp geometric bevels and integrated headlamp cowl",
        results: [
          { title: "Ref-2024-Cowl-A", similarity: "94% Vector Match", tags: ["Matte", "Geometric", "Bevel"], meta: "CAD Snapshot · 2400x1600" },
          { title: "Ref-2023-Aero-Front", similarity: "89% Vector Match", tags: ["Aero", "Satin Dark", "Lightguide"], meta: "Clay Model Photo · 4K" },
          { title: "Ref-2025-Cockpit-Minimal", similarity: "87% Vector Match", tags: ["Cluster", "Minimal", "Contrast"], meta: "HMI Wireframe · Vector" },
        ],
      },
    },
    {
      id: "taxonomy",
      title: "3. Auto-Categorization & Token Extraction",
      short: "Design Tokens",
      icon: Palette,
      description:
        "Clusters retrieved visual assets into structured design taxonomies and automatically extracts dominant color hex palettes and material finishes.",
      wireframe: {
        type: "taxonomy",
        colors: [
          { name: "Matte Carbon", hex: "#17191C", desc: "Primary Fairing" },
          { name: "Electric Cobalt", hex: "#0052FF", desc: "Brand Accent / DRL" },
          { name: "Satin Titanium", hex: "#8E9299", desc: "Subframe / Hardware" },
          { name: "Pure Signal White", hex: "#F3F4F6", desc: "Instrumentation" },
        ],
        attributes: [
          { category: "Texture", values: ["Micro-etched matte", "Brushed alloy", "Smoked polycarbonate"] },
          { category: "Form Language", values: ["Chamfered edges", "Monolithic volumes", "Negative space intake"] },
        ],
      },
    },
    {
      id: "summary",
      title: "4. Structured Research Brief Export",
      short: "Research Summary",
      icon: Layers,
      description:
        "Generates clean, traceable design research dossiers pairing visual citations with engineering criteria for immediate review with design leads.",
      wireframe: {
        type: "summary",
        title: "Design Research Brief — Urban Commuter Alpha",
        sections: [
          { header: "Aesthetic Direction", note: "Monolithic, industrial-minimal form with precise geometric crease lines." },
          { header: "Surfaced Visual Benchmarks", note: "3 internal historical references aligned with target surface reflectance." },
          { header: "Design System Tokens", note: "4 extracted core hex codes aligned with current industrial guidelines." },
        ],
      },
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-xs">
      {/* Top Header / Walkthrough Switcher */}
      <div className="border-b border-neutral-200 bg-[#FAFAFA] p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Interactive Workflow Inspection
            </span>
            <h4 className="text-lg font-bold text-neutral-900 mt-0.5">
              How DesignFlow AI Accelerates Early-Stage Design Research
            </h4>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Simulated interface of implemented capabilities</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = idx === activeStep;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-left text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white text-blue-600 shadow-xs border border-neutral-200 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70 border border-transparent"
                }`}
              >
                <div
                  className={`p-1.5 rounded-md ${
                    isActive ? "bg-blue-50 text-blue-600" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="truncate font-semibold">{s.short}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Step 0{idx + 1}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workflow Stage Canvas */}
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 mb-1">
            <span className="font-bold">CAPABILITY {activeStep + 1} OF 4</span>
            <span>·</span>
            <span>HUMAN-IN-THE-LOOP ASSISTANT</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900">{current.title}</h3>
          <p className="text-neutral-600 text-sm mt-1 max-w-3xl leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Dynamic Simulated Mockup of Step */}
        <div className="rounded-xl border border-neutral-200 bg-[#FBFBFB] p-5 md:p-7">
          {/* Top Mock Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 inline-block" />
              <span className="ml-2 text-neutral-600 font-medium">designflow-workspace / {current.id}</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200/60">
              Live Mockup Preview
            </span>
          </div>

          {/* STEP 1: Brief Ingestion */}
          {current.wireframe.type === "brief" && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Input Product Design Brief / PRD Excerpt
                </label>
                <div className="p-4 rounded-lg bg-white border border-neutral-200 font-mono text-xs text-neutral-800 leading-relaxed">
                  "{current.wireframe.prompt}"
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Extracted Design Entities & Styling Keywords
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.wireframe.extractedTags?.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60"
                    >
                      <Tag className="w-3 h-3 text-blue-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Decomposed Engineering & Styling Constraints
                </span>
                <div className="space-y-2">
                  {current.wireframe.constraints?.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-white border border-neutral-200 text-xs gap-1"
                    >
                      <div className="font-semibold text-neutral-900 w-48">{item.name}</div>
                      <div className="text-neutral-600 font-mono flex-1">{item.value}</div>
                      <span className="text-[10px] font-mono text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Semantic Reference Search */}
          {current.wireframe.type === "search" && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Natural-Language Visual Query
                </label>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white border border-neutral-200">
                  <Search className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-mono text-neutral-800 flex-1">
                    "{current.wireframe.query}"
                  </span>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                    FAISS Dense Embedding
                  </span>
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Retrieved Internal Design References
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {current.wireframe.results?.map((res, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-blue-300 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        {/* Visual Asset Thumbnail Placeholder */}
                        <div className="h-28 rounded-lg bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center text-neutral-400 mb-3 p-3 text-center">
                          <ImageIcon className="w-6 h-6 mb-1 text-neutral-400" />
                          <span className="text-[10px] font-mono text-neutral-500 font-medium">
                            {res.title}
                          </span>
                          <span className="text-[9px] text-neutral-400 font-mono mt-0.5">
                            {res.meta}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-neutral-900">{res.title}</span>
                          <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
                            {res.similarity}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {res.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center justify-between">
                        <span>Index: Vector Store</span>
                        <span className="text-blue-600 font-medium">Pin Reference →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Auto-Categorization & Tokens */}
          {current.wireframe.type === "taxonomy" && (
            <div className="space-y-6">
              <div>
                <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Extracted Color Palette & Surface Tokens
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {current.wireframe.colors?.map((c, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-neutral-200 flex flex-col gap-2"
                    >
                      <div
                        className="h-14 rounded-lg border border-neutral-200 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-neutral-900">{c.name}</div>
                        <div className="text-[11px] font-mono text-neutral-500">{c.hex}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                  Material & Form Language Taxonomy
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.wireframe.attributes?.map((attr, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200">
                      <span className="text-xs font-bold text-neutral-900 block mb-2 font-mono uppercase tracking-wide">
                        {attr.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {attr.values.map((v, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200/80 font-medium"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Structured Summary Dossier */}
          {current.wireframe.type === "summary" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-neutral-200">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                  <div>
                    <h5 className="text-sm font-bold text-neutral-900">{current.wireframe.title}</h5>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      Target Audience: Industrial & CMF Design Teams
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                    Ready for Export
                  </span>
                </div>

                <div className="space-y-3">
                  {current.wireframe.sections?.map((sec, i) => (
                    <div key={i} className="text-xs">
                      <span className="font-bold text-neutral-800 block mb-0.5 font-mono">
                        {sec.header}
                      </span>
                      <p className="text-neutral-600 leading-relaxed">{sec.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Screenshot Placeholder Guidance Box */}
        <div className="mt-6 p-4 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5 text-neutral-600">
            <ImageIcon className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-neutral-900">Custom Screenshot Gallery Note:</span>{" "}
              Production UI screenshots can be dropped into{" "}
              <code className="px-1.5 py-0.5 rounded bg-neutral-200/80 font-mono text-[11px] text-neutral-800">
                public/screenshots/designflow/
              </code>{" "}
              (e.g., <code className="font-mono text-[11px]">brief-analysis.png</code>,{" "}
              <code className="font-mono text-[11px]">semantic-search.png</code>). The UI will display them seamlessly.
            </div>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap self-end sm:self-auto">
            Config: site.config.ts
          </span>
        </div>
      </div>
    </div>
  );
}
