"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";

export function ContactSection() {
  const { personal } = SITE_CONFIG;
  const { contact } = personal;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-[#FAFAFA] p-8 sm:p-12 lg:p-16 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold block mb-2">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-4">
              Let's build systems that make a measurable impact.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              Open to conversations regarding AI engineering, workflow automation, and the AI Generalist (Design) internship at Ather Energy. Feel free to reach out directly.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Direct Mailto */}
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 font-medium text-xs sm:text-sm hover:bg-neutral-50 transition-colors shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-500" />
                    <span>{contact.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-neutral-200 text-xs font-semibold text-neutral-700">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </a>

              <span className="text-neutral-400 font-mono text-[11px]">
                {personal.location}
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono border-t border-neutral-200 pt-8 gap-4">
          <div>
            © {new Date().getFullYear()} {personal.name} · Built with Next.js & Tailwind CSS
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Chennai, India</span>
            <span>·</span>
            <span>May 2027 Grad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
