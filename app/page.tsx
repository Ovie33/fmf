"use client";

import React from "react";
import { Navbar } from "./components/Navbar";
import { PortalHero } from "./components/PortalHero";
import { PortalServices } from "./components/PortalServices";
import { PortalArchitecture } from "./components/PortalArchitecture";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-[#18181b] dark:text-[#f4f4f5] font-sans selection:bg-[#a500a3]/20 selection:text-[#a500a3] overflow-x-hidden transition-colors duration-300">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Unified Ecosystem Portal Hero */}
      <PortalHero />

      {/* 3. Core Ecosystem Services Directory & Launchpads */}
      <PortalServices />

      {/* 4. Ecosystem Value Pillars & Architecture */}
      <PortalArchitecture />

      {/* 5. Official Regulatory & Legal Policy Footer */}
      <Footer />
    </main>
  );
}
