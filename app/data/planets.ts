import {
  Zap,
  Cpu,
  Coins,
  Bot,
  Network,
  Vote,
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
    name: "Core Hub (Nexus)",
    role: "Central Consensus & Security",
    tagline: "The gravitational anchor powering security and state settlement.",
    category: "L0 Consensus",
    color: "#ffaa00",
    glowColor: "#ff4400",
    size: 2.3,
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
    color: "#00f0ff",
    glowColor: "#0088ff",
    size: 0.85,
    distance: 6.0,
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
    name: "Liquidity Orbit",
    role: "DeFi & Automated Vaults",
    tagline: "Universal automated market maker and cross-pool liquidity routing.",
    category: "Economic Engine",
    color: "#10b981",
    glowColor: "#059669",
    size: 1.15,
    distance: 10.0,
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
    name: "AI Agent Orbit",
    role: "Autonomous Intelligence Subnet",
    tagline: "On-chain intelligence layer for autonomous bots and decentralized ML.",
    category: "AI Infrastructure",
    color: "#a855f7",
    glowColor: "#7e22ce",
    size: 1.35,
    distance: 14.5,
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
    name: "Bridge Orbit",
    role: "Cross-Chain Telepathy Relay",
    tagline: "Trustless light-client messaging connecting heterogeneous networks.",
    category: "Interoperability",
    color: "#f59e0b",
    glowColor: "#d97706",
    size: 1.0,
    distance: 19.0,
    speed: 0.005,
    summary: "Cryptographic relay mesh enabling trustless asset transfers and remote smart contract execution across EVM, Solana, and Cosmos networks.",
    keyFeatures: [
      "Light-client state verification proofs",
      "Multi-party computation (MPC) threshold security",
      "Single-transaction cross-chain routing",
    ],
    metrics: [
      { label: "Connected Chains", value: "14 Networks" },
      { label: "Transfer Time", value: "< 2.5s" },
      { label: "Security Bond", value: "$100M Bonded" },
    ],
    status: "ACTIVE TESTNET",
    icon: Network,
  },
  {
    id: "governance",
    name: "Governance Orbit",
    role: "DAO & Treasury Matrix",
    tagline: "Decentralized quadratic voting and community capital allocation.",
    category: "DAO & Governance",
    color: "#ec4899",
    glowColor: "#be185d",
    size: 0.95,
    distance: 23.5,
    speed: 0.0035,
    summary: "Community-led stewardship platform utilizing quadratic voting, timelocked proposal execution, and milestone-based ecosystem grant distribution.",
    keyFeatures: [
      "Sybil-resistant quadratic voting engine",
      "Automated on-chain timelock execution",
      "$25M DAO treasury capital allocation",
    ],
    metrics: [
      { label: "Treasury Pool", value: "$25M Pool" },
      { label: "Voter Turnout", value: "84.2%" },
      { label: "Proposals Passed", value: "48" },
    ],
    status: "COMMUNITY STAGE",
    icon: Vote,
  },
];
