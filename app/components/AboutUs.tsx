"use client";

import React from "react";
import {
  Orbit,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function AboutUs() {
  const pillars = [
    {
      icon: Orbit,
      title: "Gravitational Synergy",
      desc: "Instead of isolated protocol silos, Freeman Firms links compute, capital, and AI into a singular gravitational orbit where every service amplifies the network.",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Sub-Second Execution",
      desc: "Engineered from the ground up for parallel multi-threaded compute, deterministic block finality, and ultra-low gas fee predictability.",
      color: "white",
    },
    {
      icon: ShieldCheck,
      title: "Cryptographic Integrity",
      desc: "Secured by Zero-Knowledge proofs and decentralized validator consensus, providing mathematical security across all cross-orbit transactions.",
      color: "purple",
    },
  ];

  const teamSlots = [
    {
      role: "Lead Protocol Architect",
      name: "Freeman Systems Team",
      specialty: "Distributed Systems & Consensus",
      tag: "INFRASTRUCTURE",
    },
    {
      role: "Head of Cryptography",
      name: "ZK Research Lab",
      specialty: "Zero-Knowledge State Proofs",
      tag: "SECURITY",
    },
    {
      role: "Director of Ecosystem",
      name: "Growth & Capital Hub",
      specialty: "Developer Adoption & $15M Grants",
      tag: "EXPANSION",
    },
    {
      role: "Lead AI Researcher",
      name: "Autonomous Agent Subnets",
      specialty: "Verifiable GPU Compute & ML",
      tag: "AI RESEARCH",
    },
  ];

  return (
    <section id="about-us" className="py-24 border-t border-purple-500/20 bg-[#07050f] relative z-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="blueprint-tag text-purple-300 inline-block mb-3">
            [ABOUT_US // THE_GRAVITATIONAL_VISION]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Building the Gravitational Core for Freeman Firms
          </h2>
          <p className="text-sm sm:text-base text-purple-200/70 mt-4 leading-relaxed">
            Freeman Firms is pioneering a unified multi-orbit solar ecosystem to eliminate fragmentation and empower autonomous, scalable infrastructure.
          </p>
        </div>

        {/* Core Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center">
          {/* Left Large Vision Banner */}
          <div className="lg:col-span-6 glass-panel-glow p-8 sm:p-10 rounded-3xl border border-purple-500/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 font-mono text-xs mb-6 border border-purple-800/40">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>THE FREEMAN MANIFESTO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">
              Why A Solar System Architecture?
            </h3>

            <p className="text-sm text-purple-100/80 leading-relaxed mb-6 font-normal">
              Monolithic networks force all applications to compete for the same execution lane.
              The Freeman Firms solar architecture isolates each service into its own sovereign orbit while remaining
              tethered to a shared, high-security gravitational consensus core.
            </p>

            <div className="space-y-3 font-mono text-xs text-purple-100/90">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Zero bandwidth congestion between independent subnets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Instant cross-orbit telepathy communication</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                <span>Sovereign governance with unified economic security</span>
              </div>
            </div>
          </div>

          {/* Right 3 Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-purple-500/15 text-purple-300 shrink-0 mt-1 border border-purple-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs text-purple-200/70 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Ecosystem Stewards Matrix */}
        <div className="border-t border-purple-500/20 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="blueprint-tag text-purple-300 inline-block mb-2">
                [CORE_STEWARDS // TEAM_SLOTS]
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Freeman Firms Architects & Contributors
              </h3>
            </div>
            <span className="font-mono text-xs text-purple-300/70">
              Ready for Freeman Firms team customization
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamSlots.map((member, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-400/40 hover:shadow-md hover:shadow-purple-500/10 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800/40">
                      {member.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-white/10 border border-purple-500/30 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>

                  <h4 className="text-base font-bold text-white mb-0.5">{member.name}</h4>
                  <div className="text-xs font-mono text-purple-300 mb-2">{member.role}</div>
                  <p className="text-xs text-purple-200/60">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
