"use client";

import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function PortalCallout() {
  return (
    <section className="w-full bg-[#f8fafc] dark:bg-[#09090b] px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-16 md:py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#a500a3] via-[#680097] to-[#3b0764] text-white p-6 sm:p-10 md:p-16 text-center flex flex-col items-center gap-5 sm:gap-6 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d600b1]/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

          <span className="relative z-10 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300">
            Connect & Grow With Freemann Firms
          </span>

          <h2 className="relative z-10 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold max-w-5xl leading-tight tracking-tight">
            Whether you&apos;re an investor, trader, merchant, or student there is a place for you inside our ecosystem.
          </h2>

          <p className="relative z-10 text-sm sm:text-base md:text-base lg:text-lg text-purple-100 max-w-3xl leading-relaxed">
            Join thousands unlocking crypto-driven wealth management, direct peer-to-peer liquidity, and elite financial education today.
          </p>

          {/* 4 Interactive Feature Badges */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-5xl pt-1">
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs flex flex-col items-center text-center gap-1">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">Investments</span>
              <span className="text-xs text-purple-100 font-medium">Performance Fund Management</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs flex flex-col items-center text-center gap-1">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">Academy</span>
              <span className="text-xs text-purple-100 font-medium">1-on-1 Forex Mentorship</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs flex flex-col items-center text-center gap-1">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">P2P Trading</span>
              <span className="text-xs text-purple-100 font-medium">Direct Crypto & Giftcard Rails</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs flex flex-col items-center text-center gap-1">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">Online Market</span>
              <span className="text-xs text-purple-100 font-medium">Escrow-Backed Commerce</span>
            </div>
          </div>

          {/* Action Pills */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-100 text-[#680097] font-bold text-sm sm:text-base px-8 sm:px-9 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-full sm:w-auto active:scale-95 whitespace-nowrap shrink-0"
            >
              Launch Investment App
            </a>

            <a
              href="https://wa.me/2348105347598?text=Hello%20Freemann%20Firms%2C%20I%20would%20like%20to%20partner%20or%20learn%20more%20about%20the%20ecosystem."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm sm:text-base px-8 sm:px-9 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-xs active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Partner on WhatsApp</span>
            </a>
          </div>

          <div className="relative z-10 text-xs text-purple-200/80 pt-2 flex flex-wrap items-center justify-center gap-4">
            <span>Official WhatsApp: +234 810 534 7598</span>
            <span>•</span>
            <span>support@freemannfirom.com</span>
            <span>•</span>
            <span>CAC Registered & Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
