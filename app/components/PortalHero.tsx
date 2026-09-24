"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  Sparkles,
  TrendingUp,
  Users2,
  GraduationCap,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

export function PortalHero() {
  const quickLinks = [
    { label: "INVESTMENTS", icon: TrendingUp, href: "#services" },
    { label: "ACADEMY", icon: GraduationCap, href: "#services" },
    { label: "P2P", icon: Users2, href: "#services" },
    { label: "ONLINE MARKET", icon: ShoppingBag, href: "#services" },
  ];

  return (
    <section className="w-full bg-[#fafafa] dark:bg-[#0c0c0e] border-b border-[#e4e4e7] dark:border-[#27272a] py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
        {/* Left Column: Ecosystem Content */}
        <div className="flex-1 text-center lg:text-left w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 border border-[#a500a3]/20 dark:border-[#a500a3]/40 text-[#a500a3] dark:text-[#d600b1] font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4" />
            <span>THE FREEMANN FIRMS ECOSYSTEM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181b] dark:text-white leading-[1.15] mb-4 sm:mb-6">
            The Unified Ecosystem for{" "}
            <span className="text-[#a500a3] dark:text-[#d600b1] block sm:inline">
              Modern Wealth & Trade.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#52525b] dark:text-[#a1a1aa] leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            Explore the interconnected Freemann Firms ecosystem seamlessly powering crypto-driven fund management, direct P2P exchange rails, 1-on-1 Forex trading mentorship, and universal online commerce in one unified gateway.
          </p>

          {/* Quick Jump Buttons - Uppercase & Bold without Numbers */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6 sm:mb-8">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#18181b] border-2 border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#18181b] dark:text-[#f4f4f5] flex items-center justify-center sm:justify-start gap-2 transition-all hover:bg-[#fafafa] dark:hover:bg-[#27272a] shadow-xs hover:shadow-sm active:scale-95"
                >
                  <Icon className="w-4 h-4 text-[#a500a3] dark:text-[#d600b1] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTAs - Mobile Full Width Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
            <a
              href="#services"
              className="btn-primary h-12 sm:h-12 px-6 rounded-[9px] text-sm sm:text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#a500a3]/20 hover:shadow-xl hover:shadow-[#a500a3]/30 w-full sm:w-auto active:scale-98"
            >
              <span>Explore All Products</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 sm:h-12 px-6 rounded-[9px] text-sm sm:text-base font-semibold text-[#18181b] dark:text-[#f4f4f5] border-2 border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] bg-white dark:bg-[#18181b] hover:bg-[#f4f4f5] dark:hover:bg-[#27272a] transition-all flex items-center justify-center gap-1.5 shadow-xs w-full sm:w-auto active:scale-98"
            >
              <span>Launch Investment App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Freemann Firms Solar Ecosystem Standalone Illustration */}
        <div className="w-full lg:w-[500px] flex items-center justify-center shrink-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center group">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#a500a3]/20 via-[#680097]/15 to-amber-400/10 dark:from-[#a500a3]/35 dark:via-[#680097]/25 dark:to-transparent rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

            {/* Light Mode Standalone Illustration */}
            <div className="relative w-full h-full block dark:hidden">
              <Image
                src="/images/solar-ecosystem.png"
                alt="Freemann Firms Solar System Ecosystem Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Dark Mode Standalone Illustration */}
            <div className="relative w-full h-full hidden dark:block">
              <Image
                src="/images/solar-ecosystem-dark.jpg"
                alt="Freemann Firms Solar System Ecosystem Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain rounded-3xl group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
