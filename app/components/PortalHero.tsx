"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  GraduationCap,
  Users2,
  ArrowUpRight,
} from "lucide-react";

export function PortalHero() {
  const quickLinks = [
    { label: "1. Investment Platform", icon: TrendingUp, href: "#services" },
    { label: "2. Online Market", icon: ShoppingBag, href: "#services" },
    { label: "3. Forex Academy", icon: GraduationCap, href: "#services" },
    { label: "4. P2P Services", icon: Users2, href: "#services" },
  ];

  return (
    <section className="w-full bg-[#fafafa] border-b border-[#e4e4e7] py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
        {/* Left Column: Ecosystem Content */}
        <div className="flex-1 text-center lg:text-left w-full">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a500a3]/10 border border-[#a500a3]/20 text-[#a500a3] font-semibold text-[11px] sm:text-xs mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNIFIED PRODUCT ECOSYSTEM</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18181b] leading-tight mb-4 sm:mb-6">
            One Gateway.{" "}
            <span className="text-[#a500a3] block sm:inline">
              Every Financial Frontier.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-[#52525b] leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            Welcome to the Freemann Firms Ecosystem. Seamlessly navigate between our high-yield investment platform, universal online trading market, 1-on-1 Forex Academy, and secure P2P services.
          </p>

          {/* Quick Jump Buttons - Mobile Touch Friendly */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2 mb-6 sm:mb-8">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="px-3 py-2.5 rounded-xl bg-white border border-[#e4e4e7] hover:border-[#a500a3] text-[11px] sm:text-xs font-semibold text-[#18181b] flex items-center justify-center sm:justify-start gap-1.5 transition-all hover:bg-[#f4f4f5] shadow-xs active:scale-95"
                >
                  <Icon className="w-3.5 h-3.5 text-[#a500a3] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTAs - Mobile Full Width Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
            <a
              href="#services"
              className="btn-primary h-12 sm:h-11 px-6 rounded-[9px] text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#a500a3]/20 w-full sm:w-auto active:scale-98"
            >
              <span>Explore 4 Products</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://freeman-firms.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 sm:h-11 px-5 rounded-[9px] text-sm font-semibold text-[#18181b] border border-[#e4e4e7] bg-white hover:bg-[#f4f4f5] transition-colors flex items-center justify-center shadow-xs w-full sm:w-auto active:scale-98"
            >
              Launch Investment App
            </a>
          </div>
        </div>

        {/* Right Column: Storyset Globe Search 2D Illustration */}
        <div className="w-full lg:w-[480px] flex items-center justify-center shrink-0">
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-square rounded-3xl bg-white p-4 border border-[#e4e4e7] shadow-xl transition-all">
            <Image
              src="/images/globe-search.png"
              alt="Exploring the Freemann Firms Global Ecosystem"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
