"use client";

import React from "react";
import {
  TrendingUp,
  Cpu,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function EcosystemGrid() {
  const products = [
    {
      id: "01",
      icon: TrendingUp,
      title: "Freemann Wealth & Fund Management",
      badge: "CORE PRODUCT",
      desc: "Performance-driven fund management where expert managers only profit when you win. Complete open ROE with managed loss thresholds.",
      points: [
        "Performance-based fees (no fixed ROE)",
        "Managed risk & stop-loss thresholds",
        "Transparent real-time portfolio dashboard",
      ],
      linkText: "Explore Investment Portal",
      linkUrl: "https://freeman-firms.vercel.app/register",
    },
    {
      id: "02",
      icon: Cpu,
      title: "Freemann AI Quant & Trading Engine",
      badge: "AI AUTOMATION",
      desc: "Autonomous quantitative execution bots scanning global markets 24/7 for arbitrage, momentum, and delta-neutral yield opportunities.",
      points: [
        "Algorithmic trade execution & rebalancing",
        "Sub-second market liquidity capture",
        "Automated risk mitigation protocols",
      ],
      linkText: "View Trading Specs",
      linkUrl: "https://freeman-firms.vercel.app",
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Freemann Institutional Custody",
      badge: "SECURITY",
      desc: "Multi-signature cold storage and cryptographic vault infrastructure ensuring your capital is safeguarded at all times.",
      points: [
        "100% segregated client asset custody",
        "Multi-signature authorization quorum",
        "Instant crypto and cash withdrawal rails",
      ],
      linkText: "Inspect Custody Standards",
      linkUrl: "https://freeman-firms.vercel.app/legal/client-asset-custody",
    },
    {
      id: "04",
      icon: Globe2,
      title: "Freemann Global Pay & Settlement",
      badge: "PAYMENTS",
      desc: "Frictionless international remittance and OTC liquidity bridge connecting fiat currencies with digital asset reserves.",
      points: [
        "Zero-delay cross-border settlement",
        "Multi-currency fiat & crypto on-ramps",
        "Institutional OTC execution desk",
      ],
      linkText: "Learn About Settlement",
      linkUrl: "https://freeman-firms.vercel.app",
    },
  ];

  return (
    <section id="ecosystem" className="w-full bg-[#141414] py-20 border-b border-[#27272a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#ededed] tracking-tight mb-3">
            The Freemann Firms <span className="text-[#a500a3]">Product Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            A cohesive suite of financial technology products designed to maximize wealth generation, automate trading, and secure digital assets.
          </p>
        </div>

        {/* 2x2 Product Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-[#1c1c1c] border-2 border-[#27272a] hover:border-[#a500a3]/50 rounded-2xl p-7 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#a500a3]/10 border border-[#a500a3]/30 flex items-center justify-center text-[#a500a3] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#a500a3]/10 text-[#d600b1] px-2.5 py-1 rounded-[6px] border border-[#a500a3]/30">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#ededed] mb-2 group-hover:text-[#a500a3] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#27272a]">
                    {p.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#ededed]">
                        <CheckCircle2 className="w-4 h-4 text-[#a500a3] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={p.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-4 border-t border-[#27272a] flex items-center justify-between text-xs font-semibold text-[#a500a3] hover:text-[#d600b1] transition-colors"
                >
                  <span>{p.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
