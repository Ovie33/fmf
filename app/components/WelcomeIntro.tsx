"use client";

import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";

interface WelcomeIntroProps {
  hasExplored: boolean;
  onExplore: () => void;
}

export function WelcomeIntro({ hasExplored, onExplore }: WelcomeIntroProps) {
  return (
    <div
      className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${
        hasExplored
          ? "opacity-0 scale-95 translate-y-8 pointer-events-none"
          : "opacity-100 scale-100 translate-y-0 pointer-events-none"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs mb-6 shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>INTERACTIVE SKELETAL BLUEPRINT</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase leading-tight drop-shadow-2xl">
          WELCOME TO{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
            ECOSYSTEM
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-md">
          A unified solar architecture for high-speed compute, decentralized liquidity, and autonomous AI agents.
        </p>

        <div className="pointer-events-auto">
          <button
            onClick={onExplore}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 text-black font-extrabold text-base tracking-wider transition-all shadow-2xl shadow-cyan-500/40 hover:scale-105 hover:shadow-cyan-400/60 flex items-center gap-3 mx-auto uppercase group cursor-pointer"
          >
            <span>Explore</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
