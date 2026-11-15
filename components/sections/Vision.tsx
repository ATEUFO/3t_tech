"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Tilt3D } from "@/components/ui/tilt-3d";
import { TechEcosystem3D } from "@/components/illustrations/TechEcosystem3D";
import { Globe, TrendingUp, Layers, Zap, Building2, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Rentabilisation",
    description:
      "Transformer chaque acteur économique — artisan, commerçant, entrepreneur — en opérateur numérique capable de générer des revenus stables, mesurables et traçables.",
    color: "bg-orange-500/15 text-orange-400 border border-orange-500/20",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Digitalisation",
    description:
      "Structurer et dématérialiser des secteurs entiers encore peu numérisés — emploi de proximité, paiements sécurisés, sécurité industrielle — pour les intégrer dans l'économie formelle mondiale.",
    color: "bg-blue-500/15 text-blue-400 border border-blue-500/20",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Adaptation Locale",
    description:
      "Concevoir pour les réalités du terrain : connectivité variable, Mobile Money, multilinguisme, contraintes de coût — des outils qui fonctionnent partout, pour tout le monde.",
    color: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Ambition Mondiale",
    description:
      "Chaque produit 3T est conçu comme une infrastructure exportable à n'importe quel marché émergent dans le monde entier.",
    color: "bg-purple-500/15 text-purple-400 border border-purple-500/20",
  },
];

export function Vision() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".vision-header-item", {
          opacity: 0,
          y: 28,
          rotateX: -18,
          transformPerspective: 1000,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vision-header",
            start: "top 85%",
          },
        });

        gsap.from(".vision-illustration", {
          opacity: 0,
          scale: 0.88,
          rotateY: -18,
          transformPerspective: 1100,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".vision-header",
            start: "top 80%",
          },
        });

        gsap.from(".vision-pillar", {
          opacity: 0,
          y: 36,
          rotateX: 20,
          transformPerspective: 1000,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vision-pillars-grid",
            start: "top 85%",
          },
        });

        gsap.from(".vision-stats", {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vision-stats",
            start: "top 90%",
          },
        });
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="w-full relative py-24 md:py-32 overflow-hidden bg-zinc-900 text-white"
    >
      {/* Background gradient subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header + 3D Isometric Illustration */}
        <div className="vision-header grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="vision-header-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20">
              <Zap className="w-4 h-4" />
              Notre Mission
            </div>

            <h2 className="vision-header-item text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Digitaliser et rentabiliser
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                les entreprises à travers le monde.
              </span>
            </h2>

            <p className="vision-header-item text-lg md:text-xl text-zinc-400 leading-relaxed">
              3T Global Tech conçoit des solutions technologiques à fort impact pour accélérer la
              transformation numérique des entreprises et des individus. Notre approche : construire
              des outils robustes, adaptés aux réalités locales, capables de s&apos;exporter et de
              créer de la valeur partout dans le monde.
            </p>
          </div>

          {/* 3D Isometric Illustration */}
          <div className="vision-illustration lg:col-span-5 flex justify-center">
            <Tilt3D maxTilt={8} scale={1.03} className="w-full max-w-[440px]">
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-4 backdrop-blur-sm shadow-2xl">
                <TechEcosystem3D className="w-full h-auto" />
              </div>
            </Tilt3D>
          </div>
        </div>

        {/* Pillars with 3D tilt */}
        <div className="vision-pillars-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="vision-pillar">
              <Tilt3D maxTilt={6} scale={1.015} className="h-full">
                <div className="h-full flex gap-5 p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-colors duration-300 shadow-lg">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${pillar.color}`}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {pillar.icon}
                  </div>
                  <div style={{ transform: "translateZ(12px)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </Tilt3D>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="vision-stats flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-orange-400">3</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mt-1">
                Solutions actives
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-700" />
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-orange-400">Global</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mt-1">
                Zone d&apos;impact
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-700" />
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-orange-400">∞</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mt-1">
                Ambition mondiale
              </div>
            </div>
          </div>

          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-orange-500/25 whitespace-nowrap"
          >
            Voir nos solutions <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
