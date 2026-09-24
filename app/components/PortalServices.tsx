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
      link: "https://freeman-firms.vercel.app",
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
    <section id="services" className="w-full bg-[#f8fafc] py-12 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e4e4e7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a500a3]/10 border border-[#a500a3]/20 text-[#a500a3] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4" />
            <span>ECOSYSTEM PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight mb-3 sm:mb-4">
            The Freemann Firms <span className="text-[#a500a3]">Products</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#52525b] leading-relaxed max-w-2xl mx-auto">
            A unified suite of financial technology solutions built for investors, traders, businesses, and learners.
          </p>
        </div>

        {/* 4 Products List in Exact Order */}
        <div className="space-y-6 sm:space-y-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border-2 border-[#e4e4e7] hover:border-[#a500a3]/70 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(165,0,163,0.18)] group relative overflow-hidden"
            >
              {/* Refined Top Gradient Line with Subtle Golden Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a500a3] via-amber-300/80 to-[#680097]" />

              {/* Ambient Soft Glow Effect */}
              <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-[#a500a3]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
                {/* Left Column: Product Details */}
                <div className="flex-1 w-full">
                  {/* Top Status Badges - Purple with Gold Accent */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#a500a3]/10 text-xs font-mono font-extrabold text-[#a500a3] border border-amber-400/50 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>SERVICE {p.number}</span>
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-xs ${p.badgeColor}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${p.dotColor} ${p.isLive ? "animate-pulse" : ""}`} />
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18181b] group-hover:text-[#a500a3] transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#a500a3] mb-3 sm:mb-4 leading-snug">
                    {p.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-[#52525b] leading-relaxed mb-4 sm:mb-6">
                    {p.desc}
                  </p>

                  {/* Metric Ribbon - Clean & Sleek */}
                  <div className="grid grid-cols-3 divide-x divide-[#e4e4e7] p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#fafafa] via-white to-[#fafafa] border border-[#e4e4e7] shadow-xs mb-5 sm:mb-6">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="px-2 sm:px-3 text-center sm:text-left first:pl-0 last:pr-0">
                        <span className="text-[10px] sm:text-xs uppercase font-semibold text-[#71717a] block truncate">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base font-bold text-[#18181b] truncate block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features Bullet Points */}
                  <ul className="space-y-2.5 mb-6 sm:mb-8">
                    {p.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-[#3f3f46]"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#a500a3] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons - Mobile Full Width */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                    {p.actionType === "link" && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[9px] text-sm sm:text-base font-semibold shadow-md shadow-[#a500a3]/20 hover:shadow-lg hover:shadow-[#a500a3]/30 w-full sm:w-auto active:scale-98"
                      >
                        <span>{p.actionText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {p.actionType === "p2p_whatsapp_only" && (
                      <a
                        href="https://wa.me/2348105347598?text=Hello%20Freemann%20Firms%20P2P%2C%20I%20would%20like%20to%20trade%20Crypto%20%2F%20Giftcards."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[9px] text-sm sm:text-base font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all w-full sm:w-auto active:scale-98"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>CONTACT MERCHANT on WhatsApp</span>
                      </a>
                    )}

                    {p.actionType === "academy_contact" && (
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                        <a
                          href="https://wa.me/2348105347598?text=Hello%20Freemann%20Firms%20Academy%2C%20I%20would%20like%20to%20enroll%20in%20the%20Academy."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[9px] text-sm sm:text-base font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all w-full sm:w-auto active:scale-98"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>CONTACT VIA WHATSAPP</span>
                        </a>

                        <a
                          href="mailto:support@freemannfirms.com?subject=Academy%20Enrollment%20Inquiry"
                          className="bg-white border border-[#e4e4e7] hover:border-[#a500a3] text-[#18181b] hover:text-[#a500a3] inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[9px] text-sm sm:text-base font-semibold shadow-xs transition-all w-full sm:w-auto active:scale-98"
                        >
                          <Mail className="w-4 h-4 text-[#a500a3]" />
                          <span>REACH OUT VIA MAIL</span>
                        </a>
                      </div>
                    )}

                    {p.actionType === "waitlist" && (
                      <button
                        onClick={() => setWaitlistModalOpen(true)}
                        className="btn-primary inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[9px] text-sm sm:text-base font-semibold shadow-md shadow-[#a500a3]/20 hover:shadow-lg hover:shadow-[#a500a3]/30 w-full sm:w-auto cursor-pointer active:scale-98"
                      >
                        <Clock className="w-4 h-4" />
                        <span>{p.actionText}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: 2D Standalone Illustration */}
                <div className="w-full lg:w-[360px] xl:w-[400px] flex items-center justify-center shrink-0 mb-4 lg:mb-0">
                  <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square">
                    <Image
                      src={p.illustration}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal 1: Online Market Waitlist Modal */}
      {waitlistModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#e4e4e7] relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setWaitlistModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#71717a] hover:text-[#18181b] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#a500a3]/10 text-[#a500a3] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#18181b]">
                  Freemann Firms Online Market
                </h3>
                <span className="text-[10px] font-bold uppercase bg-[#a500a3]/10 text-[#a500a3] px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              </div>
            </div>

            <p className="text-xs text-[#52525b] leading-relaxed mb-5">
              Be the first to access the universal marketplace where anything and everything can be traded. Enter your email to receive private beta access:
            </p>

            {emailSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center text-xs font-semibold flex items-center justify-center gap-2">
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
                    className="w-full h-11 px-4 rounded-[9px] border border-[#e4e4e7] focus:border-[#a500a3] focus:outline-hidden text-sm bg-white text-[#18181b]"
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
