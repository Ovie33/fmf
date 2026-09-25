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
    <section className="w-full bg-[#fafafa] dark:bg-[#0c0c0e] border-b border-[#e4e4e7] dark:border-[#27272a] py-10 sm:py-14 md:py-18 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-16">
        {/* Left Column: Ecosystem Content */}
        <div className="flex-1 text-center lg:text-left w-full flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a500a3]/10 dark:bg-[#a500a3]/20 border border-[#a500a3]/20 dark:border-[#a500a3]/40 text-[#a500a3] dark:text-[#d600b1] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>THE FREEMANN FIRMS ECOSYSTEM</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-[#18181b] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-zinc-100 dark:to-zinc-400 leading-tight mb-3 sm:mb-4">
            The Unified Ecosystem for{" "}
            <span className="text-[#a500a3] dark:text-[#d600b1]">
              Modern Wealth & Trade.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#52525b] dark:text-[#a1a1aa] leading-relaxed mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0">
            Explore the interconnected Freemann Firms ecosystem seamlessly powering crypto-driven fund management, direct P2P exchange rails, 1-on-1 Forex trading mentorship, and universal online commerce in one unified gateway.
          </p>

          {/* Quick Jump Buttons - On a straight line */}
          <div className="flex items-center justify-start lg:justify-start gap-2 sm:gap-2.5 mb-5 sm:mb-6 w-full overflow-x-auto pb-1.5 pt-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="px-3.5 py-1.5 sm:py-2 rounded-full bg-white dark:bg-[#141418] border border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#18181b] dark:text-[#f4f4f5] flex items-center justify-center gap-1.5 sm:gap-2 transition-all hover:bg-[#fafafa] dark:hover:bg-[#202025] shadow-xs hover:shadow-sm active:scale-95 whitespace-nowrap shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-[#a500a3] dark:text-[#d600b1] shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTAs - Clean Pill Buttons without Arrow Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a500a3] hover:bg-[#850083] text-white h-11 sm:h-12 px-6 sm:px-8 rounded-full text-xs sm:text-sm md:text-base font-bold flex items-center justify-center shadow-md shadow-[#a500a3]/25 hover:shadow-lg hover:shadow-[#a500a3]/35 transition-all w-full sm:w-auto active:scale-95 whitespace-nowrap shrink-0"
            >
              Launch Investment App
            </a>
            <a
              href="#services"
              className="h-11 sm:h-12 px-6 sm:px-8 rounded-full text-xs sm:text-sm md:text-base font-bold text-[#18181b] dark:text-[#f4f4f5] border border-[#e4e4e7] dark:border-[#27272a] hover:border-[#a500a3] dark:hover:border-[#a500a3] bg-white dark:bg-[#141418] hover:bg-[#f4f4f5] dark:hover:bg-[#202025] transition-all flex items-center justify-center shadow-xs w-full sm:w-auto active:scale-95 whitespace-nowrap shrink-0"
            >
              Explore All Products
            </a>
          </div>
        </div>

        {/* Right Column: Freemann Firms Solar Ecosystem Standalone Illustration */}
        <div className="w-full lg:w-[380px] xl:w-[480px] flex items-center justify-center shrink-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[460px] aspect-square flex items-center justify-center group">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#a500a3]/20 via-[#680097]/15 to-amber-400/10 dark:from-[#a500a3]/35 dark:via-[#680097]/25 dark:to-transparent rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

            {/* Light Mode Standalone Illustration */}
            <div className="relative w-full h-full block dark:hidden">
              <Image
                src="/images/solar-ecosystem.png"
                alt="Freemann Firms Solar System Ecosystem Architecture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 480px"
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 480px"
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
