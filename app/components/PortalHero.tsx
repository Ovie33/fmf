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

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-100 dark:to-zinc-400 leading-[1.12] mb-4 sm:mb-6">
            The Unified Ecosystem for{" "}
            <span className="text-[#a500a3] dark:text-[#d600b1] block sm:inline">
              Modern Wealth & Trade.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#52525b] dark:text-[#a1a1aa] leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            Explore the interconnected Freemann Firms ecosystem seamlessly powering crypto-driven fund management, direct P2P exchange rails, 1-on-1 Forex trading mentorship, and universal online commerce in one unified gateway.
          </p>

          {/* Quick Jump Buttons - Uppercase & Bold Pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6 sm:mb-8">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="px-4 py-2 rounded-full bg-white dark:bg-[#141418] border border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] text-xs font-bold uppercase tracking-wider text-[#18181b] dark:text-[#f4f4f5] flex items-center justify-center sm:justify-start gap-2 transition-all hover:bg-[#fafafa] dark:hover:bg-[#202025] shadow-xs hover:shadow-sm active:scale-95"
                >
                  <Icon className="w-3.5 h-3.5 text-[#a500a3] dark:text-[#d600b1] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTAs - MadeInBlacc Style Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full">
            <a
              href="#services"
              className="bg-[#a500a3] hover:bg-[#850083] text-white h-12 px-8 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#a500a3]/25 hover:shadow-xl hover:shadow-[#a500a3]/35 transition-all w-full sm:w-auto active:scale-95"
            >
              <span>Explore All Products</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 rounded-full text-sm sm:text-base font-semibold text-[#18181b] dark:text-[#f4f4f5] border border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] bg-white dark:bg-[#141418] hover:bg-[#f4f4f5] dark:hover:bg-[#202025] transition-all flex items-center justify-center gap-1.5 shadow-xs w-full sm:w-auto active:scale-95"
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
