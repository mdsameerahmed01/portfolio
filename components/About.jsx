"use client";

import { personalData } from "@/data/content";
import { GraduationCap, MapPin, Globe, Compass } from "lucide-react";

export default function About() {
  const { about } = personalData;

  const infoIcons = [
    <GraduationCap key="edu" className="w-5 h-5 text-sky-400" />,
    <MapPin key="loc" className="w-5 h-5 text-emerald-400" />,
    <Globe key="lang" className="w-5 h-5 text-cyan-400" />,
    <Compass key="int" className="w-5 h-5 text-indigo-400" />,
  ];

  return (
    <section id="about" className="py-20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-sky-400 font-semibold px-2.5 py-1 rounded-md bg-sky-400/10 border border-sky-400/20">
            {about.sectionNumber} // ABOUT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {about.title}
          </h2>
        </div>

        {/* Bio Paragraphs */}
        <div className="rounded-2xl border border-white/10 bg-[#12121a] p-6 sm:p-8 mb-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {about.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* 4 Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {about.quickInfo.map((info, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-white/10 bg-[#12121a] card-hover-glow transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3">
                {infoIcons[idx] || <Globe className="w-5 h-5 text-sky-400" />}
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                {info.label}
              </span>
              <h3 className="text-sm font-semibold text-white mt-1">
                {info.value}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {info.subvalue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
