"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function PortalArchitecture() {
  const pillars = [
    {
      img: "/images/growth.png",
      title: "1. Building Wealth Made Easy",
      desc: "Grow your Capital through our performance-based investment pools. One-on-one mentorship through Freemann Firms Academy. Trade your digital assets directly through our P2P Merchant System.",
    },
    {
      img: "/images/fee.png",
      title: "2. You Win. We Earn.",
      highlight: "Zero hidden fees.",
      desc: "Fund managers only profit when you profit. Verifiable returns. Strict stop-loss caps. Transparent, performance-aligned incentives.",
    },
    {
      img: "/images/secure.png",
      title: "3. Your Assets. Protected.",
      desc: "Multi-signature custody. Principal fully protected we charge AUM fees on investments and performance fees on your profits only. Full access to your funds when investment cycles end.",
    },
  ];

  return (
    <section id="architecture" className="w-full bg-white dark:bg-[#0c0c0e] py-12 sm:py-18 md:py-24 border-t border-b border-[#e4e4e7] dark:border-[#27272a] px-4 sm:px-6 md:px-10 lg:px-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 border border-[#a500a3]/20 dark:border-[#a500a3]/40 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a500a3] dark:text-[#d600b1] mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-100 dark:to-zinc-400 tracking-tight leading-tight mb-3 sm:mb-4">
            Why the Freemann Firms Ecosystem?
          </h2>
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#52525b] dark:text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
            Engineered from the ground up to give investors total control, transparent returns, and uncompromising asset security across all digital financial services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121215] border-2 border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3]/70 dark:hover:border-[#a500a3] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 shadow-[0_8px_25px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_35px_-8px_rgba(165,0,163,0.15)] group relative overflow-hidden"
            >
              {/* Refined Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a500a3] via-amber-300/80 to-[#680097]" />

              <div className="relative h-16 w-16 mb-4 rounded-2xl bg-[#faf5ff] dark:bg-[#18181b] border border-[#e9d5ff]/60 dark:border-[#27272a] p-3 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#18181b] dark:text-white mb-2 group-hover:text-[#a500a3] dark:group-hover:text-[#d600b1] transition-colors">
                {p.title}
              </h3>
              {p.highlight && (
                <div className="inline-block px-3 py-0.5 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 border border-[#a500a3]/20 dark:border-[#a500a3]/40 text-[#a500a3] dark:text-[#d600b1] font-bold text-xs mb-2">
                  {p.highlight}
                </div>
              )}
              <p className="text-sm text-[#52525b] dark:text-[#a1a1aa] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
