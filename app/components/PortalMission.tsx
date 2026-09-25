"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export function PortalMission() {
  const beliefs = [
    { label: "Performance over speculation", desc: "Fund managers only profit when clients earn verifiable returns." },
    { label: "External Contract Custody", desc: "Assets are secured in dedicated external wallets created by the super admin during contracts, with real-time balance tracking for investment pools." },
    { label: "Direct participation", desc: "Peer-to-peer rails and 1-on-1 mentorship connecting real people directly to wealth." },
    { label: "Practical wealth systems", desc: "Universal trading and digital asset management engineered for lasting impact." },
  ];

  return (
    <section id="mission" className="w-full bg-[#fafafa] dark:bg-[#0c0c0e] px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-16 md:py-20 border-b border-[#e4e4e7] dark:border-[#27272a] transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 sm:gap-10 xl:gap-14 2xl:gap-20">
        {/* Left Column on Desktop / Top Section on Tablet & Mobile */}
        <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left w-full max-w-3xl xl:max-w-xl 2xl:max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 border border-[#a500a3]/20 dark:border-[#a500a3]/40 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a500a3] dark:text-[#d600b1] mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>About Freemann Firms</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-100 dark:to-zinc-400 mb-3 sm:mb-5">
            Our Mission & Philosophy
          </h2>

          {/* Narrative Paragraphs */}
          <div className="flex flex-col gap-3.5 sm:gap-4 text-sm sm:text-base md:text-base lg:text-lg text-[#52525b] dark:text-[#d4d4d8] leading-relaxed mb-4 sm:mb-6">
            <p>
              Freemann Firms is an integrated financial technology ecosystem focused on building decentralized wealth management, peer-to-peer trading infrastructure, expert mentorship, and universal commerce.
            </p>
            <p>
              We believe modern wealth is not created through hype or speculation. It is built through structure, transparent alignment, verifiable execution, and systems that work for the investor.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#71717a] dark:text-[#a1a1aa] italic pt-2 sm:pt-3 border-t border-[#e4e4e7] dark:border-[#27272a] w-full">
            Rooted in integrity. Backed by crypto innovation. Built for long-term generational wealth.
          </p>
        </div>

        {/* Right Column on Desktop (Side Boxes) / Bottom Section on Tablet & Mobile (Centered Grid) */}
        <div className="w-full max-w-3xl xl:max-w-none xl:w-[460px] 2xl:w-[520px] shrink-0 flex flex-col items-center xl:items-start gap-3 pt-2 xl:pt-0">
          <div className="flex items-center justify-center xl:justify-start gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#a500a3]" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#18181b] dark:text-white">
              What We Believe
            </p>
          </div>

          {/* 1 column on phone, 2 columns on tablet, 1 column stacked on large desktop side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 sm:gap-3.5 w-full text-left">
            {beliefs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#121215] border border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3]/60 dark:hover:border-[#a500a3]/60 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#a500a3]/10 dark:bg-[#a500a3]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#a500a3] dark:text-[#d600b1]" />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <span className="text-sm sm:text-base font-bold text-[#18181b] dark:text-white group-hover:text-[#a500a3] dark:group-hover:text-[#d600b1] transition-colors">
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
      </div>
    </section>
  );
}
