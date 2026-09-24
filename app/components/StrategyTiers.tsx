"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function StrategyTiers() {
  const tiers = [
    {
      name: "Starter Yield",
      target: "Steady & Passive Growth",
      minDeposit: "$250",
      fee: "15% on profits",
      threshold: "5% Max Loss Cap",
      features: [
        "Automated passive rebalancing",
        "Weekly profit distributions",
        "24/7 instant withdrawal access",
      ],
      highlight: false,
    },
    {
      name: "Active Alpha",
      target: "Quant Momentum & Arbitrage",
      minDeposit: "$1,000",
      fee: "20% on profits",
      threshold: "8% Max Loss Cap",
      features: [
        "AI quantitative trading bots",
        "Multi-asset crypto & currency pairs",
        "Daily performance tracking",
      ],
      highlight: true,
    },
    {
      name: "Pro Wealth Tier",
      target: "High Alpha & Dedicated Management",
      minDeposit: "$5,000",
      fee: "25% on profits",
      threshold: "12% Max Loss Cap",
      features: [
        "Top-rated fund manager allocation",
        "Advanced risk-hedging strategies",
        "Priority concierge support",
      ],
      highlight: false,
    },
    {
      name: "Institutional Vault",
      target: "Custom Mandate & OTC Liquidity",
      minDeposit: "$25,000+",
      fee: "Negotiated custom",
      threshold: "Strict Custom Safeguards",
      features: [
        "Dedicated institutional desk",
        "Multi-signature custody isolation",
        "Direct fund manager consultations",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="strategies" className="w-full bg-[#141414] py-20 border-b border-[#27272a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#ededed] tracking-tight mb-3">
            Investment <span className="text-[#a500a3]">Strategies & Tiers</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            Choose a plan that matches your goals. All strategies are performance-based with managed risk thresholds.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                t.highlight
                  ? "bg-[#1c1c1c] border-2 border-[#a500a3] shadow-xl shadow-[#a500a3]/10"
                  : "bg-[#18181b] border border-[#27272a] hover:border-[#a500a3]/40"
              }`}
            >
              <div>
                {t.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#a500a3] text-white px-2.5 py-0.5 rounded-full inline-block mb-3">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-lg font-bold text-[#ededed] mb-1">{t.name}</h3>
                <p className="text-xs text-[#a1a1aa] mb-4">{t.target}</p>

                <div className="pb-4 mb-4 border-b border-[#27272a]">
                  <span className="text-[10px] uppercase font-semibold text-[#a1a1aa] block">Min Deposit</span>
                  <div className="text-2xl font-black text-[#ededed]">{t.minDeposit}</div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] text-[#a1a1aa] flex justify-between">
                    <span>Performance Fee:</span>
                    <span className="font-semibold text-[#ededed]">{t.fee}</span>
                  </div>
                  <div className="text-[11px] text-[#a1a1aa] flex justify-between">
                    <span>Loss Threshold:</span>
                    <span className="font-semibold text-emerald-400">{t.threshold}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 pt-4 border-t border-[#27272a]">
                  {t.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#ededed]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#a500a3] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://www.freemannfirms.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full h-10 rounded-[9px] text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  t.highlight
                    ? "btn-primary shadow-md shadow-[#a500a3]/20"
                    : "bg-[#27272a] hover:bg-[#3f3f46] text-[#ededed]"
                }`}
              >
                <span>Select Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Note Footer Banner */}
        <div className="p-4 rounded-xl bg-[#1c1c1c] border border-[#27272a] text-center max-w-3xl mx-auto text-xs text-[#a1a1aa] leading-relaxed">
          <span className="font-bold text-[#ededed] mr-1">Note:</span>
          All investment strategies are performance-based, giving you an open ROE (%) as your profits depend on your fund manager&apos;s performance, with a loss threshold in place to manage risks and minimize losses.
        </div>
      </div>
    </section>
  );
}
