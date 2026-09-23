"use client";

import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#a500a3] text-white">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        {/* Company & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-md">
          <a aria-label="Freemann Firms home" href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-36 sm:h-8">
              <Image
                src="/images/logo.png"
                alt="Freemann Firms"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
          </a>
          <p className="text-base font-bold opacity-95">Freemann Firms Integrated Services Ltd.</p>
          <p className="text-sm leading-relaxed opacity-90">
            A unified fintech ecosystem empowering individuals and businesses through crypto-powered investment management, peer-to-peer trading rails, professional academy education, and universal online commerce.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-90">
            Social & Community
          </span>
          <div className="flex gap-4">
            {/* X / Twitter */}
            <a
              href="https://x.com"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center opacity-90 transition-all hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center opacity-90 transition-all hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center opacity-90 transition-all hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 sm:px-6 py-4 text-xs sm:text-sm opacity-90 text-center">
          <p>© {new Date().getFullYear()} Freemann Firms Integrated Services Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
