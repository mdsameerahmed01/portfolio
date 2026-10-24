"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/content";
import { Menu, X, FileText, Clock, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Live IST Clock (Indian Standard Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for active section and background style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = personalData.navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-2 group text-white font-bold tracking-tight text-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#38bdf8]" />
          <span>{personalData.shortName}</span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 font-mono font-normal border border-white/10">
            dev
          </span>
        </Link>

        {/* Live IST clock (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-slate-400 font-mono">
          <Clock className="w-3.5 h-3.5 text-sky-400" />
          <span>SURAT, IN</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-slate-200">{istTime || "Loading..."}</span>
          <span className="text-[10px] text-sky-400 font-semibold px-1 py-0.2 rounded bg-sky-400/10">
            IST
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {personalData.navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.number}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                }`}
              >
                <span className="font-mono text-sky-400/80 mr-1.5 text-[11px]">{link.number}</span>
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-sky-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-200 hover:text-white hover:border-sky-400/50 hover:bg-sky-400/10 transition-all group"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 transition-all">
          {/* Mobile Clock */}
          <div className="flex items-center justify-between py-2 px-3 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-slate-400 font-mono mb-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              SURAT, IN (IST)
            </span>
            <span className="text-slate-200 font-semibold">{istTime}</span>
          </div>

          <nav className="flex flex-col gap-1">
            {personalData.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.number}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/[0.08] text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs text-sky-400">{link.number}</span>
                    <span>{link.label}</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-2 border-t border-white/10">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-sky-400/30 bg-sky-400/10 text-sm font-medium text-sky-300 hover:bg-sky-400/20 transition-all"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
