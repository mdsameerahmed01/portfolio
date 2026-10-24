"use client";

import { useState, useRef } from "react";
import { personalData } from "@/data/content";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { projects } = personalData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = projects.items.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Mobile swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextProject();
    } else if (distance < -50) {
      prevProject();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentProject = projects.items[currentIndex];

  return (
    <section id="projects" className="py-20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sky-400 font-semibold px-2.5 py-1 rounded-md bg-sky-400/10 border border-sky-400/20">
              {projects.sectionNumber} // PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {projects.title}
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-mono text-slate-400">
              <span className="text-white font-bold">{currentIndex + 1}</span> / {total}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevProject}
                aria-label="Previous project"
                className="p-2 rounded-xl border border-white/10 bg-[#12121a] text-slate-300 hover:text-white hover:border-sky-400/50 hover:bg-white/[0.04] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextProject}
                aria-label="Next project"
                className="p-2 rounded-xl border border-white/10 bg-[#12121a] text-slate-300 hover:text-white hover:border-sky-400/50 hover:bg-white/[0.04] transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Card Deck Showcase */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#14141e] to-[#0f0f17] p-6 sm:p-10 shadow-2xl transition-all overflow-hidden"
        >
          {/* Subtle accent glow in background */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-xs font-medium text-sky-300">
                {currentProject.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentProject.category}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
              Swipe or click Prev/Next to browse
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            {currentProject.title}
          </h3>

          {/* 2-line Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
            {currentProject.description}
          </p>

          {/* Project Highlights */}
          {currentProject.highlights && (
            <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Key Highlights:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {currentProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack tags */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2.5">
              Technologies:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentProject.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm hover:bg-sky-300 transition-all shadow-lg shadow-sky-400/10"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Visit Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-[#12121a] text-slate-200 hover:text-white hover:border-sky-400/40 hover:bg-[#181824] font-medium text-xs sm:text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            )}
          </div>
        </div>

        {/* Carousel Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to project ${item.title}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-sky-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA: More on GitHub */}
        <div className="mt-12 text-center">
          <a
            href={projects.githubMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-[#12121a] text-slate-300 hover:text-white hover:border-sky-400/40 hover:bg-white/[0.04] text-xs sm:text-sm font-medium transition-all group"
          >
            <GithubIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>More Projects on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
