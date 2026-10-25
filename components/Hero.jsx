"use client";

import { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/content";
import { ArrowDown, Mail, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 lg:gap-14">
          {/* Left Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-300 font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to Frontend & Web Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              {personalData.name}
            </h1>

            {/* Role / Subtitle */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm sm:text-base font-medium text-sky-400 mb-5">
              <span>Frontend Developer</span>
              <span className="text-slate-600">&bull;</span>
              <span>MCA Student</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-400 font-normal">Surat, Gujarat</span>
            </div>

            {/* Original Intro paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-8">
              {personalData.hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20 transition-all cursor-pointer"
              >
                <span>{personalData.hero.ctaProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-[#12121a] text-slate-200 font-medium text-sm hover:text-white hover:border-sky-400/40 hover:bg-[#181824] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{personalData.hero.ctaContact}</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <span className="text-xs text-slate-500 font-mono">Connect:</span>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-xl border border-white/10 bg-[#12121a] text-slate-400 hover:text-white hover:border-sky-400/40 hover:bg-white/[0.04] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-xl border border-white/10 bg-[#12121a] text-slate-400 hover:text-white hover:border-sky-400/40 hover:bg-white/[0.04] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send Email"
                className="p-2 rounded-xl border border-white/10 bg-[#12121a] text-slate-400 hover:text-white hover:border-sky-400/40 hover:bg-white/[0.04] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalData.store}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SamStore Online Merchandise"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-[#12121a] text-xs text-slate-400 hover:text-sky-300 hover:border-sky-400/40 transition-all font-mono"
              >
                <span>Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Profile Photo / Fallback Avatar */}
          <div className="relative shrink-0">
            {/* Glow ring */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-sky-400/30 to-emerald-400/20 blur-lg opacity-70" />

            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-white/15 bg-[#12121a] shadow-2xl flex items-center justify-center">
              {!imageError ? (
                <Image
                  src={personalData.profileImage}
                  alt={personalData.name}
                  width={256}
                  height={256}
                  priority
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Sleek fallback avatar when profile.jpg is not provided yet */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#161622] to-[#0e0e16]">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mb-3 text-sky-400 font-bold text-xl shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    SA
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    {personalData.name}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 font-mono">
                    Frontend &bull; MCA
                  </span>
                  <div className="mt-3 flex items-center gap-1 text-[10px] text-sky-400/80 font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">
                    <Code2 className="w-3 h-3" />
                    <span>public/profile.jpg</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
