"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { PLANETS, type PlanetData } from "../data/planets";

interface ServiceDirectoryProps {
  onSelectPlanet: (planet: PlanetData) => void;
}

export function ServiceDirectory({ onSelectPlanet }: ServiceDirectoryProps) {
  const handleSelect = (planet: PlanetData) => {
    onSelectPlanet(planet);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="full-specs" className="py-24 border-t border-white/10 bg-[#080b12] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="blueprint-tag text-cyan-400 inline-block mb-3">
            [ECOSYSTEM_DIRECTORY // SKELETON_SLOTS]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ecosystem Orbit Service Directory
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Each planet in the solar system represents a modular service pillar ready for development.
          </p>
        </div>

        {/* Orbit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANETS.map((planet) => {
            const Icon = planet.icon;
            return (
              <div
                key={planet.id}
                onClick={() => handleSelect(planet)}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-3 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${planet.color}20`,
                        border: `1px solid ${planet.color}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: planet.color }} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      [ORBIT: {planet.id.toUpperCase()}]
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {planet.name}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-400 mb-3">{planet.role}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{planet.summary}</p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400">{planet.status}</span>
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    VIEW IN 3D <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
