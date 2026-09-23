"use client";

import React from "react";
import {
  Orbit,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  Compass,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export function AboutUs() {
  const pillars = [
    {
      icon: Orbit,
      title: "Gravitational Synergy",
      desc: "Instead of isolated protocol silos, our ecosystem links compute, DeFi, and AI into a singular gravitational orbit where every service amplifies the network.",
      color: "cyan",
    },
    {
      icon: Zap,
      title: "Sub-Second Execution",
      desc: "Engineered from the ground up for parallel multi-threaded compute, deterministic block finality, and ultra-low gas fee predictability.",
      color: "amber",
    },
    {
      icon: ShieldCheck,
      title: "Cryptographic Integrity",
      desc: "Secured by Zero-Knowledge proofs and decentralized validator consensus, providing mathematical security across all cross-orbit transactions.",
      color: "emerald",
    },
  ];

  const teamSlots = [
    {
      role: "Lead Protocol Architect",
      name: "Core Systems Team",
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
      name: "Growth & Grants Hub",
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
    <section id="about-us" className="py-24 border-t border-white/10 bg-[#070a10] relative z-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="blueprint-tag text-cyan-400 inline-block mb-3">
            [ABOUT_US // THE_GRAVITATIONAL_VISION]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Building the Gravitational Core for Tomorrow&apos;s Decentralized Web
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            We are architects, researchers, and engineers pioneering a unified multi-orbit ecosystem.
            Our mission is to eliminate protocol fragmentation by creating a frictionless gravitational network.
          </p>
        </div>

        {/* Core Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center">
          {/* Left Large Vision Banner */}
          <div className="lg:col-span-6 glass-panel-glow p-8 sm:p-10 rounded-3xl border border-cyan-500/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 font-mono text-xs mb-6 border border-cyan-800/40">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE ECOSYSTEM MANIFESTO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">
              Why A Solar System Design?
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
              Monolithic blockchains force all applications to compete for the same execution lane.
              Our solar architecture isolates each service into its own sovereign orbit while remaining
              tethered to a shared, high-security gravitational consensus core.
            </p>

            <div className="space-y-3 font-mono text-xs text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero bandwidth congestion between independent subnets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Instant cross-orbit telepathy communication</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
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
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-1 border border-cyan-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Ecosystem Stewards Matrix */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="blueprint-tag text-cyan-400 inline-block mb-2">
                [CORE_STEWARDS // TEAM_SLOTS]
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ecosystem Architects & Contributors
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Ready for client team customization
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamSlots.map((member, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                      {member.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-zinc-400" />
                  </div>

                  <h4 className="text-base font-bold text-white mb-0.5">{member.name}</h4>
                  <div className="text-xs font-mono text-cyan-300 mb-2">{member.role}</div>
                  <p className="text-xs text-zinc-400">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
