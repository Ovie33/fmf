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
    <section id="mission" className="w-full bg-[#fafafa] dark:bg-[#0c0c0e] px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-14 md:py-20 border-b border-[#e4e4e7] dark:border-[#27272a] transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge & Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a500a3] dark:text-[#d600b1] mb-2 sm:mb-3">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>About Freemann Firms</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-100 dark:to-zinc-400 mb-3 sm:mb-5">
          Our Mission & Philosophy
        </h2>

        {/* Narrative Paragraphs */}
        <div className="flex flex-col gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-[#3f3f46] dark:text-[#d4d4d8] leading-relaxed mb-6 sm:mb-8">
          <p>
            Freemann Firms is an integrated financial technology ecosystem focused on building decentralized wealth management, peer-to-peer trading infrastructure, expert mentorship, and universal commerce.
          </p>
          <p>
            We believe modern wealth is not created through hype or speculation. It is built through structure, transparent alignment, verifiable execution, and systems that work for the investor.
          </p>
        </div>

        {/* Core Beliefs Checklist */}
        <div className="w-full flex flex-col items-center gap-3 pt-2">
          <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#18181b] dark:text-white">
            We believe in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full text-left">
            {beliefs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141418] border border-[#e4e4e7] dark:border-[#27272a] shadow-xs hover:border-[#a500a3]/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#a500a3] dark:text-[#d600b1] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-base font-bold text-[#18181b] dark:text-white">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#71717a] dark:text-[#a1a1aa] leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#71717a] dark:text-[#a1a1aa] italic pt-6">
          Rooted in integrity. Backed by crypto innovation. Built for long-term generational wealth.
        </p>
      </div>
    </section>
  );
}
