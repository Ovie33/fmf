"use client";

import React from "react";
import {
  Orbit,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { PLANETS, type PlanetData } from "../data/planets";

interface SolarHudProps {
  hasExplored: boolean;
  isRotating: boolean;
  orbitSpeedFactor: number;
  selectedPlanet: PlanetData;
  hoveredPlanet: PlanetData | null;
  onToggleRotating: () => void;
  onSetSpeed: (speed: number) => void;
  onSelectPlanet: (planet: PlanetData) => void;
}

export function SolarHud({
  hasExplored,
  isRotating,
  orbitSpeedFactor,
  selectedPlanet,
  hoveredPlanet,
  onToggleRotating,
  onSetSpeed,
  onSelectPlanet,
}: SolarHudProps) {
  return (
    <div
      className={`absolute inset-0 z-30 pointer-events-none transition-all duration-1000 ${
        hasExplored
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Top Left Title & Status */}
      <div className="absolute top-6 left-6 pointer-events-auto flex items-center gap-3 bg-[#0a0e18]/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shadow-2xl">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-amber-400 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-[#080b12] rounded-[10px] flex items-center justify-center">
            <Orbit className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm text-white">SOLAR ECOSYSTEM</span>
            <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800/40">
              LIVE 3D
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono">Hover or click any planet to inspect</p>
        </div>
      </div>

      {/* Top Right Simulation Controls */}
      <div className="absolute top-6 right-6 pointer-events-auto flex items-center gap-2 bg-[#0a0e18]/85 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl font-mono text-xs">
        <button
          onClick={onToggleRotating}
          className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
            isRotating
              ? "bg-cyan-950 border-cyan-500/40 text-cyan-300"
              : "bg-zinc-800 border-zinc-700 text-zinc-400"
          }`}
        >
          <RefreshCw className={`w-3 h-3 ${isRotating ? "animate-spin-slow" : ""}`} />
          <span>{isRotating ? "ORBITS: ACTIVE" : "PAUSED"}</span>
        </button>

        <div className="flex items-center gap-1 bg-[#06080e] px-2 py-1 rounded-xl border border-white/5">
          {[0.5, 1, 2].map((spd) => (
            <button
              key={spd}
              onClick={() => onSetSpeed(spd)}
              className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${
                orbitSpeedFactor === spd
                  ? "bg-cyan-500 text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>

      {/* Live Hover Tooltip in 3D Space */}
      {hoveredPlanet && (
        <div className="absolute top-24 left-6 pointer-events-none glass-panel p-4 rounded-2xl border border-cyan-500/40 shadow-2xl max-w-xs animate-fade-in z-40 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: hoveredPlanet.color }}
            ></span>
            <span className="font-bold text-sm text-white">{hoveredPlanet.name}</span>
          </div>
          <div className="text-[11px] font-mono text-cyan-300 mb-1.5">{hoveredPlanet.role}</div>
          <p className="text-xs text-zinc-300 leading-snug">{hoveredPlanet.tagline}</p>
          <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <span>CLICK TO INSPECT FULL SERVICE</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      )}

      {/* Bottom Selected Planet Service HUD Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl pointer-events-auto">
        <div className="glass-panel-glow p-5 sm:p-6 rounded-3xl border border-cyan-500/30 shadow-2xl backdrop-blur-2xl">
          {/* Planet Pill Switcher */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-4 mb-4 border-b border-white/10">
            {PLANETS.map((planet) => {
              const isCurrent = selectedPlanet.id === planet.id;
              return (
                <button
                  key={planet.id}
                  onClick={() => onSelectPlanet(planet)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all shrink-0 border cursor-pointer ${
                    isCurrent
                      ? "bg-cyan-950/90 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                      : "bg-[#07090f]/60 border-transparent text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: planet.color }}
                  ></span>
                  <span className="font-semibold">{planet.name}</span>
                </button>
              );
            })}
          </div>

          {/* Planet Service Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Info */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-lg"
                  style={{
                    backgroundColor: `${selectedPlanet.color}25`,
                    border: `1px solid ${selectedPlanet.color}`,
                  }}
                >
                  <selectedPlanet.icon className="w-5 h-5" style={{ color: selectedPlanet.color }} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {selectedPlanet.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">{selectedPlanet.name}</h3>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">{selectedPlanet.summary}</p>
            </div>

            {/* Middle Features */}
            <div className="md:col-span-4 bg-[#06080e] p-3.5 rounded-xl border border-white/5">
              <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Core Capabilities</div>
              <div className="space-y-1.5">
                {selectedPlanet.keyFeatures.slice(0, 2).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics & Anchor */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                {selectedPlanet.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#06080e] border border-white/5">
                    <div className="text-[9px] font-mono text-zinc-500">{m.label}</div>
                    <div className="text-xs font-bold text-white">{m.value}</div>
                  </div>
                ))}
              </div>
              <a
                href="#full-specs"
                className="w-full py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-500/30 transition-all flex items-center justify-center gap-1"
              >
                <span>View Full Skeleton Spec</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
