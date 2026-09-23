"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  ShoppingBag,
  GraduationCap,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  Send,
  X,
  Users2,
} from "lucide-react";

export function PortalServices() {
  const [academyModalOpen, setAcademyModalOpen] = useState(false);
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
      title: "Freemann Investment Platform",
      tagline: "Crypto-powered fund management with open ROE",
      badge: "LIVE PRODUCT",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      dotColor: "bg-emerald-500",
      desc: "Connect directly with expert fund managers who manage and grow your capital. Only pay performance fees on actual profits with strict stop-loss caps in place.",
      illustration: "/images/plan.png",
      link: "https://freeman-firms.vercel.app",
      isLive: true,
      metrics: [
        { label: "Fee Model", value: "Performance" },
        { label: "Withdrawals", value: "Instant 24/7" },
        { label: "Risk Control", value: "Loss Capped" },
      ],
      features: [
        "Vetted expert fund managers trading on your behalf",
        "Open ROE (%) calculated strictly on performance",
        "Deposit and withdraw seamlessly in crypto or cash",
      ],
      actionType: "link",
      actionText: "Launch Investment App",
    },
    {
      id: "p2p",
      number: "02",
      title: "Freemann P2P Trading",
      tagline: "Direct peer-to-peer crypto & fiat exchange with zero escrow fees",
      badge: "ACTIVE SERVICE",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      dotColor: "bg-[#a500a3]",
      desc: "Buy, sell, and swap crypto directly with verified peers in your local currency. Protected by cryptographic smart escrow, 0% platform trading fees, and direct merchant support on WhatsApp.",
      illustration: "/images/deposit.png",
      isLive: true,
      metrics: [
        { label: "Escrow Fee", value: "0% Maker Fee" },
        { label: "Settlement", value: "Instant P2P" },
        { label: "Support", value: "WhatsApp Desk" },
      ],
      features: [
        "Direct buyer-to-seller transfers with automated escrow protection",
        "Multiple local payment rails (Bank transfer, Mobile Money, Cash)",
        "Direct trade execution and merchant support via WhatsApp",
      ],
      actionType: "p2p_contact",
      actionText: "Contact P2P on WhatsApp",
    },
    {
      id: "academy",
      number: "03",
      title: "Freemann Academy",
      tagline: "Master profitable trading with direct 1-on-1 mentorship",
      badge: "ENROLLMENT OPEN",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      dotColor: "bg-blue-500",
      desc: "Learn high-probability Forex and Crypto trading strategies directly from senior market analysts. We connect with you directly on WhatsApp or Email for personalized coaching, trade breakdowns, and signal rooms.",
      illustration: "/images/trading.png",
      isLive: true,
      metrics: [
        { label: "Mentorship", value: "1-on-1 & Signals" },
        { label: "Channels", value: "WhatsApp / Email" },
        { label: "Curriculum", value: "Beginner to Pro" },
      ],
      features: [
        "Direct personalized guidance via WhatsApp and Email",
        "Live technical analysis, price action & risk management",
        "Exclusive daily market signals and live trade reviews",
      ],
      actionType: "academy_contact",
      actionText: "Enroll / Contact Academy",
    },
    {
      id: "market",
      number: "04",
      title: "Freemann Online Market",
      tagline: "The universal marketplace where anything and everything can be traded",
      badge: "COMING SOON",
      badgeColor: "bg-[#a500a3]/10 text-[#a500a3] border-[#a500a3]/30",
      dotColor: "bg-[#a500a3]",
      desc: "A next-generation universal marketplace and exchange. Trade physical goods, digital assets, commodities, and professional services with escrow-backed protection and instant settlement.",
      illustration: "/images/withdraw.png",
      isLive: false,
      metrics: [
        { label: "Asset Scope", value: "Universal" },
        { label: "Settlement", value: "Escrow-Backed" },
        { label: "Status", value: "Private Beta" },
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a500a3]/10 border border-[#a500a3]/20 text-[#a500a3] font-semibold text-[11px] sm:text-xs mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 4 ECOSYSTEM PILLARS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#18181b] tracking-tight mb-2 sm:mb-3">
            The Freemann Firms <span className="text-[#a500a3]">Products</span>
          </h2>
          <p className="text-xs sm:text-base text-[#52525b] leading-relaxed max-w-2xl mx-auto">
            A unified suite of 4 financial technology solutions built for investors, traders, businesses, and learners.
          </p>
        </div>

        {/* 4 Products List in Exact Order */}
        <div className="space-y-6 sm:space-y-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border-2 border-[#e4e4e7] hover:border-[#a500a3]/60 rounded-3xl p-5 sm:p-8 transition-all hover:shadow-xl group relative overflow-hidden"
            >
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8">
                {/* Left Column: Product Details */}
                <div className="flex-1 w-full">
                  {/* Top Status Badges */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#71717a]">
                      PRODUCT {p.number}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 rounded-full border ${p.badgeColor}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dotColor} ${p.isLive ? "animate-pulse" : ""}`} />
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-3xl font-bold text-[#18181b] group-hover:text-[#a500a3] transition-colors mb-1.5 sm:mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#a500a3] mb-3 sm:mb-4 leading-snug">
                    {p.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed mb-4 sm:mb-6">
                    {p.desc}
                  </p>

                  {/* Metric Ribbon - Ultra Mobile Friendly */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-[#fafafa] border border-[#e4e4e7] mb-4 sm:mb-6">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center sm:text-left">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-[#71717a] block truncate">
                          {m.label}
                        </span>
                        <span className="text-[11px] sm:text-sm font-bold text-[#18181b] truncate block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features Bullet Points */}
                  <ul className="space-y-2 mb-6 sm:mb-8">
                    {p.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#3f3f46]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a500a3] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons - Mobile Full Width */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
                    {p.actionType === "link" && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2 h-12 sm:h-11 px-6 rounded-[9px] text-xs sm:text-sm font-semibold shadow-md shadow-[#a500a3]/20 w-full sm:w-auto active:scale-98"
                      >
                        <span>{p.actionText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {p.actionType === "p2p_contact" && (
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                        <a
                          href="https://wa.me/?text=Hello%20Freemann%20Firms%20P2P%20Desk%2C%20I%20would%20like%20to%20execute%20a%20P2P%20crypto%2Ffiat%20trade."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-2 h-12 sm:h-11 px-5 rounded-[9px] text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all w-full sm:w-auto active:scale-98"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Contact P2P on WhatsApp</span>
                        </a>

                        <a
                          href="https://freeman-firms.vercel.app/register"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center justify-center gap-2 h-12 sm:h-11 px-5 rounded-[9px] text-xs sm:text-sm font-semibold shadow-md shadow-[#a500a3]/20 w-full sm:w-auto active:scale-98"
                        >
                          <span>Launch P2P Desk</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    {p.actionType === "academy_contact" && (
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                        <a
                          href="https://wa.me/?text=Hello%20Freemann%20Firms%20Academy%2C%20I%20would%20like%20to%20enroll%20in%20the%20Academy."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-2 h-12 sm:h-11 px-5 rounded-[9px] text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all w-full sm:w-auto active:scale-98"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Contact via WhatsApp</span>
                        </a>

                        <button
                          onClick={() => setAcademyModalOpen(true)}
                          className="bg-white border border-[#e4e4e7] hover:border-[#a500a3] text-[#18181b] hover:text-[#a500a3] inline-flex items-center justify-center gap-2 h-12 sm:h-11 px-5 rounded-[9px] text-xs sm:text-sm font-semibold shadow-xs transition-all w-full sm:w-auto cursor-pointer active:scale-98"
                        >
                          <Mail className="w-4 h-4 text-[#a500a3]" />
                          <span>Reach Out via Email</span>
                        </button>
                      </div>
                    )}

                    {p.actionType === "waitlist" && (
                      <button
                        onClick={() => setWaitlistModalOpen(true)}
                        className="btn-primary inline-flex items-center justify-center gap-2 h-12 sm:h-11 px-6 rounded-[9px] text-xs sm:text-sm font-semibold shadow-md shadow-[#a500a3]/20 w-full sm:w-auto cursor-pointer active:scale-98"
                      >
                        <Clock className="w-4 h-4" />
                        <span>{p.actionText}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: 2D Storyset Illustration */}
                <div className="w-full lg:w-80 flex items-center justify-center shrink-0">
                  <div className="relative h-48 w-full max-w-[240px] sm:h-64 sm:max-w-[280px] lg:h-72 lg:max-w-[320px] bg-[#fafafa] rounded-2xl p-3 sm:p-4 border border-[#f4f4f5]">
                    <Image
                      src={p.illustration}
                      alt={p.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal 1: Forex Academy Reach-Out Modal */}
      {academyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#e4e4e7] relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setAcademyModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#71717a] hover:text-[#18181b] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#a500a3]/10 text-[#a500a3] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#18181b]">
                  Freemann Academy
                </h3>
                <p className="text-[11px] sm:text-xs text-[#71717a]">
                  Direct mentorship enrollment & signal access
                </p>
              </div>
            </div>

            <p className="text-xs text-[#52525b] leading-relaxed mb-5">
              Our lead mentors provide direct guidance. Choose your preferred channel to reach out:
            </p>

            <div className="space-y-2.5 mb-5">
              <a
                href="https://wa.me/?text=Hello%20Freemann%20Firms%20Academy%2C%20I%20am%20interested%20in%20joining%20the%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-all text-xs sm:text-sm font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </a>

              <a
                href="mailto:academy@freemannfirms.com?subject=Academy%20Enrollment%20Inquiry"
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] hover:bg-[#f4f4f5] text-[#18181b] transition-all text-xs sm:text-sm font-semibold"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-5 h-5 text-[#a500a3] shrink-0" />
                  <span className="truncate">Email Mentorship Desk</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717a] shrink-0" />
              </a>
            </div>

            <button
              onClick={() => setAcademyModalOpen(false)}
              className="w-full h-11 rounded-[9px] bg-[#f4f4f5] text-xs font-semibold text-[#52525b] hover:bg-[#e4e4e7] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal 2: Online Market Waitlist Modal */}
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
                  Freemann Online Market
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
