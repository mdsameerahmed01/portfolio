"use client";

import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {/* Intro Loader (1-2 seconds with skip button) */}
      <IntroLoader onComplete={() => setIntroFinished(true)} />

      {/* Main Portfolio Layout */}
      <div className="relative min-h-screen flex flex-col bg-[#0a0a0f] text-[#f1f5f9] selection:bg-sky-400 selection:text-black">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <Navbar />

        <main className="relative z-10 flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
