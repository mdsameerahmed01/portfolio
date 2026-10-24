"use client";

import { personalData } from "@/data/content";
import { ArrowUp, Mail, ShoppingBag } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Identity and copyright */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>{personalData.name}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            &copy; 2026 Mohammed Sameer Ahmed. All rights reserved.
          </p>
        </div>

        {/* Center: Social icons */}
        <div className="flex items-center gap-2">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-sky-400/30 hover:bg-white/[0.05] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-sky-400/30 hover:bg-white/[0.05] transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Email"
            className="p-2 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-sky-400/30 hover:bg-white/[0.05] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalData.store}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Store"
            className="p-2 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-sky-400/30 hover:bg-white/[0.05] transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-[#12121a] text-xs font-mono text-slate-300 hover:text-white hover:border-sky-400/50 hover:bg-[#181824] transition-all cursor-pointer group"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
