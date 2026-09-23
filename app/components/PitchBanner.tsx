"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

interface PitchBannerProps {
  hasExplored: boolean;
  onResetIntro: () => void;
}

export function PitchBanner({ hasExplored, onResetIntro }: PitchBannerProps) {
  return (
    <div className="w-full bg-[#0a0e18] border-b border-cyan-500/20 text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-cyan-400 font-bold tracking-wider text-[11px] sm:text-xs">
            [SOLAR SYSTEM // ECOSYSTEM ARCHITECTURE]
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          {hasExplored ? (
            <button
              onClick={onResetIntro}
              className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Return to Intro</span>
            </button>
          ) : (
            <span className="text-zinc-500">CLICK EXPLORE TO ZOOM INTO SOLAR VIEW</span>
          )}
        </div>
      </div>
    </div>
  );
}
