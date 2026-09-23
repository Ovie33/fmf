"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  Sparkles,
  ChevronRight,
  RefreshCw,
  Orbit,
  Cpu,
  Coins,
  Bot,
  Network,
  Vote,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  Eye,
  Sliders,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

// Service / Planet definition
interface PlanetData {
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
  icon: any;
}

const PLANETS: PlanetData[] = [
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
      "Sovereign validator network coordination"
    ],
    metrics: [
      { label: "Finality", value: "350ms" },
      { label: "Consensus", value: "BFT-PoS + ZK" },
      { label: "Active Nodes", value: "4,800+" }
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
      "Dynamic state pipelining"
    ],
    metrics: [
      { label: "Throughput", value: "125,000 TPS" },
      { label: "Avg Gas Fee", value: "< $0.0001" },
      { label: "Execution Cores", value: "64 Parallel" }
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
    speed: 0.010,
    summary: "Concentrated liquidity engine with algorithmic market-making, dynamic swap fees, and risk-mitigated multi-collateral vaults.",
    keyFeatures: [
      "Concentrated liquidity & Limit Order AMM",
      "Zero-slippage cross-asset router",
      "Automated yield rebalancing vaults"
    ],
    metrics: [
      { label: "Target TVL", value: "$350M+" },
      { label: "Pool Pairs", value: "120+ Active" },
      { label: "Slippage", value: "0.01% Flat" }
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
      "ZK-ML model evaluation & verification"
    ],
    metrics: [
      { label: "Compute Mesh", value: "2.4 PFLOPS" },
      { label: "Active Agents", value: "1,200+" },
      { label: "Inference Latency", value: "45ms" }
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
      "Single-transaction cross-chain routing"
    ],
    metrics: [
      { label: "Connected Chains", value: "14 Networks" },
      { label: "Transfer Time", value: "< 2.5s" },
      { label: "Security Bond", value: "$100M Bonded" }
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
      "$25M DAO treasury capital allocation"
    ],
    metrics: [
      { label: "Treasury Pool", value: "$25M Pool" },
      { label: "Voter Turnout", value: "84.2%" },
      { label: "Proposals Passed", value: "48" }
    ],
    status: "COMMUNITY STAGE",
    icon: Vote,
  },
];

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Sketch State: Explore screen transition
  const [hasExplored, setHasExplored] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData>(PLANETS[0]);
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [orbitSpeedFactor, setOrbitSpeedFactor] = useState(1);

  // References for Three.js animation and camera transitions
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const planetMeshesRef = useRef<{ mesh: THREE.Mesh; data: PlanetData; angle: number; orbitLine: THREE.Line }[]>([]);
  const sunMeshRef = useRef<THREE.Mesh | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());

  // Target camera positions for smooth transition
  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 45, 60));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Initial camera position (far overview for intro)
    camera.position.set(0, 50, 70);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.replaceChildren(renderer.domElement);
    rendererRef.current = renderer;

    // 3. LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const sunPointLight = new THREE.PointLight(0xffeedd, 3.5, 120);
    sunPointLight.position.set(0, 0, 0);
    scene.add(sunPointLight);

    // 4. STARFIELD BACKGROUND PARTICLES
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 200;
      starPositions[i + 1] = (Math.random() - 0.5) * 200;
      starPositions[i + 2] = (Math.random() - 0.5) * 200;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x99ccff,
      size: 0.3,
      transparent: true,
      opacity: 0.75,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 5. CENTRAL SUN (The Core)
    const sunGeom = new THREE.SphereGeometry(2.3, 32, 32);
    const sunMat = new THREE.MeshStandardMaterial({
      color: 0xffbb00,
      emissive: 0xff6600,
      emissiveIntensity: 1.3,
      roughness: 0.2,
      metalness: 0.1,
    });
    const sun = new THREE.Mesh(sunGeom, sunMat);
    sun.userData = { planetData: PLANETS[0] };
    scene.add(sun);
    sunMeshRef.current = sun;

    // Sun Glow Halo Sphere
    const haloGeom = new THREE.SphereGeometry(2.8, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide,
    });
    const halo = new THREE.Mesh(haloGeom, haloMat);
    sun.add(halo);

    // 6. ORBITING PLANETS & ELLIPTICAL ORBITS
    planetMeshesRef.current = [];

    PLANETS.slice(1).forEach((planet, index) => {
      // Orbital Ring Line
      const orbitCurve = new THREE.EllipseCurve(0, 0, planet.distance, planet.distance, 0, 2 * Math.PI, false, 0);
      const points = orbitCurve.getPoints(120);
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(
        points.map((p) => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(planet.color),
        transparent: true,
        opacity: 0.25,
      });
      const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
      scene.add(orbitLine);

      // Planet Sphere
      const planetGeom = new THREE.SphereGeometry(planet.size, 32, 32);
      const planetMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(planet.color),
        emissive: new THREE.Color(planet.glowColor),
        emissiveIntensity: 0.4,
        roughness: 0.35,
        metalness: 0.6,
      });
      const planetMesh = new THREE.Mesh(planetGeom, planetMat);

      // Distribute angles
      const initialAngle = (index / (PLANETS.length - 1)) * Math.PI * 2;
      planetMesh.position.set(
        Math.cos(initialAngle) * planet.distance,
        0,
        Math.sin(initialAngle) * planet.distance
      );
      planetMesh.userData = { planetData: planet };

      // Optional Ring (e.g. for AI Agent Orbit)
      if (planet.hasRing && planet.ringColor) {
        const ringGeom = new THREE.RingGeometry(planet.size * 1.4, planet.size * 2.3, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(planet.ringColor),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.65,
        });
        const ringMesh = new THREE.Mesh(ringGeom, ringMat);
        ringMesh.rotation.x = Math.PI / 2.3;
        planetMesh.add(ringMesh);
      }

      scene.add(planetMesh);
      planetMeshesRef.current.push({
        mesh: planetMesh,
        data: planet,
        angle: initialAngle,
        orbitLine: orbitLine,
      });
    });

    // 7. RAYCASTING & INTERACTION
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const interactiveObjects = [
        sun,
        ...planetMeshesRef.current.map((p) => p.mesh),
      ];
      const intersects = raycasterRef.current.intersectObjects(interactiveObjects, true);

      if (intersects.length > 0) {
        let hitObject = intersects[0].object;
        while (hitObject && !hitObject.userData.planetData && hitObject.parent) {
          hitObject = hitObject.parent as THREE.Mesh;
        }
        if (hitObject && hitObject.userData.planetData) {
          setHoveredPlanet(hitObject.userData.planetData);
          container.style.cursor = "pointer";
          return;
        }
      }
      setHoveredPlanet(null);
      container.style.cursor = "default";
    };

    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const interactiveObjects = [
        sun,
        ...planetMeshesRef.current.map((p) => p.mesh),
      ];
      const intersects = raycasterRef.current.intersectObjects(interactiveObjects, true);

      if (intersects.length > 0) {
        let hitObject = intersects[0].object;
        while (hitObject && !hitObject.userData.planetData && hitObject.parent) {
          hitObject = hitObject.parent as THREE.Mesh;
        }
        if (hitObject && hitObject.userData.planetData) {
          setSelectedPlanet(hitObject.userData.planetData);
        }
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    // 8. RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // 9. ANIMATION & SMOOTH CAMERA SWOOP
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation towards target position
      camera.position.lerp(targetCameraPos.current, 0.04);
      currentLookAt.current.lerp(targetLookAt.current, 0.04);
      camera.lookAt(currentLookAt.current);

      // Sun rotation
      if (sunMeshRef.current) {
        sunMeshRef.current.rotation.y += 0.005;
      }

      // Starfield slow drift
      starField.rotation.y += 0.0003;

      // Planets revolution
      planetMeshesRef.current.forEach((item) => {
        item.mesh.rotation.y += 0.02;

        if (isRotating) {
          item.angle += item.data.speed * orbitSpeedFactor;
          item.mesh.position.x = Math.cos(item.angle) * item.data.distance;
          item.mesh.position.z = Math.sin(item.angle) * item.data.distance;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      renderer.dispose();
    };
  }, [isRotating, orbitSpeedFactor]);

  // Update target camera position when user clicks Explore
  useEffect(() => {
    if (hasExplored) {
      // Swoop camera closer and into an angled 3D orbital perspective
      targetCameraPos.current.set(0, 22, 34);
      targetLookAt.current.set(0, 0, 0);
    } else {
      // Intro overview camera position
      targetCameraPos.current.set(0, 48, 65);
      targetLookAt.current.set(0, 0, 0);
    }
  }, [hasExplored]);

  const handleExploreClick = () => {
    setHasExplored(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f0f4f9] selection:bg-cyan-500/30 font-sans overflow-x-hidden relative">
      {/* 00. PITCH PROTOTYPE BANNER */}
      <div className="w-full bg-[#0a0e18] border-b border-cyan-500/20 text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-mono text-cyan-400 font-bold tracking-wider text-[11px] sm:text-xs">
              [PITCH SKELETON // SOLAR SYSTEM ECOSYSTEM]
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            {hasExplored ? (
              <button
                onClick={() => setHasExplored(false)}
                className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Return to Intro</span>
              </button>
            ) : (
              <span className="text-zinc-500">CLICK EXPLORE TO ZOOM INTO SOLAR VIEW</span>
            )}
          </div>
        </div>
      </div>

      {/* 01. FULL SCREEN 3D CANVAS VIEWPORT */}
      <div className="relative w-full h-screen">
        {/* The Three.js 3D WebGL Canvas */}
        <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />

        {/* SCREEN 1: WELCOME TO ECOSYSTEM INTRO OVERLAY (Matches user sketch) */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 pointer-events-none ${
            hasExplored
              ? "opacity-0 scale-95 translate-y-8 pointer-events-none"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs mb-6 shadow-xl backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>INTERACTIVE SKELETAL BLUEPRINT</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase leading-tight drop-shadow-2xl">
              WELCOME TO{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
                ECOSYSTEM
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-md">
              A unified solar architecture for high-speed compute, decentralized liquidity, and autonomous AI agents.
            </p>

            {/* Explore Button from Sketch */}
            <div className="pointer-events-auto">
              <button
                onClick={handleExploreClick}
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 text-black font-extrabold text-base tracking-wider transition-all shadow-2xl shadow-cyan-500/40 hover:scale-105 hover:shadow-cyan-400/60 flex items-center gap-3 mx-auto uppercase group"
              >
                <span>Explore</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* SCREEN 2: ACTIVE SOLAR SYSTEM HUD & INTERACTIVE CONTROLS (Fades in when explored) */}
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
              onClick={() => setIsRotating(!isRotating)}
              className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
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
                  onClick={() => setOrbitSpeedFactor(spd)}
                  className={`px-2 py-0.5 rounded text-[10px] ${
                    orbitSpeedFactor === spd ? "bg-cyan-500 text-black font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

          {/* Hover Tooltip in 3D Space */}
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
                  const Icon = planet.icon;
                  return (
                    <button
                      key={planet.id}
                      onClick={() => setSelectedPlanet(planet)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all shrink-0 border ${
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
                      style={{ backgroundColor: `${selectedPlanet.color}25`, border: `1px solid ${selectedPlanet.color}` }}
                    >
                      <selectedPlanet.icon className="w-5 h-5" style={{ color: selectedPlanet.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{selectedPlanet.category}</span>
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
      </div>

      {/* 02. DETAILED SKELETON SPECIFICATIONS SECTION (Scrollable below canvas) */}
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {PLANETS.map((planet) => {
              const Icon = planet.icon;
              return (
                <div
                  key={planet.id}
                  onClick={() => {
                    setSelectedPlanet(planet);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${planet.color}20`, border: `1px solid ${planet.color}40` }}
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

          {/* Pitch Strategy Box */}
          <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 text-center border border-cyan-500/30 max-w-4xl mx-auto">
            <div className="blueprint-tag text-cyan-400 inline-block mb-3">
              [PITCH_READY // CLIENT_PRESENTATION]
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Ready to Pitch the Owner This Morning
            </h3>
            <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6 leading-relaxed font-normal">
              This interactive solar system gives the client an immediate visual grasp of the ecosystem breadth.
              Once they approve the concept, we can flesh out each service with custom graphics, contracts, and APIs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Three.js 3D WebGL
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <CheckCircle2 className="w-4 h-4" /> Smooth Explore Transition
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <CheckCircle2 className="w-4 h-4" /> Live Interactive Planets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FOOTER */}
      <footer className="border-t border-white/10 bg-[#05070c] py-8 text-zinc-500 text-xs font-mono text-center">
        <p>© {new Date().getFullYear()} Solar Ecosystem Architectural Skeleton. Ready for pitch review.</p>
      </footer>
    </div>
  );
}
