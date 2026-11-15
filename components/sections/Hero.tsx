"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, SplitText } from "@/lib/gsap";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Tilt3D } from "@/components/ui/tilt-3d";
import { HeroSpatialOrbits } from "@/components/illustrations/HeroSpatialOrbits";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleEl = titleRef.current;
    if (!section || !titleEl) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        let split: SplitText | null = null;

        try {
          split = new SplitText(titleEl, {
            type: "chars",
            charsClass:
              "inline-block bg-gradient-to-br from-zinc-900 via-orange-600 to-amber-500 bg-clip-text text-transparent",
          });
        } catch {
          split = null;
        }

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        // 1. 3D Logo entrance
        tl.from(logoRef.current, {
          opacity: 0,
          y: -36,
          scale: 0.78,
          rotationX: 35,
          transformPerspective: 900,
          duration: 0.9,
        });

        // 2. 3D SplitText character reveal (from ui-ux-pro-max GSAP preset)
        if (split && split.chars.length > 0) {
          tl.from(
            split.chars,
            {
              opacity: 0,
              y: 28,
              rotateX: -65,
              transformPerspective: 800,
              transformOrigin: "50% 50% -25px",
              duration: 0.65,
              stagger: 0.035,
            },
            "-=0.5"
          );
        } else {
          tl.from(
            titleEl,
            { opacity: 0, y: 24, rotateX: -30, duration: 0.65 },
            "-=0.5"
          );
        }

        // 3. Underline draw
        tl.from(
          underlineRef.current,
          { scaleX: 0, transformOrigin: "left center", duration: 0.65 },
          "-=0.35"
        );

        // 4. Tagline + CTA
        tl.from(
          taglineRef.current,
          { opacity: 0, y: 18, duration: 0.55, ease: "power2.out" },
          "-=0.35"
        ).from(
          ctaRef.current,
          { opacity: 0, y: 16, scale: 0.95, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

        // 5. Scroll parallax depth as the user scrolls past Hero
        gsap.to(contentRef.current, {
          yPercent: -14,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        return () => {
          split?.revert();
        };
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="w-full relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black"
    >
      {/* ── Background identique à la section Produits ── */}
      <div className="absolute inset-0 z-0">
        <GlyphMatrix className="opacity-20" color="#f97316" />
        <NoiseTexture className="opacity-40 mix-blend-overlay" />
      </div>

      {/* ── 3D Floating Geometric Illustrations ── */}
      <HeroSpatialOrbits />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto gap-10"
        style={{ perspective: "1200px" }}
      >
        {/* Logo agrandi dans un conteneur Tilt3D */}
        <div ref={logoRef}>
          <Tilt3D maxTilt={14} scale={1.06} className="cursor-pointer">
            <div style={{ transform: "translateZ(35px)" }}>
              <Image
                src="/assets/3T.Tech_Logo_.svg"
                alt="3T Tech Logo"
                width={180}
                height={180}
                loading="eager"
                className="relative drop-shadow-xl"
              />
            </div>
          </Tilt3D>
        </div>

        {/* Titre avec animation 3D SplitText */}
        <div className="relative" style={{ perspective: "900px" }}>
          <h1
            ref={titleRef}
            className="relative text-7xl md:text-9xl font-black tracking-tighter leading-none select-none bg-gradient-to-br from-zinc-900 via-orange-600 to-amber-500 bg-clip-text text-transparent"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            3T Tech
          </h1>

          <div
            ref={underlineRef}
            className="h-1 mt-2 mx-auto w-2/3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
          />
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium max-w-2xl leading-relaxed"
        >
          Un collectif de passionnés d&apos;informatique et de sécurité, unis pour construire
          l&apos;avenir de la technologie.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
          <InteractiveHoverButton
            className="text-base bg-orange-500 text-white border-orange-600 hover:bg-orange-600 px-8 py-3 shadow-lg shadow-orange-500/20"
            onClick={() =>
              document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Découvrir notre vision
          </InteractiveHoverButton>

          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-orange-600 transition-colors flex items-center gap-2 group px-4 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Voir nos solutions
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-orange-500" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex items-start justify-center pt-1.5 bg-white/60 dark:bg-black/60 backdrop-blur-sm shadow-sm animate-bounce">
          <div className="w-1.5 h-2 rounded-full bg-orange-500" />
        </div>
      </div>
    </section>
  );
}
