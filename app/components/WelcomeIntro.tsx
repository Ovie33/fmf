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
      className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 pointer-events-none ${
        hasExplored
          ? "opacity-0 scale-95 translate-y-8"
          : "opacity-100 scale-100 translate-y-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200 font-mono text-xs mb-6 shadow-2xl backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
          <span>FREEMAN FIRMS ARCHITECTURAL BLUEPRINT</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 uppercase leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          WELCOME TO{" "}
          <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            FREEMAN FIRMS ECOSYSTEM
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-purple-100 max-w-xl mx-auto mb-8 font-normal leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
          A unified solar architecture engineered for high-speed compute, capital liquidity, autonomous AI subnets, and cross-chain scale.
        </p>

        <div className="pointer-events-auto">
          <button
            onClick={onExplore}
            className="px-9 py-4 rounded-2xl bg-white hover:bg-purple-100 text-purple-950 font-extrabold text-sm tracking-wider transition-all shadow-2xl shadow-purple-500/50 hover:scale-105 flex items-center gap-3 mx-auto uppercase group cursor-pointer"
          >
            <span>Explore Ecosystem</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
