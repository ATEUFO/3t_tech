"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

function useLooping3DMotion(svgRef: React.RefObject<SVGSVGElement | null>) {
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.to(".p3d-float", {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.35,
        });

        gsap.to(".p3d-pulse", {
          strokeDashoffset: -32,
          duration: 1.8,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".p3d-ring", {
          scale: 1.25,
          opacity: 0,
          transformOrigin: "center center",
          duration: 2.2,
          repeat: -1,
          ease: "power1.out",
          stagger: 0.6,
        });
      }, svg);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [svgRef]);
}

export function JobbersFind3D({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  useLooping3DMotion(ref);

  return (
    <svg
      ref={ref}
      viewBox="0 0 460 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration 3D JobbersFind géolocalisation et artisans certifiés"
    >
      {/* Isometric Map Platform */}
      <polygon
        points="230,275 410,185 230,95 50,185"
        fill="#fff7ed"
        stroke="#f97316"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <polygon points="50,185 230,275 230,292 50,202" fill="#fed7aa" />
      <polygon points="410,185 230,275 230,292 410,202" fill="#fdba74" />

      {/* Map Grid Lines */}
      <path
        d="M140 140 L320 230 M95 162.5 L275 252.5 M185 117.5 L365 207.5 M140 230 L320 140 M95 207.5 L275 117.5 M185 252.5 L365 162.5"
        stroke="#f97316"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* Radar Pulse Rings */}
      <ellipse
        cx="230"
        cy="185"
        rx="70"
        ry="35"
        stroke="#f97316"
        strokeWidth="2"
        className="p3d-ring"
      />
      <ellipse
        cx="230"
        cy="185"
        rx="45"
        ry="22"
        stroke="#ea580c"
        strokeWidth="2"
        className="p3d-ring"
      />

      {/* Connection Beams */}
      <path
        d="M230 185 L145 142"
        stroke="#ea580c"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="p3d-pulse"
      />
      <path
        d="M230 185 L318 145"
        stroke="#ea580c"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="p3d-pulse"
      />

      {/* Central 3D Pin (Client) */}
      <g className="p3d-float">
        <path
          d="M230 75 C208 75 190 93 190 115 C190 145 230 182 230 182 C230 182 270 145 270 115 C270 93 252 75 230 75 Z"
          fill="#f97316"
          stroke="#ffffff"
          strokeWidth="2.5"
        />
        <circle cx="230" cy="115" r="14" fill="#ffffff" />
        <circle cx="230" cy="115" r="6" fill="#ea580c" />
      </g>

      {/* Left 3D Artisan Node */}
      <g className="p3d-float">
        <polygon points="145,105 178,121 145,137 112,121" fill="#fb923c" />
        <polygon points="112,121 145,137 145,153 112,137" fill="#c2410c" />
        <polygon points="178,121 145,137 145,153 178,137" fill="#ea580c" />
        <text x="145" y="96" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="800">
          ARTISAN 1-3 KM
        </text>
      </g>

      {/* Right 3D Verified Badge */}
      <g className="p3d-float">
        <polygon points="318,108 352,125 318,142 284,125" fill="#10b981" />
        <polygon points="284,125 318,142 318,158 284,141" fill="#047857" />
        <polygon points="352,125 318,142 318,158 352,141" fill="#059669" />
        <text x="318" y="99" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="800">
          CERTIFIÉ ✓
        </text>
      </g>
    </svg>
  );
}

