"use client";

import React, { useState } from "react";
import { PLANETS, type PlanetData } from "./data/planets";
import { PitchBanner } from "./components/PitchBanner";
import { SolarCanvas } from "./components/SolarCanvas";
import { WelcomeIntro } from "./components/WelcomeIntro";
import { SolarHud } from "./components/SolarHud";
import { ServiceDirectory } from "./components/ServiceDirectory";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";

export default function Home() {
  const [hasExplored, setHasExplored] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData>(PLANETS[0]);
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [orbitSpeedFactor, setOrbitSpeedFactor] = useState(1);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f0f4f9] selection:bg-cyan-500/30 font-sans overflow-x-hidden relative">
      {/* 1. Pitch Header Bar */}
      <PitchBanner
        hasExplored={hasExplored}
        onResetIntro={() => setHasExplored(false)}
      />

      {/* 2. Interactive 3D Solar System Viewport */}
      <div className="relative w-full h-screen">
        {/* Three.js 3D Canvas */}
        <SolarCanvas
          hasExplored={hasExplored}
          isRotating={isRotating}
          orbitSpeedFactor={orbitSpeedFactor}
          onSelectPlanet={setSelectedPlanet}
          onHoverPlanet={setHoveredPlanet}
        />

        {/* Screen 1: Welcome Intro (Fades out into background on Explore) */}
        <WelcomeIntro
          hasExplored={hasExplored}
          onExplore={() => setHasExplored(true)}
        />

        {/* Screen 2: Interactive 3D HUD & Planet Service Details */}
        <SolarHud
          hasExplored={hasExplored}
          isRotating={isRotating}
          orbitSpeedFactor={orbitSpeedFactor}
          selectedPlanet={selectedPlanet}
          hoveredPlanet={hoveredPlanet}
          onToggleRotating={() => setIsRotating((prev) => !prev)}
          onSetSpeed={setOrbitSpeedFactor}
          onSelectPlanet={setSelectedPlanet}
        />
      </div>

      {/* 3. Detailed Skeleton Service Directory & Pitch Strategy */}
      <ServiceDirectory onSelectPlanet={setSelectedPlanet} />

      {/* 4. About Us & Ecosystem Manifesto Section */}
      <AboutUs />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
