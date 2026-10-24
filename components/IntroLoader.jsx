"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress interval up to 100% over ~1.3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDone(true);
        if (onComplete) onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] text-slate-100 p-6 select-none"
        >
          {/* Subtle background ambient blur */}
          <div className="absolute w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative w-full max-w-sm flex flex-col items-center text-center">
            {/* Terminal pill indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-slate-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono">sameer.dev / init</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Mohammed Sameer Ahmed
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mb-8">
              Frontend Developer &bull; Surat, IN
            </p>

            {/* Progress bar */}
            <div className="w-full bg-white/[0.06] border border-white/10 h-1.5 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            <div className="w-full flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Loading workspace...</span>
              <span className="text-sky-400 font-semibold">{progress}%</span>
            </div>

            {/* Skip button */}
            <button
              onClick={handleSkip}
              className="mt-8 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-slate-400 hover:text-white hover:border-sky-400/50 hover:bg-white/[0.06] transition-all cursor-pointer group"
            >
              <span>Skip intro</span>
              <span className="text-[10px] px-1 py-0.5 rounded bg-white/10 text-slate-400">Esc</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
