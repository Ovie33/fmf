import {
  Zap,
  Cpu,
  Coins,
  Bot,
  Network,
  type LucideIcon,
} from "lucide-react";

export interface PlanetData {
  id: string;
  name: string;
  role: string;
  tagline: string;
  category: string;
  color: string;
  glowColor: string;
  size: number;
  distance: number;
  speed: number;
  hasRing?: boolean;
  ringColor?: string;
  summary: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  status: string;
  icon: LucideIcon;
}

export const PLANETS: PlanetData[] = [
  {
    id: "core",
    name: "Freeman Nexus (Core Hub)",
    role: "Central Consensus & Security",
    tagline: "The gravitational anchor powering security and state settlement for Freeman Firms.",
    category: "L0 Consensus",
    color: "#c084fc",
    glowColor: "#7e22ce",
    size: 2.2,
    distance: 0,
    speed: 0.004,
    summary: "Decentralized cryptographic anchor coordinating state transitions, global clock synchronization, and ZK validity proofs across all orbital services.",
    keyFeatures: [
      "Sub-second deterministic state finality",
      "Zero-Knowledge state compression",
      "Sovereign validator network coordination",
    ],
    metrics: [
      { label: "Finality", value: "350ms" },
      { label: "Consensus", value: "BFT-PoS + ZK" },
      { label: "Active Nodes", value: "4,800+" },
    ],
    status: "ACTIVE CORE",
    icon: Zap,
  },
  {
    id: "compute",
    name: "Compute Orbit",
    role: "Parallel Execution VM",
    tagline: "High-throughput smart contract pipelines and zero-latency execution.",
    category: "Compute Engine",
    color: "#a855f7",
    glowColor: "#6b21a8",
    size: 0.9,
    distance: 6.5,
    speed: 0.014,
    summary: "Multi-threaded virtual machine executing non-conflicting transactions in parallel, achieving extreme throughput with predictable micro-cent fees.",
    keyFeatures: [
      "Parallel EVM + WASM execution runtime",
      "Software Transactional Memory (STM)",
      "Dynamic state pipelining",
    ],
    metrics: [
      { label: "Throughput", value: "125,000 TPS" },
      { label: "Avg Gas Fee", value: "< $0.0001" },
      { label: "Execution Cores", value: "64 Parallel" },
    ],
    status: "OPTIMIZED",
    icon: Cpu,
  },
  {
    id: "liquidity",
    name: "Capital & Liquidity Orbit",
    role: "DeFi & Automated Vaults",
    tagline: "Universal automated market maker and institutional liquidity routing.",
    category: "Economic Engine",
    color: "#cbd5e1",
    glowColor: "#94a3b8",
    size: 1.2,
    distance: 11.5,
    speed: 0.01,
    summary: "Concentrated liquidity engine with algorithmic market-making, dynamic swap fees, and risk-mitigated multi-collateral vaults.",
    keyFeatures: [
      "Concentrated liquidity & Limit Order AMM",
      "Zero-slippage cross-asset router",
      "Automated yield rebalancing vaults",
    ],
    metrics: [
      { label: "Target TVL", value: "$350M+" },
      { label: "Pool Pairs", value: "120+ Active" },
      { label: "Slippage", value: "0.01% Flat" },
    ],
    status: "INTEGRATION READY",
    icon: Coins,
  },
  {
    id: "ai",
    name: "Freeman AI Agent Orbit",
    role: "Autonomous Intelligence Subnet",
    tagline: "On-chain intelligence layer for autonomous bots and decentralized ML.",
    category: "AI Infrastructure",
    color: "#9333ea",
    glowColor: "#581c87",
    size: 1.35,
    distance: 16.5,
    speed: 0.007,
    hasRing: true,
    ringColor: "#c084fc",
    summary: "Decentralized inference subnet allowing developers to deploy autonomous AI agents that make verifiable decisions and trigger on-chain actions.",
    keyFeatures: [
      "Verifiable on-chain GPU inference engine",
      "Agent-to-Agent autonomous negotiation protocol",
      "ZK-ML model evaluation & verification",
    ],
    metrics: [
      { label: "Compute Mesh", value: "2.4 PFLOPS" },
      { label: "Active Agents", value: "1,200+" },
      { label: "Inference Latency", value: "45ms" },
    ],
    status: "BETA ACCESS",
    icon: Bot,
  },
  {
    id: "bridge",
    name: "Bridge & Governance Orbit",
    role: "Cross-Chain & DAO Matrix",
    tagline: "Trustless multi-chain telepathy messaging and decentralized governance.",
    category: "Interoperability & DAO",
    color: "#e879f9",
    glowColor: "#c026d3",
    size: 1.1,
    distance: 21.5,
    speed: 0.005,
    summary: "Cryptographic relay mesh enabling trustless asset transfers, remote contract execution, and decentralized quadratic voting.",
    keyFeatures: [
      "Light-client state verification proofs",
      "Multi-party computation (MPC) threshold security",
      "Quadratic DAO proposal execution & treasury voting",
    ],
    metrics: [
      { label: "Connected Chains", value: "14 Networks" },
      { label: "Transfer Time", value: "< 2.5s" },
      { label: "DAO Treasury", value: "$25M Pool" },
    ],
    status: "ACTIVE TESTNET",
    icon: Network,
  },
];
