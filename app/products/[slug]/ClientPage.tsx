"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Activity,
  Leaf,
  ShieldCheck,
  Download,
  Eye,
  AlertTriangle,
  Car,
  Cpu,
  Satellite,
  Lock,
  Wallet,
  RefreshCw,
  Sparkles,
  Smartphone,
  Check,
  ShieldAlert,
  ExternalLink,
  Globe,
  Building2,
} from "lucide-react";
import { gsap, SplitText } from "@/lib/gsap";
import { getProductBySlug } from "@/lib/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { Tilt3D } from "@/components/ui/tilt-3d";
import {
  JobbersFind3D,
  MboaCash3D,
  SomniAlert3D,
} from "@/components/illustrations/ProductIllustrations3D";

export default function ClientPage({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const [activeSomniState, setActiveSomniState] = useState<number>(0);
  const [activeEscrowStep, setActiveEscrowStep] = useState<number>(0);

  const pageRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const page = pageRef.current;
    const titleEl = titleRef.current;
    if (!page || !titleEl) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        let split: SplitText | null = null;
        try {
          split = new SplitText(titleEl, {
            type: "chars",
            charsClass: "inline-block",
          });
        } catch {
          split = null;
        }

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        if (split && split.chars.length > 0) {
          tl.from(split.chars, {
            opacity: 0,
            y: 26,
            rotateX: -60,
            transformPerspective: 800,
            transformOrigin: "50% 50% -20px",
            duration: 0.65,
            stagger: 0.03,
          });
        } else {
          tl.from(titleEl, { opacity: 0, y: 20, duration: 0.6 });
        }

        tl.from(
          ".product-hero-stagger",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.35"
        ).from(
          ".product-hero-visual",
          {
            opacity: 0,
            scale: 0.9,
            rotateY: -18,
            transformPerspective: 1100,
            duration: 0.85,
          },
          "-=0.5"
        );

        // Metrics 3D stagger on scroll
        gsap.from(".product-metric-card", {
          opacity: 0,
          y: 28,
          rotateX: 22,
          transformPerspective: 900,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".product-metrics-grid",
            start: "top 88%",
          },
        });

        // 3D Illustration section reveal
        gsap.from(".product-3d-showcase", {
          opacity: 0,
          y: 40,
          rotateX: 16,
          transformPerspective: 1100,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".product-3d-showcase",
            start: "top 85%",
          },
        });

        // Partner/Brand logos 3D stagger
        if (document.querySelector(".brand-logo-card")) {
          gsap.from(".brand-logo-card", {
            opacity: 0,
            y: 28,
            rotateY: -14,
            scale: 0.94,
            transformPerspective: 900,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".brand-logos-grid",
              start: "top 88%",
            },
          });
        }

        // Gallery 3D cards
        if (document.querySelector(".gallery-card-3d")) {
          gsap.from(".gallery-card-3d", {
            opacity: 0,
            y: 36,
            rotateX: 16,
            scale: 0.95,
            transformPerspective: 1000,
            duration: 0.7,
            stagger: 0.12,
            ease: "expo.out",
            scrollTrigger: {
              trigger: ".gallery-grid-3d",
              start: "top 85%",
            },
          });
        }

        return () => {
          split?.revert();
        };
      }, page);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [slug]);

  if (!product) {
    notFound();
  }

  const isSomniAlert = product.slug === "somnialert";
  const isMboaCash = product.slug === "mboacash";
  const isJobbersFind = product.slug === "jobbersfind";

  const renderProductIllustration3D = () => {
    if (isJobbersFind) return <JobbersFind3D className="w-full h-auto" />;
    if (isMboaCash) return <MboaCash3D className="w-full h-auto" />;
    if (isSomniAlert) return <SomniAlert3D className="w-full h-auto" />;
    return null;
  };

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-zinc-50 dark:bg-black selection:bg-orange-500/30"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 z-0">
          <GlyphMatrix className="opacity-10" color="#f97316" />
          <NoiseTexture className="opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-black" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link
            href="/#products"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-orange-500 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux solutions
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-3/5">
              <div className="product-hero-stagger flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-800/50">
                  {product.badge}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <Tilt3D maxTilt={14} scale={1.06}>
                  <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 p-2 shadow-md border border-zinc-200 dark:border-zinc-800 flex-shrink-0">
                    <Image
                      src={product.logo}
                      alt={`${product.name} Logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </Tilt3D>
                <h1
                  ref={titleRef}
                  className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
                  style={{ perspective: "800px" }}
                >
                  {product.name}
                </h1>
              </div>

              <p className="product-hero-stagger text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed font-light">
                {product.tagline}
              </p>

              <p className="product-hero-stagger text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="product-hero-stagger flex flex-wrap gap-2.5 mb-8">
                {product.valuePropositions.slice(0, 4).map((val, i) => (
                  <span
                    key={i}
                    className="flex items-center text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
                    {val}
                  </span>
                ))}
              </div>

              {(product.apkUrl || product.webUrl) && (
                <div className="product-hero-stagger space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {product.webUrl && (
                      <a
                        href={product.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white transition-all bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 group"
                      >
                        <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Accéder à l&apos;application Web
                        <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                      </a>
                    )}
                    {product.apkUrl && (
                      <a
                        href={product.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-full shadow-sm hover:border-orange-500 hover:text-orange-500 transition-all hover:scale-105 group"
                      >
                        <Download className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform text-orange-500" />
                        Télécharger l&apos;APK (Android)
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    Disponible en ligne directement depuis votre navigateur ou en application mobile Android.
                  </p>
                </div>
              )}
            </div>

            <div className="product-hero-visual w-full lg:w-2/5">
              <Tilt3D maxTilt={10} scale={1.03}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-zinc-900">
                  <Image
                    src={product.heroImage}
                    alt={`Aperçu de ${product.name}`}
                    fill
                    className="object-contain p-2"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
                </div>
              </Tilt3D>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="product-metrics-grid grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
            {product.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="product-metric-card flex flex-col items-center justify-center text-center p-4 pt-6 md:pt-4"
              >
                <div className="text-3xl md:text-5xl font-black text-orange-500 mb-2">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D INTERACTIVE ARCHITECTURE ILLUSTRATION + PARTNER/BRAND LOGOS */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="product-3d-showcase grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Tilt3D maxTilt={8} scale={1.02}>
                <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-xl">
                  {renderProductIllustration3D()}
                </div>
              </Tilt3D>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Valeur Ajoutée &amp; Écosystème
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
                {isJobbersFind && "Mise en relation géolocalisée instantanée"}
                {isMboaCash && "Flux financier isolé et vérifié de bout en bout"}
                {isSomniAlert && "Système cyber-physique autonome & satellitaire"}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                {isJobbersFind &&
                  "Chaque demande client active un maillage spatial de proximité (1 à 3 km) connectant uniquement des artisans ayant validé la vérification d'identité et le portfolio technique."}
                {isMboaCash &&
                  "MboaCash s'intercale entre acheteur et vendeur comme un coffre-fort numérique neutre : les fonds restent bloqués jusqu'à la confirmation physique de livraison."}
                {isSomniAlert &&
                  "La vision infrarouge embarquée traite les 68 points faciaux localement en moins de 2 secondes, puis coordonne freinage progressif et alerte GNSS satellitaire."}
              </p>

              {/* Cited companies & technologies logos */}
              {product.partnerLogos && product.partnerLogos.length > 0 && (
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                    <Building2 className="w-4 h-4 text-orange-500" />
                    Écosystème, Partenaires &amp; Référentiels
                  </div>
                  <div className="brand-logos-grid grid grid-cols-2 gap-3">
                    {product.partnerLogos.map((brand) => (
                      <div key={brand.name} className="brand-logo-card">
                        <Tilt3D maxTilt={10} scale={1.03}>
                          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                            <div
                              className="relative w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 p-1.5 flex-shrink-0 border border-zinc-100 dark:border-zinc-700"
                              style={{ transform: "translateZ(18px)" }}
                            >
                              <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                                {brand.name}
                              </div>
                              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                                {brand.role}
                              </div>
                            </div>
                          </div>
                        </Tilt3D>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZED SECTION 1: SOMNIALERT INTERACTIVE 3-STATE DEMO */}
      {isSomniAlert && product.detectionStates && (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
                <Eye className="w-4 h-4 mr-1" />
                Démonstration Interactive
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Les 3 États de Fonctionnement en Temps Réel
              </h2>
              <p className="text-zinc-400 text-base md:text-lg">
                SomniAlert surveille en continu les repères faciaux et intervient de manière graduée jusqu&apos;à l&apos;arrêt physique sécurisé du véhicule.
              </p>
            </div>

            {/* State selector tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {product.detectionStates.map((st, idx) => {
                const isActive = activeSomniState === idx;
                return (
                  <Tilt3D key={st.number} maxTilt={6} scale={1.02}>
                    <button
                      onClick={() => setActiveSomniState(idx)}
                      className={`w-full h-full p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? "bg-zinc-800 border-orange-500 shadow-xl shadow-orange-500/10"
                          : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 opacity-75"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-zinc-500">
                          ÉTAT {st.number}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                            st.color === "green"
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : st.color === "amber"
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : "bg-red-500/20 text-red-400 border border-red-500/30"
                          }`}
                        >
                          {st.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                      <p className="text-xs text-zinc-400 line-clamp-2">{st.description}</p>
                      {isActive && (
                        <motion.div
                          layoutId="activeSomniIndicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                        />
                      )}
                    </button>
                  </Tilt3D>
                );
              })}
            </div>

            {/* Active State Detail Showcase */}
            <AnimatePresence mode="wait">
              {product.detectionStates[activeSomniState] && (
                <motion.div
                  key={activeSomniState}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-950 rounded-3xl p-6 md:p-10 border border-zinc-800 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <Tilt3D maxTilt={8} scale={1.02}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-lg bg-black">
                      <Image
                        src={product.detectionStates[activeSomniState].image}
                        alt={product.detectionStates[activeSomniState].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Tilt3D>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`p-3 rounded-2xl ${
                          product.detectionStates[activeSomniState].color === "green"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : product.detectionStates[activeSomniState].color === "amber"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {product.detectionStates[activeSomniState].color === "green" ? (
                          <ShieldCheck className="w-7 h-7" />
                        ) : product.detectionStates[activeSomniState].color === "amber" ? (
                          <AlertTriangle className="w-7 h-7" />
                        ) : (
                          <Car className="w-7 h-7" />
                        )}
                      </span>
                      <div>
                        <span className="text-xs font-mono uppercase text-zinc-500">
                          Phase Opérationnelle 0{activeSomniState + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {product.detectionStates[activeSomniState].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                      {product.detectionStates[activeSomniState].description}
                    </p>

                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-sm text-zinc-400">
                      {activeSomniState === 0 && (
                        <>
                          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                            <Check className="w-4 h-4" /> Analyse faciale en temps réel (68 points de repère)
                          </div>
                          <div>Vision infrarouge active : opérationnel jour et nuit sans éblouissement.</div>
                        </>
                      )}
                      {activeSomniState === 1 && (
                        <>
                          <div className="flex items-center gap-2 text-amber-400 font-semibold">
                            <AlertTriangle className="w-4 h-4" /> Seuil critique dépassé : yeux fermés &gt; 2 secondes
                          </div>
                          <div>Avertisseur sonore strident activé pour sortir immédiatement le conducteur du micro-sommeil.</div>
                        </>
                      )}
                      {activeSomniState === 2 && (
                        <>
                          <div className="flex items-center gap-2 text-red-400 font-semibold">
                            <ShieldAlert className="w-4 h-4" /> Assistance physique automatique au freinage
                          </div>
                          <div>Ralentissement progressif automatique enclenché, feux de détresse allumés et envoi automatique de SMS avec position exacte aux secours et proches.</div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* SPECIALIZED SECTION 2: MBOACASH 4-PHASE ESCROW INTERACTIVE CYCLE */}
      {isMboaCash && product.escrowPhases && (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
                <Lock className="w-4 h-4 mr-1" />
                Technologie Tiers de Confiance
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Le Cycle du Séquestre Numérique (Escrow)
              </h2>
              <p className="text-zinc-400 text-base md:text-lg">
                Comment MboaCash élimine 100% des arnaques en ligne et réconcilie acheteurs et vendeurs en 4 étapes fluides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              {product.escrowPhases.map((phase, idx) => {
                const isActive = activeEscrowStep === idx;
                return (
                  <Tilt3D key={phase.step} maxTilt={6} scale={1.02}>
                    <button
                      onClick={() => setActiveEscrowStep(idx)}
                      className={`w-full h-full p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? "bg-zinc-800 border-emerald-500 shadow-xl shadow-emerald-500/10"
                          : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 opacity-75"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-black text-emerald-400">
                          PHASE {phase.step}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                      <p className="text-xs text-zinc-400 line-clamp-3">{phase.description}</p>
                      {isActive && (
                        <motion.div
                          layoutId="activeEscrowIndicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"
                        />
                      )}
                    </button>
                  </Tilt3D>
                );
              })}
            </div>

            {/* Active Escrow Step Detailed View */}
            <div className="bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="inline-block text-xs font-mono font-bold px-3 py-1 rounded bg-emerald-500/10 text-emerald-400">
                    FOCUS SUR LA PHASE {product.escrowPhases[activeEscrowStep].step}
                  </div>
                  <h3 className="text-3xl font-extrabold text-white">
                    {product.escrowPhases[activeEscrowStep].title}
                  </h3>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    {product.escrowPhases[activeEscrowStep].description}
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Garantie MboaCash :</strong> En cas de désaccord sur le colis, l&apos;acheteur suspend la libération et le module d&apos;arbitrage 3T.tech analyse les preuves pour rembourser intégralement la partie lésée.
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                  <Tilt3D maxTilt={10} scale={1.04} className="w-full max-w-xs">
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                        <Wallet className="w-8 h-8" />
                      </div>
                      <div className="text-base font-bold text-white mb-1">
                        Portefeuille Séquestre
                      </div>
                      <div className="text-xs text-zinc-400 mb-4">Transit Isolé &amp; Crypté</div>
                      <div className="text-xs px-3 py-1.5 rounded-full bg-emerald-900/40 text-emerald-300 font-semibold border border-emerald-700/50">
                        Zéro Risque d&apos;Arnaque
                      </div>
                    </div>
                  </Tilt3D>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SPECIALIZED HARDWARE & KEY HIGHLIGHTS SECTION */}
      {isSomniAlert && product.hardwareSpecs && (
        <section className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 mb-4">
                <Cpu className="w-4 h-4 mr-1" />
                Atouts du Dispositif
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white">
                Un Dispositif Conçu pour Sauver des Vies
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg">
                Pensé pour les réalités du transport routier : autonome, fiable et prêt à intervenir à tout instant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.hardwareSpecs.map((spec, i) => (
                <Tilt3D key={i} maxTilt={7} scale={1.02} className="h-full">
                  <div className="h-full p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
                    <div
                      className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {i === 0 && <Eye className="w-5 h-5" />}
                      {i === 1 && <Cpu className="w-5 h-5" />}
                      {i === 2 && <Satellite className="w-5 h-5" />}
                      {i === 3 && <Car className="w-5 h-5" />}
                      {i === 4 && <Activity className="w-5 h-5" />}
                      {i === 5 && <Smartphone className="w-5 h-5" />}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                      {spec.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </Tilt3D>
              ))}
            </div>

            {/* Spatial connection banner */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-zinc-900 border border-cyan-800/40 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Satellite className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Lien Stratégique avec les Technologies Spatiales
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    Le module GNSS de SomniAlert exploite les constellations satellitaires pour assurer une localisation ultra-précise en temps réel sur les axes ruraux non couverts par les réseaux terrestres. À terme, l&apos;intégration de la connectivité satellite basse orbite (Low-Orbit) garantira la couverture intégrale du continent africain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SPECIALIZED MBOACASH LAYAWAY & INNOVATION HIGHLIGHT */}
      {isMboaCash && (
        <section className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-4">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Innovation Majeure
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white">
                  L&apos;Achat à Long Terme (Épargne-Achat)
                </h2>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                  Face au faible accès au crédit bancaire en Afrique, 3T.tech a développé une alternative éthique et révolutionnaire : la digitalisation de la <strong>tontine d&apos;achat</strong>.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">
                        Prix Bloqué &amp; Garanti
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Le prix de l&apos;article est verrouillé d&apos;accord commun entre l&apos;acheteur et le commerçant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">
                        Acomptes à Votre Rythme
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        L&apos;acheteur verse des acomptes progressifs dans son séquestre dédié, sans intérêts ni risque de surendettement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">
                        Suivi Commerçant &amp; Livraison à 100%
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Le commerçant voit la progression de la cagnotte en direct et procède à la livraison dès que les 100% sont atteints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Tilt3D maxTilt={6} scale={1.015}>
                <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Protection des Échanges &amp; Confiance
                  </h3>
                  <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                      <Lock className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-zinc-900 dark:text-white">
                          Validation Sécurisée des Transactions
                        </div>
                        <div>Chaque versement ou déblocage de fonds nécessite une confirmation explicite du titulaire.</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <Image
                          src="/assets/brands/orange-money.svg"
                          alt="Orange Money"
                          width={26}
                          height={26}
                          className="object-contain"
                        />
                        <Image
                          src="/assets/brands/mtn.svg"
                          alt="MTN MoMo"
                          width={26}
                          height={26}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-zinc-900 dark:text-white">
                          Orange Money &amp; MTN MoMo
                        </div>
                        <div>Recharge instantanée et retraits fluides vers vos numéros locaux.</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                      <RefreshCw className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-zinc-900 dark:text-white">
                          Alertes &amp; Suivi en Temps Réel
                        </div>
                        <div>Acheteurs et vendeurs sont informés à chaque étape clé de la transaction pour zéro stress.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </div>
          </div>
        </section>
      )}

      {/* SPECIALIZED JOBBERSFIND LIVE WEB & SERVICE DISCOVERY */}
      {isJobbersFind && product.webUrl && (
        <section className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <Tilt3D maxTilt={4} scale={1.01}>
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-50 via-zinc-50 to-amber-50 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-orange-950/20 border border-orange-200/80 dark:border-orange-900/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                    <Globe className="w-4 h-4 mr-1" />
                    Plateforme en Ligne
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
                    Testez JobbersFind directement sur le Web
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
                    Pas besoin d&apos;installer l&apos;application pour explorer les services : accédez à la version web officielle pour rechercher des artisans qualifiés, consulter leurs portfolios certifiés et demander un dépannage en quelques clics.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" /> Sans téléchargement préalable
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" /> Compatible mobile &amp; ordinateur
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" /> Recherche géolocalisée temps réel
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                  <a
                    href={product.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:scale-105 transition-all group"
                  >
                    <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Ouvrir jobberfind-web
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </Tilt3D>
          </div>
        </section>
      )}

      {/* The Vision & Architecture */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-2xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Le Constat</h2>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {product.vision.problem}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">La Solution</h2>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {product.vision.solution}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">L&apos;Impact</h2>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {product.vision.impact}
                </p>
              </div>
            </div>

            <Tilt3D maxTilt={5} scale={1.01} className="h-fit sticky top-32">
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
                  Nos Plus-Values Clés
                </h3>
                <ul className="space-y-6">
                  {product.valuePropositions.map((val, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center mr-4">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <span className="text-lg text-zinc-700 dark:text-zinc-300 font-medium">
                        {val}
                      </span>
                    </li>
                  ))}
                </ul>

                {product.keyHighlights && product.keyHighlights.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-4">
                      Points Clés
                    </h4>
                    <div className="space-y-4">
                      {product.keyHighlights.map((kh, i) => (
                        <div key={i} className="text-sm">
                          <div className="font-bold text-zinc-900 dark:text-white">
                            {kh.title}
                          </div>
                          <div className="text-zinc-600 dark:text-zinc-400">
                            {kh.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Tilt3D>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {product.gallery.length > 0 && (
        <section className="py-24 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Un aperçu de l&apos;expérience
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
              Captures, maquettes et photographies de la solution en action.
            </p>
            <div className="gallery-grid-3d grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.gallery.map((img, idx) => (
                <div key={idx} className="gallery-card-3d">
                  <Tilt3D maxTilt={7} scale={1.02}>
                    <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-2xl bg-black border border-zinc-800">
                      <Image
                        src={img}
                        alt={`Galerie ${idx + 1} de ${product.name}`}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    </div>
                  </Tilt3D>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-28 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Convaincu par notre approche ?
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Chez 3T Global Tech, nous concevons des solutions sur mesure qui ont un réel impact sur la société.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#products"
              className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold text-base hover:scale-105 transition-all shadow-lg"
            >
              Voir tous les produits
            </Link>
            <a
              href="mailto:contact@3t.tech"
              className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-500/20"
            >
              Contacter notre équipe <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
