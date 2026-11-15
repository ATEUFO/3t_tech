"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * 3D floating geometric & isometric accents for the Hero section.
 * Reacts to pointer movement with GSAP quickTo for multi-layer spatial depth.
 */
export function HeroSpatialOrbits() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();
    let cleanup: (() => void) | undefined;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Gentle continuous 3D floating on each geometric badge
        gsap.to(".hero-float-slow", {
          y: -16,
          rotationZ: 6,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.5,
        });

        gsap.to(".hero-float-reverse", {
          y: 14,
          rotationZ: -8,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.6,
        });

        // Pointer parallax across depth layers
        const layers = gsap.utils.toArray<HTMLElement>(".hero-depth-layer");
        const setters = layers.map((layer) => ({
          x: gsap.quickTo(layer, "x", { duration: 0.6, ease: "power2.out" }),
          y: gsap.quickTo(layer, "y", { duration: 0.6, ease: "power2.out" }),
          depth: Number(layer.dataset.depth || 20),
        }));

        const onPointerMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          setters.forEach(({ x, y, depth }) => {
            x(nx * depth);
            y(ny * depth);
          });
        };

        window.addEventListener("pointermove", onPointerMove);
        cleanup = () => window.removeEventListener("pointermove", onPointerMove);
      }, container);

      return () => {
        cleanup?.();
        ctx.revert();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-[2]"
    >
      {/* Top-left isometric wireframe cube */}
      <div
        data-depth="-35"
        className="hero-depth-layer hidden md:block absolute top-[16%] left-[8%] opacity-75"
      >
        <svg
          width="92"
          height="92"
          viewBox="0 0 100 100"
          fill="none"
          className="hero-float-slow drop-shadow-md"
        >
          <polygon
            points="50,10 88,30 50,50 12,30"
            fill="#ffedd5"
            stroke="#f97316"
            strokeWidth="1.5"
          />
          <polygon
            points="12,30 50,50 50,90 12,70"
            fill="#fed7aa"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          <polygon
            points="88,30 50,50 50,90 88,70"
            fill="#fb923c"
            fillOpacity="0.45"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Top-right 3D orbital ring + sphere */}
      <div
        data-depth="40"
        className="hero-depth-layer hidden md:block absolute top-[18%] right-[9%] opacity-80"
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 120 120"
          fill="none"
          className="hero-float-reverse drop-shadow-md"
        >
          <defs>
            <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="55%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#9a3412" />
            </radialGradient>
          </defs>
          <ellipse
            cx="60"
            cy="60"
            rx="50"
            ry="18"
            transform="rotate(-22 60 60)"
            stroke="#f97316"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          <circle cx="60" cy="60" r="22" fill="url(#sphereGrad)" />
          <circle cx="96" cy="46" r="5" fill="#fb923c" />
        </svg>
      </div>

      {/* Bottom-left floating 3D prism */}
      <div
        data-depth="28"
        className="hero-depth-layer hidden lg:block absolute bottom-[18%] left-[12%] opacity-70"
      >
        <svg
          width="76"
          height="76"
          viewBox="0 0 80 80"
          fill="none"
          className="hero-float-reverse drop-shadow-sm"
        >
          <polygon points="40,8 70,58 40,72" fill="#f97316" fillOpacity="0.3" stroke="#ea580c" strokeWidth="1.5" />
          <polygon points="40,8 10,58 40,72" fill="#ffedd5" stroke="#f97316" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom-right floating isometric stack */}
      <div
        data-depth="-30"
        className="hero-depth-layer hidden lg:block absolute bottom-[20%] right-[11%] opacity-75"
      >
        <svg
          width="88"
          height="88"
          viewBox="0 0 90 90"
          fill="none"
          className="hero-float-slow drop-shadow-md"
        >
          <polygon points="45,46 80,62 45,78 10,62" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1.2" />
          <polygon points="45,30 80,46 45,62 10,46" fill="#fed7aa" stroke="#f97316" strokeWidth="1.4" />
          <polygon points="45,14 80,30 45,46 10,30" fill="#fb923c" fillOpacity="0.85" stroke="#ea580c" strokeWidth="1.4" />
        </svg>
      </div>
    </div>
  );
}
