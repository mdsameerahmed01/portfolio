"use client";

import { personalData } from "@/data/content";
import { Layout, Terminal, Server, ShoppingBag, Users, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const { skills } = personalData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "layout":
        return <Layout className="w-5 h-5 text-sky-400" />;
      case "code":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "server":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "shopping-bag":
        return <ShoppingBag className="w-5 h-5 text-indigo-400" />;
      case "users":
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Layout className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sky-400 font-semibold px-2.5 py-1 rounded-md bg-sky-400/10 border border-sky-400/20">
              {skills.sectionNumber} // SKILLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {skills.title}
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Categorized technical & professional toolset
          </span>
        </div>

        {/* Categories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-white/10 bg-[#12121a] p-6 card-hover-glow transition-all ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="text-sm font-semibold text-slate-200">
                  {cat.name}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((item, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-slate-300 hover:text-white hover:border-sky-400/40 hover:bg-white/[0.06] transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-sky-400/70" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
