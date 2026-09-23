"use client";

import React, { useState } from "react";
import {
  Orbit,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  X,
  ChevronDown,
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
  const [showDetailPanel, setShowDetailPanel] = useState(true);

  return (
    <div
      className={`absolute inset-0 z-30 pointer-events-none transition-all duration-1000 ${
        hasExplored
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Top Left Title & Status */}
      <div className="absolute top-6 left-6 pointer-events-auto flex items-center gap-3 bg-[#0d091a]/70 backdrop-blur-md p-3 rounded-2xl border border-purple-500/20 shadow-xl">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-400 to-white p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-[#0d091a] rounded-[10px] flex items-center justify-center">
            <Orbit className="w-4 h-4 text-purple-300 animate-spin-slow" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs text-white">FREEMAN FIRMS</span>
            <span className="text-[9px] font-mono bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800/40">
              SOLAR CORE
            </span>
          </div>
          <p className="text-[10px] text-purple-200/60 font-mono">Click any planet to inspect</p>
        </div>
      </div>

      {/* Top Right Simulation Controls */}
      <div className="absolute top-6 right-6 pointer-events-auto flex items-center gap-2 bg-[#0d091a]/70 backdrop-blur-md p-1.5 rounded-2xl border border-purple-500/20 shadow-xl font-mono text-xs">
        <button
          onClick={onToggleRotating}
          className={`px-2.5 py-1 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer text-[11px] ${
            isRotating
              ? "bg-purple-950 border-purple-500/40 text-purple-200"
              : "bg-zinc-800 border-zinc-700 text-zinc-400"
          }`}
        >
          <RefreshCw className={`w-3 h-3 ${isRotating ? "animate-spin-slow" : ""}`} />
          <span>{isRotating ? "ORBITS: ACTIVE" : "PAUSED"}</span>
        </button>

        <div className="flex items-center gap-1 bg-[#090614] px-1.5 py-0.5 rounded-xl border border-white/5">
          {[0.5, 1, 2].map((spd) => (
            <button
              key={spd}
              onClick={() => onSetSpeed(spd)}
              className={`px-1.5 py-0.5 rounded text-[10px] cursor-pointer ${
                orbitSpeedFactor === spd
                  ? "bg-white text-purple-950 font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>

      {/* Live Hover Tooltip */}
      {hoveredPlanet && (
        <div className="absolute top-20 left-6 pointer-events-none glass-panel p-3.5 rounded-2xl border border-purple-500/40 shadow-2xl max-w-xs animate-fade-in z-40 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: hoveredPlanet.color }}
            ></span>
            <span className="font-bold text-xs text-white">{hoveredPlanet.name}</span>
          </div>
          <div className="text-[10px] font-mono text-purple-300 mb-1">{hoveredPlanet.role}</div>
          <p className="text-[11px] text-purple-100/80 leading-snug">{hoveredPlanet.tagline}</p>
        </div>
      )}

      {/* Right Side HUD Drawer */}
      {showDetailPanel ? (
        <div className="absolute top-20 right-6 w-80 max-w-[calc(100vw-3rem)] pointer-events-auto animate-fade-in z-30">
          <div className="glass-panel-glow p-5 rounded-3xl border border-purple-500/30 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-[10px] font-mono text-purple-300 tracking-wider">
                [ORBIT INSPECTOR]
              </span>
              <button
                onClick={() => setShowDetailPanel(false)}
                className="text-purple-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                title="Minimize panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-lg shrink-0"
                style={{
                  backgroundColor: `${selectedPlanet.color}25`,
                  border: `1px solid ${selectedPlanet.color}`,
                }}
              >
                <selectedPlanet.icon className="w-5 h-5" style={{ color: selectedPlanet.color }} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-purple-300/80 uppercase">
                  {selectedPlanet.category}
                </span>
                <h3 className="text-base font-black text-white leading-tight">
                  {selectedPlanet.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-purple-100/80 leading-relaxed mb-4">
              {selectedPlanet.summary}
            </p>

            <div className="bg-[#090614]/80 p-3 rounded-xl border border-white/5 mb-3">
              <div className="text-[9px] font-mono text-purple-300 uppercase mb-2">
                Core Capabilities
              </div>
              <div className="space-y-1.5">
                {selectedPlanet.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {selectedPlanet.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-[#090614]/80 border border-white/5">
                  <div className="text-[9px] font-mono text-purple-300/70">{m.label}</div>
                  <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                </div>
              ))}
            </div>

            <a
              href="#full-specs"
              className="w-full py-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 font-mono text-xs border border-purple-500/30 transition-all flex items-center justify-center gap-1"
            >
              <span>View Full Directory Spec</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowDetailPanel(true)}
          className="absolute top-20 right-6 pointer-events-auto glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center gap-2 hover:bg-purple-950/60 shadow-xl transition-all cursor-pointer"
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: selectedPlanet.color }}
          ></span>
          <span>Inspect {selectedPlanet.name.split(" ")[0]}</span>
          <ChevronDown className="w-3.5 h-3.5 text-purple-400" />
        </button>
      )}

      {/* ULTRA-SLIM BOTTOM FLOATING PILL SELECTOR (With hidden scrollbar) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto max-w-[95vw]">
        <div className="bg-[#0d091a]/70 backdrop-blur-xl px-3 py-1.5 rounded-full border border-purple-500/30 shadow-2xl flex items-center gap-1.5 overflow-x-auto no-scrollbar scrollbar-none">
          {PLANETS.map((planet) => {
            const isCurrent = selectedPlanet.id === planet.id;
            return (
              <button
                key={planet.id}
                onClick={() => {
                  onSelectPlanet(planet);
                  setShowDetailPanel(true);
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer whitespace-nowrap ${
                  isCurrent
                    ? "bg-purple-900/90 text-white shadow-md shadow-purple-500/30 border border-purple-400"
                    : "text-purple-200/60 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: planet.color }}
                ></span>
                <span className="font-semibold text-[11px]">{planet.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
