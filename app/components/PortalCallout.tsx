"use client";

import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function PortalCallout() {
  return (
    <section className="w-full bg-[#f8fafc] dark:bg-[#09090b] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#a500a3] via-[#680097] to-[#3b0764] text-white p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d600b1]/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

          <span className="relative z-10 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300">
            Connect & Grow With Freemann Firms
          </span>

          <h2 className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight tracking-tight">
            Whether you&apos;re an investor, trader, merchant, or learner — there is a place for you inside our ecosystem.
          </h2>

          <p className="relative z-10 text-sm sm:text-base text-purple-100 max-w-xl leading-relaxed">
            Join thousands unlocking crypto-driven wealth management, direct peer-to-peer liquidity, and elite financial education today.
          </p>

          {/* Action Pills */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-100 text-[#680097] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95"
            >
              <span>Launch Investment App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/2348105347598?text=Hello%20Freemann%20Firms%2C%20I%20would%20like%20to%20partner%20or%20learn%20more%20about%20the%20ecosystem."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-xs active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Partner on WhatsApp</span>
            </a>
          </div>

          <div className="relative z-10 text-xs text-purple-200/80 pt-2 flex flex-wrap items-center justify-center gap-3">
            <span>Official WhatsApp: +234 810 534 7598</span>
            <span>•</span>
            <span>support@freemannfirom.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
