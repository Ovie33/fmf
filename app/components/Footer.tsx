import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-[#06040d] py-8 text-purple-200/60 text-xs font-mono text-center">
      <p>© {new Date().getFullYear()} Freeman Firms Ecosystem. All rights reserved.</p>
    </footer>
  );
}
