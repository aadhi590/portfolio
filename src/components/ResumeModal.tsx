"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Terminal
} from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personal, experience, skills } = SITE_CONFIG;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-[#FAFAFA]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Aadhitya H — Curriculum Vitae
              </h3>
              <p className="text-xs text-neutral-500 font-mono">
                {personal.education.institution} · CGPA {personal.education.cgpa}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-700">
          {/* PDF Download Action Banner */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 text-sm">Download Official PDF</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  {personal.resume.fileName}
                </span>
              </div>
              <p className="text-[11px] text-neutral-600">
                Direct copy of my verified 1-page resume for recruiter review.
              </p>
            </div>

            <a
              href={personal.resume.filePath}
              download={personal.resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Local Placement Instructions Alert */}
          <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-2.5 text-[11px] text-neutral-600">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-neutral-800">File location note:</span> Place your latest resume at{" "}
              <code className="px-1 py-0.5 rounded bg-neutral-200 font-mono text-neutral-800">
                public/{personal.resume.fileName}
              </code>
              . The button above automatically points to this local path.
            </div>
          </div>

          {/* Digital Snapshot of Resume */}
          <div className="space-y-4 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Summary Snapshot
              </h4>
              <p className="text-neutral-700 leading-relaxed font-sans">
                AI engineer and full-stack developer specializing in multi-agent systems, generative AI, and production-grade backend development using FastAPI, LangChain, and LangGraph. Experienced in architecting agentic AI pipelines powered by the Gemini API and shipping end-to-end applications across intelligent tutoring, urban intelligence, and autonomous procurement domains.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Education
              </h4>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 flex justify-between items-center">
                <div>
                  <div className="font-bold text-neutral-900">{personal.education.institution}</div>
                  <div className="text-neutral-600">{personal.education.degree}</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-blue-600 font-bold">CGPA {personal.education.cgpa}</div>
                  <div className="text-neutral-500 text-[10px]">{personal.education.period}</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Work Experience Timeline
              </h4>
              <div className="space-y-2">
                {experience.map((e, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-neutral-900">{e.role}</span>
                      <span className="font-mono text-neutral-500 text-[10px]">{e.period}</span>
                    </div>
                    <div className="text-neutral-600 font-medium mb-1.5">{e.company}</div>
                    <ul className="list-disc pl-4 space-y-1 text-neutral-600 text-[11px]">
                      {e.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-neutral-200 bg-[#FAFAFA] flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>{personal.contact.email}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-neutral-300 bg-white text-neutral-700 font-semibold hover:bg-neutral-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
