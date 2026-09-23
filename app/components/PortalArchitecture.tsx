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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] border border-[#e4e4e7] hover:border-[#a500a3]/50 rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:shadow-md group"
            >
              <div className="relative h-14 w-14 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#18181b] mb-2">
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
