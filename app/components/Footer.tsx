import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c] py-8 text-zinc-500 text-xs font-mono text-center">
      <p>© {new Date().getFullYear()} Solar Ecosystem Architecture. All rights reserved.</p>
    </footer>
  );
}
