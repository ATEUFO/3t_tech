"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom 3D isometric & orbital illustration for 3T Global Tech.
 * Animated with GSAP (floating depth layers, orbital pulse, and reduced-motion support).
 */
export function TechEcosystem3D({ className = "" }: { className?: string }) {
  const rootRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = rootRef.current;
    if (!svg) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Central isometric core levitation
        gsap.to(".iso-core", {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Floating 3D satellite cards with staggered phases
        gsap.to(".iso-node-1", {
          y: -12,
          x: 4,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".iso-node-2", {
          y: 10,
          x: -5,
          duration: 3.1,
          delay: 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".iso-node-3", {
          y: -8,
          x: -4,
          duration: 2.4,
          delay: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Subtle orbital ring rotation
        gsap.to(".iso-orbit", {
          rotation: 360,
          transformOrigin: "260px 210px",
          duration: 28,
          repeat: -1,
          ease: "none",
        });

        // Data pulse along connection lines
        gsap.to(".iso-pulse", {
          strokeDashoffset: -32,
          duration: 1.8,
          repeat: -1,
          ease: "none",
        });
      }, svg);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration 3D de l'écosystème technologique 3T Tech"
    >
      <defs>
        <linearGradient id="coreTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="coreLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
        <linearGradient id="coreRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="basePlate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27272a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#18181b" stopOpacity="0.95" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#f97316" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Isometric Base Grid Platform */}
      <g opacity="0.9">
        <polygon
          points="260,310 430,225 260,140 90,225"
          fill="url(#basePlate)"
          stroke="#f97316"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        <polygon
          points="90,225 260,310 260,328 90,243"
          fill="#09090b"
          stroke="#f97316"
          strokeOpacity="0.15"
        />
        <polygon
          points="430,225 260,310 260,328 430,243"
          fill="#18181b"
          stroke="#f97316"
          strokeOpacity="0.15"
        />
        {/* Subtle isometric grid lines */}
        <path
          d="M175 182.5 L345 267.5 M132 204 L302 289 M217 161 L387 246 M175 267.5 L345 182.5 M132 246 L302 161 M217 289 L387 204"
          stroke="#ffffff"
          strokeOpacity="0.05"
          strokeWidth="1"
        />
      </g>

      {/* Orbiting Dashed Ring */}
      <g className="iso-orbit" opacity="0.45">
        <ellipse
          cx="260"
          cy="210"
          rx="165"
          ry="82"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
      </g>

      {/* Animated Data Beams connecting core to 3D nodes */}
      <g strokeWidth="2" strokeLinecap="round">
        <path
          d="M260 205 L125 130"
          stroke="#f97316"
          strokeOpacity="0.6"
          strokeDasharray="8 8"
          className="iso-pulse"
        />
        <path
          d="M260 205 L395 130"
          stroke="#10b981"
          strokeOpacity="0.6"
          strokeDasharray="8 8"
          className="iso-pulse"
        />
        <path
          d="M260 215 L260 335"
          stroke="#06b6d4"
          strokeOpacity="0.6"
          strokeDasharray="8 8"
          className="iso-pulse"
        />
      </g>

      {/* Central 3D Isometric Cube (3T Core) */}
      <g className="iso-core" filter="url(#softShadow)">
        {/* Top face */}
        <polygon points="260,128 326,162 260,196 194,162" fill="url(#coreTop)" />
        {/* Left face */}
        <polygon points="194,162 260,196 260,264 194,230" fill="url(#coreLeft)" />
        {/* Right face */}
        <polygon points="326,162 260,196 260,264 326,230" fill="url(#coreRight)" />
        {/* Inner wireframe highlight */}
        <polygon
          points="260,142 308,166 260,190 212,166"
          fill="none"
          stroke="#fff7ed"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        <text
          x="260"
          y="171"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="16"
          fontWeight="900"
          letterSpacing="1"
        >
          3T
        </text>
      </g>

      {/* 3D Satellite Node 1: JobbersFind (Services) */}
      <g className="iso-node-1">
        <polygon
          points="125,95 170,118 125,141 80,118"
          fill="#fb923c"
          stroke="#ffedd5"
          strokeWidth="1"
        />
        <polygon points="80,118 125,141 125,162 80,139" fill="#c2410c" />
        <polygon points="170,118 125,141 125,162 170,139" fill="#ea580c" />
        <text x="125" y="83" textAnchor="middle" fill="#fdba74" fontSize="11" fontWeight="700">
          SERVICES
        </text>
      </g>

      {/* 3D Satellite Node 2: MboaCash (Fintech) */}
      <g className="iso-node-2">
        <polygon
          points="395,95 440,118 395,141 350,118"
          fill="#34d399"
          stroke="#d1fae5"
          strokeWidth="1"
        />
        <polygon points="350,118 395,141 395,162 350,139" fill="#047857" />
        <polygon points="440,118 395,141 395,162 440,139" fill="#059669" />
        <text x="395" y="83" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700">
          FINTECH
        </text>
      </g>

      {/* 3D Satellite Node 3: SomniAlert (IoT & IA) */}
      <g className="iso-node-3">
        <polygon
          points="260,315 308,339 260,363 212,339"
          fill="#22d3ee"
          stroke="#cffafe"
          strokeWidth="1"
        />
        <polygon points="212,339 260,363 260,384 212,360" fill="#0e7490" />
        <polygon points="308,339 260,363 260,384 308,360" fill="#0891b2" />
        <text x="260" y="405" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="700">
          IA &amp; IOT EMBARQUÉ
        </text>
      </g>
    </svg>
  );
}
