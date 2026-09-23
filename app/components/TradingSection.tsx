"use client";

import React from "react";
import Image from "next/image";

export function TradingSection() {
  return (
    <section id="trading" className="w-full bg-[#0a0a0a] py-16 md:py-20 border-b border-[#27272a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row-reverse lg:items-center lg:justify-between">
          {/* Main Trading Platform Illustration */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative h-72 w-full max-w-lg sm:h-80 lg:h-96">
              <Image
                src="/images/frame01.png"
                alt="Freemann Firms trading platform illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex-1">
            <h2 className="border-b-4 border-[#a500a3] pb-3 text-2xl md:text-3xl font-semibold text-[#ededed] inline-block mb-6">
              We are trading for you!
            </h2>
            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed mb-8">
              Freemann Firms is the ideal choice for investors seeking consistent profits, whether short or long term. Our expert traders and fund managers ensure top returns based on performance, with no fixed ROE. A unique approach to investing!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-44 w-44 sm:h-48 sm:w-48 rounded-xl overflow-hidden shadow-2xl border border-[#27272a]">
                <Image
                  src="/images/trading.png"
                  alt="Expert fund managers trading on your behalf"
                  fill
                  className="object-contain bg-[#141414]"
                />
              </div>
              <a
                href="https://freeman-firms.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-11 px-8 rounded-[9px] text-sm font-semibold flex items-center justify-center shadow-lg shadow-[#a500a3]/20 w-full sm:w-auto"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
