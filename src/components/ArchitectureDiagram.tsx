"use client";

import React from "react";

export function ArchitectureDiagram() {
  return (
    <div className="w-full bg-[#F4F5F7] rounded-xl border border-neutral-200/80 p-6 md:p-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 gap-2">
        <div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-blue-600 font-semibold">
            System Architecture
          </span>
          <h4 className="text-base font-semibold text-neutral-900 mt-0.5">
            DesignFlow AI · Multi-Modal Asset Indexing & Retrieval Pipeline
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            FastAPI + Gemini API + FAISS
          </span>
        </div>
      </div>

      <div className="py-6 overflow-x-auto">
        <div className="min-w-[680px]">
          <svg
            viewBox="0 0 880 240"
            className="w-full h-auto text-neutral-800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid dots subtle */}
            <pattern id="arch-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#E5E7EB" />
            </pattern>
            <rect width="880" height="240" fill="url(#arch-grid)" rx="8" />

            {/* Connecting Lines */}
            <path
              d="M 180 120 L 250 120"
              stroke="#2563EB"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 400 120 L 470 70"
              stroke="#2563EB"
              strokeWidth="2"
            />
            <path
              d="M 400 120 L 470 170"
              stroke="#2563EB"
              strokeWidth="2"
            />
            <path
              d="M 640 70 L 710 120"
              stroke="#2563EB"
              strokeWidth="2"
            />
            <path
              d="M 640 170 L 710 120"
              stroke="#2563EB"
              strokeWidth="2"
            />

            {/* Arrowheads */}
            <polygon points="252,120 244,116 244,124" fill="#2563EB" />
            <polygon points="472,70 464,66 464,74" fill="#2563EB" />
            <polygon points="472,170 464,166 464,174" fill="#2563EB" />
            <polygon points="712,120 704,116 704,124" fill="#2563EB" />

            {/* Step 1: Input / Designer Interface */}
            <g transform="translate(30, 75)">
              <rect
                width="150"
                height="90"
                rx="8"
                fill="#FFFFFF"
                stroke="#D1D5DB"
                strokeWidth="1.5"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              />
              <text x="16" y="28" fill="#111827" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                Designer Interface
              </text>
              <text x="16" y="46" fill="#6B7280" fontSize="10" fontFamily="sans-serif">
                Next.js / TypeScript
              </text>
              <rect x="16" y="56" width="118" height="20" rx="4" fill="#F3F4F6" />
              <text x="22" y="70" fill="#2563EB" fontSize="9" fontFamily="monospace">
                Natural-Lang Query / Brief
              </text>
            </g>

            {/* Step 2: FastAPI Gateway */}
            <g transform="translate(250, 75)">
              <rect
                width="150"
                height="90"
                rx="8"
                fill="#FFFFFF"
                stroke="#2563EB"
                strokeWidth="1.5"
                filter="drop-shadow(0 1px 2px rgba(37,99,235,0.1))"
              />
              <text x="16" y="28" fill="#111827" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                FastAPI Gateway
              </text>
              <text x="16" y="46" fill="#6B7280" fontSize="10" fontFamily="sans-serif">
                Async Request Router
              </text>
              <rect x="16" y="56" width="118" height="20" rx="4" fill="#EFF6FF" />
              <text x="22" y="70" fill="#1D4ED8" fontSize="9" fontFamily="monospace">
                Token & Query Parser
              </text>
            </g>

            {/* Step 3A: Gemini Multimodal Engine */}
            <g transform="translate(470, 25)">
              <rect
                width="170"
                height="90"
                rx="8"
                fill="#FFFFFF"
                stroke="#D1D5DB"
                strokeWidth="1.5"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              />
              <text x="16" y="28" fill="#111827" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                Gemini API Multimodal
              </text>
              <text x="16" y="46" fill="#6B7280" fontSize="10" fontFamily="sans-serif">
                Visual & Text Embeddings
              </text>
              <rect x="16" y="56" width="138" height="20" rx="4" fill="#F9FAFB" />
              <text x="22" y="70" fill="#4B5563" fontSize="9" fontFamily="monospace">
                High-Dim Feature Vectors
              </text>
            </g>

            {/* Step 3B: FAISS & Metadata Cache */}
            <g transform="translate(470, 125)">
              <rect
                width="170"
                height="90"
                rx="8"
                fill="#FFFFFF"
                stroke="#D1D5DB"
                strokeWidth="1.5"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              />
              <text x="16" y="28" fill="#111827" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                FAISS Vector Index
              </text>
              <text x="16" y="46" fill="#6B7280" fontSize="10" fontFamily="sans-serif">
                Similarity Search & Storage
              </text>
              <rect x="16" y="56" width="138" height="20" rx="4" fill="#F9FAFB" />
              <text x="22" y="70" fill="#4B5563" fontSize="9" fontFamily="monospace">
                Sub-50ms Approximate NN
              </text>
            </g>

            {/* Step 4: Semantic Results & Design Assets */}
            <g transform="translate(710, 75)">
              <rect
                width="140"
                height="90"
                rx="8"
                fill="#0F172A"
                stroke="#0F172A"
                strokeWidth="1.5"
                filter="drop-shadow(0 4px 6px rgba(15,23,42,0.15))"
              />
              <text x="16" y="28" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                Curated Workspace
              </text>
              <text x="16" y="46" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
                Ranked References
              </text>
              <rect x="16" y="56" width="108" height="20" rx="4" fill="#1E293B" />
              <text x="22" y="70" fill="#38BDF8" fontSize="9" fontFamily="monospace">
                Moodboards & Tokens
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-200 text-xs text-neutral-600">
        <div>
          <span className="font-semibold text-neutral-900 block mb-0.5">1. Ingestion & Brief Parsing</span>
          Extracts keywords, styling tokens, and design criteria from unstructured briefs.
        </div>
        <div>
          <span className="font-semibold text-neutral-900 block mb-0.5">2. High-Speed Vector Retrieval</span>
          Dense vector matching against pre-computed asset embeddings via FAISS.
        </div>
        <div>
          <span className="font-semibold text-neutral-900 block mb-0.5">3. Human Creative Control</span>
          Delivers clustered references, palettes, and style notes directly to the designer.
        </div>
      </div>
    </div>
  );
}
