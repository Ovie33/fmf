"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export function PortalMission() {
  const beliefs = [
    { label: "Performance over speculation", desc: "Fund managers only profit when clients earn verifiable returns." },
    { label: "100% Client custody", desc: "Multi-signature segregated security with strict stop-loss caps and zero rehypothecation." },
    { label: "Direct participation", desc: "Peer-to-peer rails and 1-on-1 mentorship connecting real people directly to wealth." },
    { label: "Practical wealth systems", desc: "Universal trading and digital asset management engineered for lasting impact." },
  ];

  return (
    <section id="mission" className="w-full bg-[#fafafa] dark:bg-[#0c0c0e] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-[#e4e4e7] dark:border-[#27272a] transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-3 lg:w-[380px] shrink-0">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a500a3] dark:text-[#d600b1]">
            <Sparkles className="w-4 h-4" />
            <span>About Freemann Firms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400">
            Our Mission & Philosophy
          </h2>
          <p className="text-sm text-[#71717a] dark:text-[#a1a1aa] leading-relaxed hidden lg:block mt-2">
            Engineered to empower individuals and businesses through interconnected financial solutions, transparent returns, and uncompromising asset sovereignty.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 flex-1">
          <p className="text-base sm:text-lg text-[#3f3f46] dark:text-[#d4d4d8] leading-relaxed">
            Freemann Firms is an integrated financial technology ecosystem focused on building decentralized wealth management, peer-to-peer trading infrastructure, expert mentorship, and universal commerce.
          </p>

          <p className="text-base sm:text-lg text-[#3f3f46] dark:text-[#d4d4d8] leading-relaxed">
            We believe modern wealth is not created through hype or speculation. It is built through structure, transparent alignment, verifiable execution, and systems that work for the investor.
          </p>

          {/* Core Beliefs Checklist */}
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#18181b] dark:text-white">
              We believe in:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {beliefs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-[#141418] border border-[#e4e4e7] dark:border-[#27272a] shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#a500a3] dark:text-[#d600b1] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-[#18181b] dark:text-white">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#71717a] dark:text-[#a1a1aa] leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#71717a] dark:text-[#a1a1aa] italic pt-2">
            Rooted in integrity. Backed by crypto innovation. Built for long-term generational wealth.
          </p>
        </div>
      </div>
    </section>
  );
}
