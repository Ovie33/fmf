"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full bg-[#141414] border-b border-[#27272a] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Headline & Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a500a3]/10 border border-[#a500a3]/30 text-[#d600b1] font-semibold text-xs mb-6 mx-auto lg:mx-0 w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-[#a500a3]" />
            <span>UNIFIED FREEMANN FIRMS ECOSYSTEM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#ededed] leading-tight mb-6">
            Join the world of{" "}
            <span className="text-[#a500a3] block sm:inline">
              successful Investors
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            &quot;Invest with ease, powered by CRYPTO. Let Freemann Firms&apos; expert fund managers grow your wealth while you stay in control. Withdraw when you want, whether with crypto or cash, we&apos;ve got you covered.&quot;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-12 px-8 rounded-[9px] text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#a500a3]/25 w-full sm:w-auto"
            >
              <span>INVEST NOW</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#ecosystem"
              className="h-12 px-6 rounded-[9px] text-sm font-semibold text-[#ededed] border border-[#27272a] bg-[#1c1c1c] hover:bg-[#27272a] transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Right Hero Finance Illustration */}
        <div className="w-full lg:w-[480px] flex items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image
              src="/images/finance.png"
              alt="Finance illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
