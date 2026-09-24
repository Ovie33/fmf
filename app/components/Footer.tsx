"use client";

import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#120017] dark:bg-[#060008] text-white border-t border-[#a500a3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-14 pb-8">
        {/* Top Logo & Branding */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <a aria-label="Freemann Firms home" href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Freemann Firms"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              FREEMANN FIRMS
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.freemannfirms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a500a3] hover:bg-[#850083] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-md shadow-[#a500a3]/30"
            >
              Launch App
            </a>
            <a
              href="https://wa.me/2348105347598"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full border border-white/20 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Col 1: Overview & Socials */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Integrated Ecosystem
            </p>
            <p className="text-sm leading-relaxed text-zinc-300">
              Freemann Firms Integrated Services Ltd. is a unified fintech ecosystem powering crypto-driven fund management, peer-to-peer trading rails, professional academy education, and universal online commerce.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://x.com"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#a500a3] flex items-center justify-center text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#a500a3] flex items-center justify-center text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#a500a3] flex items-center justify-center text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Ecosystem Products */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Ecosystem Products
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-300">
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Freemann Firms Investments
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Freemann Firms Academy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Freemann Firms P2P Trading
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Freemann Firms Online Market
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Company & Culture
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-300">
              <li>
                <a href="#mission" className="hover:text-amber-300 transition-colors">
                  Our Mission & Story
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-amber-300 transition-colors">
                  Why Freemann Firms
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348105347598" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="mailto:support@freemannfirom.com" className="hover:text-amber-300 transition-colors">
                  Support Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Direct Channels
            </p>
            <div className="flex flex-col gap-2 text-sm text-zinc-300">
              <p>
                <strong className="text-white">WhatsApp:</strong><br />
                <a href="https://wa.me/2348105347598" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 text-emerald-400">
                  +234 810 534 7598
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:support@freemannfirom.com" className="hover:text-amber-300">
                  support@freemannfirom.com
                </a>
              </p>
              <p className="text-xs text-zinc-400 pt-1">
                Segregated client asset protection & multi-sig custody architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Freemann Firms Integrated Services Ltd. All rights reserved.</p>
          <p>Powered by Freemann Firms Unified Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
