"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  Send,
  X,
} from "lucide-react";

export function PortalServices() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setEmailSubmitted(true);
      setTimeout(() => {
        setEmailSubmitted(false);
        setWaitlistEmail("");
        setWaitlistModalOpen(false);
      }, 2500);
    }
  };

  const products = [
    {
      id: "investments",
      number: "01",
      title: "Freemann Firms Investments",
      tagline: "Fund management with unlimited ROE, powered by CRYPTO",
      badge: "LIVE",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      dotColor: "bg-emerald-500",
      desc: "Connect directly with expert fund managers who manage and grow your capital. Only pay performance fees on actual profits with strict loss threshold in place.",
      illustration: "/images/service-investments.jpg",
      illustrationDark: "/images/service-investments-dark-v2.jpg",
      link: "https://www.freemannfirms.com",
      isLive: true,
      metrics: [
        { label: "Fee Model", value: "Performance" },
        { label: "Withdrawals", value: "24/7" },
        { label: "Risk Control", value: "Loss threshold" },
      ],
      features: [
        "Expert Fund Managers Trading for you",
        "Open ROE Calculated strictly on performance",
        "Deposit & Withdraw with Ease via Crypto",
      ],
      actionType: "link",
      actionText: "Launch Investment App",
    },
    {
      id: "academy",
      number: "02",
      title: "Freemann Firms Academy",
      tagline: "Master profitable Trading with elite mentorship",
      badge: "ENROLLMENT OPEN",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      dotColor: "bg-blue-500",
      desc: "Learn high probability Forex & Crypto Trading Strategies directly from Expert Market analysts. We connect with you directly on WhatsApp for a personalized trading experience.",
      illustration: "/images/service-academy.jpg",
      illustrationDark: "/images/service-academy-dark.jpg",
      isLive: true,
      metrics: [
        { label: "Mentorship", value: "1 on 1" },
        { label: "Channels", value: "WhatsApp" },
        { label: "Cost", value: "₦25k per month" },
      ],
      features: [
        "Specialized curriculum in complex financial markets",
        "Advanced Structural Mastery of volatile FX Environments",
        "Direct mentorship and Proprietary Edge setup",
      ],
      actionType: "academy_contact",
      actionText: "CONTACT VIA WHATSAPP",
    },
    {
      id: "p2p",
      number: "03",
      title: "Freemann Firms P2P",
      tagline: "Direct crypto and fiat exchange via peer-to-peer with no hidden fees",
      badge: "ACTIVE",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      dotColor: "bg-[#a500a3]",
      desc: "Buy & Sell Cryptocurrencies directly via WhatsApp, trade Giftcards easily.",
      illustration: "/images/service-p2p.jpg",
      illustrationDark: "/images/service-p2p-dark-v2.jpg",
      isLive: true,
      metrics: [
        { label: "Service Fees", value: "0.7% on withdrawals" },
        { label: "Settlement", value: "Instant P2P" },
        { label: "Support", value: "WhatsApp" },
      ],
      features: [
        "Direct trading with merchant with full fund protection",
        "Multiple Trading options (Crypto, Giftcards)",
        "Trade bits or bulk volumes easily via WhatsApp",
      ],
      actionType: "p2p_whatsapp_only",
      actionText: "CONTACT MERCHANT on WhatsApp",
    },
    {
      id: "market",
      number: "04",
      title: "Freemann Firms Online Market",
      tagline: "The universal marketplace where anything and everything can be traded",
      badge: "COMING SOON",
      badgeColor: "bg-[#a500a3]/10 text-[#a500a3] border-[#a500a3]/30",
      dotColor: "bg-[#a500a3]",
      desc: "A next-generation universal marketplace and exchange. Trade physical goods, digital assets, commodities, and professional services with escrow-backed protection and instant settlement.",
      illustration: "/images/service-market.jpg",
      illustrationDark: "/images/service-market-dark.jpg",
      isLive: false,
      metrics: [
        { label: "Asset Scope", value: "Universal" },
        { label: "Settlement", value: "Escrow-Backed" },
        { label: "Status", value: "Coming Soon" },
      ],
      features: [
        "Trade anything from physical products to digital commodities",
        "Automated cryptographic escrow protects buyer and seller",
        "Zero-friction payment integration across fiat and crypto",
      ],
      actionType: "waitlist",
      actionText: "Join Early Access Waitlist",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#f8fafc] dark:bg-[#09090b] py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-b border-[#e4e4e7] dark:border-[#27272a] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header in MadeInBlacc Style */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 border border-[#a500a3]/20 dark:border-[#a500a3]/40 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a500a3] dark:text-[#d600b1] mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>What We Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-100 dark:to-zinc-400 tracking-tight leading-tight mb-3 sm:mb-4">
            Product & Platform Suites
          </h2>
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#52525b] dark:text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
            An interconnected ecosystem of decentralized fund management, direct peer-to-peer liquidity, professional trading mentorship, and universal online commerce.
          </p>
        </div>

        {/* 4 Products in 2x2 Grid (MadeInBlacc style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-[#121215] border-2 border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3]/70 dark:hover:border-[#a500a3] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(165,0,163,0.18)] group relative overflow-hidden"
            >
              {/* Refined Top Gradient Line with Subtle Golden Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a500a3] via-amber-300/80 to-[#680097]" />

              {/* Ambient Soft Glow Effect */}
              <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-[#a500a3]/5 dark:bg-[#a500a3]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col flex-1 relative z-10">
                {/* 1. Top Centered Standalone Illustration with Ambient Glow Halo */}
                <div className="w-full flex items-center justify-center mb-4 sm:mb-5 pt-1">
                  <div className="relative w-full max-w-[170px] sm:max-w-[220px] md:max-w-[260px] aspect-square rounded-2xl overflow-hidden group/img">
                    {/* Glowing Halo Ring */}
                    <div className="absolute inset-2 bg-gradient-to-tr from-[#a500a3]/15 via-[#680097]/15 to-amber-400/10 dark:from-[#a500a3]/30 dark:via-[#680097]/20 dark:to-transparent rounded-full blur-2xl -z-10 group-hover/img:scale-115 transition-transform duration-500 pointer-events-none" />

                    {/* Light Mode Illustration with seamless blend */}
                    <div className="relative w-full h-full block dark:hidden">
                      <Image
                        src={p.illustration}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 170px, (max-width: 768px) 220px, 260px"
                        className="object-contain mix-blend-multiply group-hover/img:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Dark Mode Illustration */}
                    <div className="relative w-full h-full hidden dark:block">
                      <Image
                        src={p.illustrationDark}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 170px, (max-width: 768px) 220px, 260px"
                        className="object-contain rounded-2xl group-hover/img:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Status Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#a500a3]/10 dark:bg-[#a500a3]/20 text-[10px] sm:text-[11px] font-mono font-extrabold text-[#a500a3] dark:text-[#d600b1] border border-amber-400/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>SERVICE {p.number}</span>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${p.badgeColor}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dotColor} ${p.isLive ? "animate-pulse" : ""}`} />
                    {p.badge}
                  </span>
                </div>

                {/* 3. Title & Tagline */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#18181b] dark:text-white group-hover:text-[#a500a3] dark:group-hover:text-[#d600b1] transition-colors mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#a500a3] dark:text-[#d600b1] mb-2 sm:mb-3 leading-snug">
                  {p.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#52525b] dark:text-[#a1a1aa] leading-relaxed mb-3.5 sm:mb-4">
                  {p.desc}
                </p>

                {/* 4. Metric Ribbon */}
                <div className="grid grid-cols-3 divide-x divide-[#e4e4e7] dark:divide-[#27272a] p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#fafafa] via-white to-[#fafafa] dark:from-[#18181b] dark:via-[#1e1e24] dark:to-[#18181b] border border-[#e4e4e7] dark:border-[#27272a] shadow-xs mb-3.5 sm:mb-4">
                  {p.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="px-1 sm:px-2 text-center first:pl-0 last:pr-0 overflow-hidden">
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase font-semibold text-[#71717a] dark:text-[#a1a1aa] block truncate">
                        {m.label}
                      </span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#18181b] dark:text-white truncate block mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. Features Bullet List */}
                <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 flex-1">
                  {p.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#3f3f46] dark:text-[#d4d4d8]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a500a3] dark:text-[#d600b1] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Action Buttons - Bottom Pill Style */}
              <div className="pt-2.5 sm:pt-3 border-t border-[#e4e4e7] dark:border-[#27272a] relative z-10 w-full">
                {p.actionType === "link" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a500a3] hover:bg-[#850083] text-white inline-flex items-center justify-center h-10 sm:h-11 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-[#a500a3]/25 hover:shadow-lg hover:shadow-[#a500a3]/35 transition-all w-full active:scale-95 whitespace-nowrap"
                  >
                    <span>{p.actionText}</span>
                  </a>
                )}

                {p.actionType === "p2p_whatsapp_only" && (
                  <a
                    href="https://wa.me/2348105347598?text=Hello%20Freemann%20Firms%20P2P%2C%20I%20would%20like%20to%20trade%20Crypto%20%2F%20Giftcards."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-1.5 sm:gap-2 h-10 sm:h-11 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all w-full active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Trade on WhatsApp</span>
                  </a>
                )}

                {p.actionType === "academy_contact" && (
                  <div className="flex flex-row items-center gap-2 sm:gap-2.5 w-full">
                    <a
                      href="https://wa.me/2348105347598?text=Hello%20Freemann%20Firms%20Academy%2C%20I%20would%20like%20to%20enroll%20in%20the%20Academy."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-1.5 h-10 sm:h-11 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all flex-1 active:scale-95 whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="mailto:support@freemannfirom.com?subject=Academy%20Enrollment%20Inquiry"
                      className="bg-white dark:bg-[#141418] border border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] text-[#18181b] dark:text-[#f4f4f5] hover:text-[#a500a3] dark:hover:text-[#d600b1] inline-flex items-center justify-center gap-1.5 h-10 sm:h-11 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-bold shadow-xs transition-all flex-1 active:scale-95 whitespace-nowrap"
                    >
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a500a3] dark:text-[#d600b1] shrink-0" />
                      <span>Mail</span>
                    </a>
                  </div>
                )}

                {p.actionType === "waitlist" && (
                  <button
                    onClick={() => setWaitlistModalOpen(true)}
                    className="bg-[#a500a3] hover:bg-[#850083] text-white inline-flex items-center justify-center gap-1.5 sm:gap-2 h-10 sm:h-11 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-[#a500a3]/25 hover:shadow-lg hover:shadow-[#a500a3]/35 w-full cursor-pointer active:scale-95 whitespace-nowrap"
                  >
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{p.actionText}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal 1: Online Market Waitlist Modal */}
      {waitlistModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="bg-white dark:bg-[#121215] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#e4e4e7] dark:border-[#27272a] relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setWaitlistModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#71717a] dark:text-[#a1a1aa] hover:text-[#18181b] dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#a500a3]/10 dark:bg-[#a500a3]/20 text-[#a500a3] dark:text-[#d600b1] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#18181b] dark:text-white">
                  Freemann Firms Online Market
                </h3>
                <span className="text-[10px] font-bold uppercase bg-[#a500a3]/10 dark:bg-[#a500a3]/20 text-[#a500a3] dark:text-[#d600b1] px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              </div>
            </div>

            <p className="text-xs text-[#52525b] dark:text-[#a1a1aa] leading-relaxed mb-5">
              Be the first to access the universal marketplace where anything and everything can be traded. Enter your email to receive private beta access:
            </p>

            {emailSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-center text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are on the priority waitlist! We will notify you at launch.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="w-full h-11 px-4 rounded-[9px] border border-[#e4e4e7] dark:border-[#27272a] focus:border-[#a500a3] dark:focus:border-[#a500a3] focus:outline-hidden text-sm bg-white dark:bg-[#18181b] text-[#18181b] dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full h-11 rounded-[9px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#a500a3]/20 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Notify Me at Launch</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
