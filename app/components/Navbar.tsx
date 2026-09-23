"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex min-h-16 w-full items-center justify-between border-b border-[#e4e4e7] bg-white/95 backdrop-blur-md px-4 sm:px-6 md:px-8 text-[#18181b] sticky top-0 z-50 shadow-xs">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-2.5">
        <a href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Freemann Firms"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-[#a500a3]">
            Freemann Firms
          </span>
        </a>
      </div>

      {/* Desktop Nav Links in Exact Order */}
      <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#52525b]">
        <a href="#services" className="hover:text-[#a500a3] transition-colors">
          Investment Platform
        </a>
        <a href="#services" className="hover:text-[#a500a3] transition-colors">
          P2P Trading
        </a>
        <a href="#services" className="hover:text-[#a500a3] transition-colors">
          Academy
        </a>
        <a href="#services" className="hover:text-[#a500a3] transition-colors">
          Online Market
        </a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <a
          href="https://freeman-firms.vercel.app/register"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary h-9 px-3.5 sm:px-4 rounded-[9px] text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-md shadow-[#a500a3]/20"
        >
          <span>Launch App</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-[#52525b] hover:text-[#18181b] hover:bg-[#f4f4f5] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay in Exact Order */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-[#e4e4e7] p-5 flex flex-col gap-3.5 lg:hidden shadow-xl animate-in slide-in-from-top-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#71717a] px-1">
            Ecosystem Products
          </span>
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-semibold text-[#18181b] hover:text-[#a500a3] p-2 rounded-lg hover:bg-[#fafafa] transition-colors flex items-center justify-between"
          >
            <span>1. Investment Platform</span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Live</span>
          </a>
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-semibold text-[#18181b] hover:text-[#a500a3] p-2 rounded-lg hover:bg-[#fafafa] transition-colors flex items-center justify-between"
          >
            <span>2. P2P Trading</span>
            <span className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-bold">WhatsApp</span>
          </a>
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-semibold text-[#18181b] hover:text-[#a500a3] p-2 rounded-lg hover:bg-[#fafafa] transition-colors flex items-center justify-between"
          >
            <span>3. Academy</span>
            <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-bold">Mentorship</span>
          </a>
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-semibold text-[#18181b] hover:text-[#a500a3] p-2 rounded-lg hover:bg-[#fafafa] transition-colors flex items-center justify-between"
          >
            <span>4. Online Market</span>
            <span className="text-[10px] text-[#a500a3] bg-[#a500a3]/10 px-2 py-0.5 rounded font-bold">Soon</span>
          </a>

          <div className="pt-3 border-t border-[#e4e4e7] flex items-center gap-2">
            <a
              href="https://freeman-firms.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 flex-1 rounded-[9px] text-xs font-semibold text-center text-[#18181b] border border-[#e4e4e7] flex items-center justify-center hover:bg-[#f4f4f5]"
            >
              Log In
            </a>
            <a
              href="https://freeman-firms.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-10 flex-1 rounded-[9px] text-xs font-semibold text-center flex items-center justify-center shadow-md shadow-[#a500a3]/20"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