export function MboaCash3D({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  useLooping3DMotion(ref);

  return (
    <svg
      ref={ref}
      viewBox="0 0 460 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration 3D MboaCash séquestre numérique sécurisé"
    >
      {/* Isometric Base */}
      <polygon
        points="230,275 410,185 230,95 50,185"
        fill="#ecfdf5"
        stroke="#10b981"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <polygon points="50,185 230,275 230,292 50,202" fill="#a7f3d0" />
      <polygon points="410,185 230,275 230,292 410,202" fill="#6ee7b7" />

      {/* Encrypted Flow Lines */}
      <path
        d="M125 148 L230 185 L335 148"
        stroke="#059669"
        strokeWidth="2.5"
        strokeDasharray="8 6"
        className="p3d-pulse"
      />

      {/* Central 3D Escrow Vault Cube */}
      <g className="p3d-float">
        <polygon points="230,92 292,123 230,154 168,123" fill="#34d399" />
        <polygon points="168,123 230,154 230,218 168,187" fill="#047857" />
        <polygon points="292,123 230,154 230,218 292,187" fill="#059669" />
        {/* Lock glyph */}
        <rect x="218" y="114" width="24" height="18" rx="4" fill="#ffffff" />
        <path d="M223 114 V108 A7 7 0 0 1 237 108 V114" stroke="#ffffff" strokeWidth="3" fill="none" />
        <text x="230" y="79" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="900">
          SÉQUESTRE 100%
        </text>
      </g>

      {/* Buyer 3D Node */}
      <g className="p3d-float">
        <polygon points="118,124 156,143 118,162 80,143" fill="#38bdf8" />
        <polygon points="80,143 118,162 118,178 80,159" fill="#0369a1" />
        <polygon points="156,143 118,162 118,178 156,159" fill="#0284c7" />
        <text x="118" y="115" textAnchor="middle" fill="#0c4a6e" fontSize="10" fontWeight="800">
          ACHETEUR
        </text>
      </g>

      {/* Seller 3D Node */}
      <g className="p3d-float">
        <polygon points="342,124 380,143 342,162 304,143" fill="#fbbf24" />
        <polygon points="304,143 342,162 342,178 304,159" fill="#b45309" />
        <polygon points="380,143 342,162 342,178 380,159" fill="#d97706" />
        <text x="342" y="115" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="800">
          VENDEUR
        </text>
      </g>
    </svg>
  );
}

export function SomniAlert3D({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  useLooping3DMotion(ref);

  return (
    <svg
      ref={ref}
      viewBox="0 0 460 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration 3D SomniAlert détection IA embarquée et GNSS"
    >
      {/* Isometric Road Base */}
      <polygon
        points="230,285 420,190 230,95 40,190"
        fill="#0f172a"
        stroke="#06b6d4"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <polygon points="40,190 230,285 230,302 40,207" fill="#020617" />
      <polygon points="420,190 230,285 230,302 420,207" fill="#1e293b" />

      {/* Road Lane Dashed Line */}
      <path
        d="M115 227 L345 112"
        stroke="#38bdf8"
        strokeOpacity="0.45"
        strokeWidth="3"
        strokeDasharray="10 10"
        className="p3d-pulse"
      />

      {/* IR Scan Cone */}
      <polygon points="230,185 170,130 290,130" fill="#22d3ee" fillOpacity="0.18" />

      {/* 3D Isometric Vehicle Module */}
      <g className="p3d-float">
        <polygon points="230,145 296,178 230,211 164,178" fill="#06b6d4" />
        <polygon points="164,178 230,211 230,238 164,205" fill="#0e7490" />
        <polygon points="296,178 230,211 230,238 296,205" fill="#0891b2" />
        {/* Cabin top */}
        <polygon points="230,124 270,144 230,164 190,144" fill="#67e8f9" />
        <polygon points="190,144 230,164 230,180 190,160" fill="#0891b2" />
        <polygon points="270,144 230,164 230,180 270,160" fill="#22d3ee" />
      </g>

      {/* Orbiting GNSS Satellite */}
      <g className="p3d-float">
        <path
          d="M340 82 L230 145"
          stroke="#22d3ee"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="p3d-pulse"
        />
        <rect x="326" y="64" width="28" height="16" rx="4" fill="#22d3ee" />
        <rect x="308" y="67" width="14" height="10" rx="2" fill="#0284c7" />
        <rect x="358" y="67" width="14" height="10" rx="2" fill="#0284c7" />
        <text x="340" y="54" textAnchor="middle" fill="#67e8f9" fontSize="10" fontWeight="800">
          GNSS SAT
        </text>
      </g>

      {/* Edge AI Alert Node */}
      <g className="p3d-float">
        <circle cx="122" cy="112" r="22" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="1.5" />
        <text x="122" y="116" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="900">
          &lt; 2s IA
        </text>
      </g>
    </svg>
  );
}
