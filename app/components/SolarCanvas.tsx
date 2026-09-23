"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { PLANETS, type PlanetData } from "../data/planets";

interface SolarCanvasProps {
  hasExplored: boolean;
  isRotating: boolean;
  orbitSpeedFactor: number;
  onSelectPlanet: (planet: PlanetData) => void;
  onHoverPlanet: (planet: PlanetData | null) => void;
}

export function SolarCanvas({
  hasExplored,
  isRotating,
  orbitSpeedFactor,
  onSelectPlanet,
  onHoverPlanet,
}: SolarCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  // References for Three.js animation loop & objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const planetMeshesRef = useRef<{ mesh: THREE.Mesh; data: PlanetData; angle: number; orbitLine: THREE.Line }[]>([]);
  const sunMeshRef = useRef<THREE.Mesh | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());

  // Camera targets for smooth cinematic swooping
  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 48, 65));
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
    camera.position.set(0, 48, 65);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.replaceChildren(renderer.domElement);
    rendererRef.current = renderer;

    // 3. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const sunPointLight = new THREE.PointLight(0xffeedd, 3.5, 120);
    sunPointLight.position.set(0, 0, 0);
    scene.add(sunPointLight);

    // 4. STARFIELD BACKGROUND
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

    // 5. CENTRAL SUN (Core Nexus)
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

    // Glowing Halo Sphere
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

      const initialAngle = (index / (PLANETS.length - 1)) * Math.PI * 2;
      planetMesh.position.set(
        Math.cos(initialAngle) * planet.distance,
        0,
        Math.sin(initialAngle) * planet.distance
      );
      planetMesh.userData = { planetData: planet };

      // Optional Planetary Ring
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
          onHoverPlanet(hitObject.userData.planetData);
          container.style.cursor = "pointer";
          return;
        }
      }
      onHoverPlanet(null);
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
          onSelectPlanet(hitObject.userData.planetData);
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

    // 9. ANIMATION LOOP
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Interpolate camera smoothly towards target
      camera.position.lerp(targetCameraPos.current, 0.04);
      currentLookAt.current.lerp(targetLookAt.current, 0.04);
      camera.lookAt(currentLookAt.current);

      // Sun rotation
      if (sunMeshRef.current) {
        sunMeshRef.current.rotation.y += 0.005;
      }

      // Starfield drift
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
  }, [isRotating, orbitSpeedFactor, onHoverPlanet, onSelectPlanet]);

  // Adjust camera target based on Explore state
  useEffect(() => {
    if (hasExplored) {
      targetCameraPos.current.set(0, 22, 34);
      targetLookAt.current.set(0, 0, 0);
    } else {
      targetCameraPos.current.set(0, 48, 65);
      targetLookAt.current.set(0, 0, 0);
    }
  }, [hasExplored]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
}
