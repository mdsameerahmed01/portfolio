"use client";

import { personalData } from "@/data/content";
import { Briefcase, GraduationCap, Calendar, MapPin, FileText, ExternalLink, Award } from "lucide-react";

export default function Experience() {
  const { experience, resumeUrl } = personalData;

  return (
    <section id="experience" className="py-20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-sky-400 font-semibold px-2.5 py-1 rounded-md bg-sky-400/10 border border-sky-400/20">
            {experience.sectionNumber} // EXPERIENCE & EDUCATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {experience.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experience.work.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#12121a] p-6 card-hover-glow transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-xs font-semibold text-sky-300">
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mt-2">
                    {item.role}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 mb-4">
                    <span className="font-medium text-slate-300">{item.company}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* View Resume Button inside entry */}
                  {item.showResumeButton && (
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-sky-400/30 bg-sky-400/10 text-xs font-medium text-sky-300 hover:bg-sky-400/20 hover:border-sky-400/50 transition-all group"
                    >
                      <FileText className="w-3.5 h-3.5 text-sky-400" />
                      <span>View Resume</span>
                      <ExternalLink className="w-3 h-3 text-sky-400/70 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Certification */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Education & Certification
              </h3>
            </div>

            <div className="space-y-4">
              {experience.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#12121a] p-5 card-hover-glow transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5">
                      {edu.status}
                    </span>
                    <span className="text-xs text-sky-400 font-mono">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 mb-2 font-medium">
                    {edu.institution} &bull; <span className="text-slate-500">{edu.location}</span>
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
