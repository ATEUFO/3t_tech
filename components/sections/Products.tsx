"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { Tilt3D } from "@/components/ui/tilt-3d";
import { products } from "@/lib/data/products";
import { ArrowRight, Sparkles, Shield, Cpu, Briefcase } from "lucide-react";

export function Products() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".products-header-item", {
          opacity: 0,
          y: 24,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".products-header",
            start: "top 85%",
          },
        });

        gsap.from(".product-card-3d", {
          opacity: 0,
          y: 48,
          rotateX: 22,
          scale: 0.94,
          transformPerspective: 1100,
          duration: 0.75,
          stagger: 0.14,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 85%",
          },
        });
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const getProductIcon = (id: string) => {
    switch (id) {
      case "jobbersfind":
        return <Briefcase className="w-5 h-5 text-orange-500" />;
      case "mboacash":
        return <Shield className="w-5 h-5 text-emerald-500" />;
      case "somnialert":
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-orange-500" />;
    }
  };

  const getProductAccent = (id: string) => {
    switch (id) {
      case "jobbersfind":
        return {
          borderHover: "hover:border-orange-500/50 hover:shadow-orange-500/15",
          badgeBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
          buttonBg: "bg-orange-500 hover:bg-orange-600 text-white",
          accentColor: "bg-orange-500",
        };
      case "mboacash":
        return {
          borderHover: "hover:border-emerald-500/50 hover:shadow-emerald-500/15",
          badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
          buttonBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
          accentColor: "bg-emerald-500",
        };
      case "somnialert":
        return {
          borderHover: "hover:border-cyan-500/50 hover:shadow-cyan-500/15",
          badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
          buttonBg: "bg-cyan-600 hover:bg-cyan-700 text-white",
          accentColor: "bg-cyan-500",
        };
      default:
        return {
          borderHover: "hover:border-orange-500/50 hover:shadow-orange-500/15",
          badgeBg: "bg-orange-500/10 text-orange-600 border-orange-500/20",
          buttonBg: "bg-orange-500 hover:bg-orange-600 text-white",
          accentColor: "bg-orange-500",
        };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="w-full relative min-h-screen py-24 flex flex-col justify-center overflow-hidden bg-white dark:bg-black"
    >
      <div className="absolute inset-0 z-0">
        <GlyphMatrix className="opacity-20" color="#f97316" />
        <NoiseTexture className="opacity-40 mix-blend-overlay" />
      </div>

      <div className="z-10 container mx-auto px-4 max-w-7xl relative">
        <div className="products-header text-center mb-16">
          <div className="products-header-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4 border border-orange-200 dark:border-orange-800/40">
            <Sparkles className="w-4 h-4" />
            Écosystème 3T Global Tech
          </div>
          <h2 className="products-header-item text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
            Nos Solutions &amp; Produits
          </h2>
          <p className="products-header-item text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Des innovations technologiques à fort impact pour transformer le quotidien : emploi de proximité, sécurisation du commerce numérique et sécurité routière par l&apos;IA.
          </p>
        </div>

        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const styles = getProductAccent(product.id);
            return (
              <div key={product.id} className="product-card-3d h-full">
                <Tilt3D maxTilt={8} scale={1.02} className="h-full">
                  <div
                    className={`h-full flex flex-col bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-300 ${styles.borderHover}`}
                  >
                    {/* Header card with category and index */}
                    <div
                      className="flex items-center justify-between mb-6"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles.badgeBg}`}
                      >
                        {getProductIcon(product.id)}
                        {product.badge}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
                    </div>

                    {/* Logo container with elevated 3D depth */}
                    <div
                      className="relative w-full h-40 mb-6 rounded-2xl bg-white dark:bg-zinc-950/60 p-4 border border-zinc-100 dark:border-zinc-800/80 flex items-center justify-center group overflow-hidden shadow-inner"
                      style={{ transform: "translateZ(28px)" }}
                    >
                      <div className="relative w-28 h-28 transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={product.logo}
                          alt={`${product.name} Logo`}
                          fill
                          sizes="112px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col" style={{ transform: "translateZ(18px)" }}>
                      <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">
                        {product.name}
                      </h3>

                      <div className={`w-12 h-1 ${styles.accentColor} mb-4 rounded-full`} />

                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                        {product.tagline}
                      </p>

                      {/* Chips tech */}
                      <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                        {product.techStack.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium"
                          >
                            {tech.split(" ")[0]}
                          </span>
                        ))}
                      </div>

                      {/* CTA Link */}
                      <Link href={`/products/${product.slug}`} className="mt-auto">
                        <button
                          className={`w-full py-3.5 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${styles.buttonBg}`}
                        >
                          <span>Découvrir la solution</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
