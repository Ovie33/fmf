"use client";

import React from "react";
import Image from "next/image";

export function PortalArchitecture() {
  const pillars = [
    {
      img: "/images/fee.png",
      title: "1. Unified Identity & Access",
      desc: "One secure account unlocks all Freemann Firms services, from crypto wealth management to universal marketplace and P2P trading.",
    },
    {
      img: "/images/growth.png",
      title: "2. Performance-First Yield",
      desc: "Zero hidden management fees. Fund managers only earn when you make verifiable profits, backed by strict stop-loss caps.",
    },
    {
      img: "/images/secure.png",
      title: "3. 100% Client Asset Custody",
      desc: "Segregated multi-signature storage with zero rehypothecation. Your principal remains fully protected and withdrawable 24/7.",
    },
  ];

  return (
    <section id="architecture" className="w-full bg-white py-12 sm:py-16 border-t border-b border-[#e4e4e7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18181b] mb-3">
            Why the <span className="text-[#a500a3]">Freemann Firms Ecosystem</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#52525b] leading-relaxed max-w-2xl mx-auto">
            Engineered from the ground up to give investors total control, transparent returns, and uncompromising asset security across all digital financial services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#e4e4e7] hover:border-[#a500a3]/70 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 shadow-[0_8px_25px_rgb(0,0,0,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(165,0,163,0.15)] group relative overflow-hidden"
            >
              {/* Refined Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a500a3] via-amber-300/80 to-[#680097]" />

              <div className="relative h-16 w-16 mb-4 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff]/60 p-3 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#18181b] mb-2 group-hover:text-[#a500a3] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[#52525b] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
