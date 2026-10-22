"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/portfolio";
import { ResumeModal } from "./ResumeModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#FBFBFB]/90 backdrop-blur-md border-b border-neutral-200/80 shadow-2xs py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-2 focus:outline-hidden"
            >
              <span className="text-base font-black tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
                {SITE_CONFIG.personal.name}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 border-l border-neutral-200 pl-2">
                AI Systems & Full-Stack
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Resume Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg md:hidden text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-neutral-700 hover:text-blue-600 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
