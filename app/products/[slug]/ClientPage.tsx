"use client";

import React, { useState } from "react";
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
  Layers,
  RefreshCw,
  Sparkles,
  Users,
  Smartphone,
  Check,
  ShieldAlert
} from "lucide-react";
import { getProductBySlug } from "@/lib/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";

export default function ClientPage({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const [activeSomniState, setActiveSomniState] = useState<number>(0);
  const [activeEscrowStep, setActiveEscrowStep] = useState<number>(0);

  if (!product) {
    notFound();
  }

  const isSomniAlert = product.slug === "somnialert";
  const isMboaCash = product.slug === "mboacash";
  const isJobbersFind = product.slug === "jobbersfind";

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 z-0">
          <GlyphMatrix className="opacity-10" color="#f97316" />
          <NoiseTexture className="opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-black" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link href="/#products" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-orange-500 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux solutions
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-3/5"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-800/50">
                  {product.badge}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 p-2 shadow-md border border-zinc-200 dark:border-zinc-800 flex-shrink-0">
                  <Image
                    src={product.logo}
                    alt={`${product.name} Logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                  {product.name}
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed font-light">
                {product.tagline}
              </p>

              <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {product.techStack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="flex items-center text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
                    {tech}
                  </span>
                ))}
              </div>

              {product.apkUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a
                    href={product.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Télécharger l'APK Android
                  </a>
                  <p className="mt-2.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    Version Bêta • Déploiement direct certifié 3T
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-2/5"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-zinc-900">
                <Image
                  src={product.heroImage}
                  alt={`Aperçu de ${product.name}`}
                  fill
                  className="object-contain p-2"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
            {product.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-4 pt-6 md:pt-4"
              >
                <div className="text-3xl md:text-5xl font-black text-orange-500 mb-2">{metric.value}</div>
                <div className="text-xs md:text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
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
                SomniAlert surveille en continu les repères faciaux et intervient de manière graduée jusqu'à l'arrêt physique sécurisé du véhicule.
              </p>
            </div>

            {/* State selector tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {product.detectionStates.map((st, idx) => {
                const isActive = activeSomniState === idx;
                return (
                  <button
                    key={st.number}
                    onClick={() => setActiveSomniState(idx)}
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${isActive
                        ? "bg-zinc-800 border-orange-500 shadow-xl shadow-orange-500/10"
                        : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 opacity-75"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-zinc-500">ÉTAT {st.number}</span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${st.color === "green" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                          st.color === "amber" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                            "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}>
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
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-lg bg-black">
                    <Image
                      src={product.detectionStates[activeSomniState].image}
                      alt={product.detectionStates[activeSomniState].title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`p-3 rounded-2xl ${product.detectionStates[activeSomniState].color === "green" ? "bg-emerald-500/10 text-emerald-400" :
                          product.detectionStates[activeSomniState].color === "amber" ? "bg-amber-500/10 text-amber-400" :
                            "bg-red-500/10 text-red-400"
                        }`}>
                        {product.detectionStates[activeSomniState].color === "green" ? <ShieldCheck className="w-7 h-7" /> :
                          product.detectionStates[activeSomniState].color === "amber" ? <AlertTriangle className="w-7 h-7" /> :
                            <Car className="w-7 h-7" />}
                      </span>
                      <div>
                        <span className="text-xs font-mono uppercase text-zinc-500">Phase Opérationnelle 0{activeSomniState + 1}</span>
                        <h3 className="text-2xl font-bold text-white">{product.detectionStates[activeSomniState].title}</h3>
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
                          <div>Actionneur linéaire + solénoïde hydraulique enclenchés, feux de détresse allumés et envoi automatique de SMS avec coordonnées GPS satellitaires.</div>
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
                  <button
                    key={phase.step}
                    onClick={() => setActiveEscrowStep(idx)}
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${isActive
                        ? "bg-zinc-800 border-emerald-500 shadow-xl shadow-emerald-500/10"
                        : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 opacity-75"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-black text-emerald-400">PHASE {phase.step}</span>
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
                      <strong>Garantie MboaCash :</strong> En cas de désaccord sur le colis, l'acheteur suspend la libération et le module d'arbitrage 3T.tech analyse les preuves pour rembourser intégralement la partie lésée.
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center w-full max-w-xs">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8" />
                    </div>
                    <div className="text-base font-bold text-white mb-1">Portefeuille Séquestre</div>
                    <div className="text-xs text-zinc-400 mb-4">Transit Isolé &amp; Crypté</div>
                    <div className="text-xs px-3 py-1.5 rounded-full bg-emerald-900/40 text-emerald-300 font-semibold border border-emerald-700/50">
                      Zéro Risque d'Arnaque
                    </div>
                  </div>
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
                Ingénierie &amp; Matériel
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white">
                Architecture IoT &amp; Hardware Embarqué
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg">
                Conçu spécifiquement pour les conditions d'exploitation africaines : autonome, robuste et sans besoin de cloud permanent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.hardwareSpecs.map((spec, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                    {i === 0 && <Eye className="w-5 h-5" />}
                    {i === 1 && <Cpu className="w-5 h-5" />}
                    {i === 2 && <Satellite className="w-5 h-5" />}
                    {i === 3 && <Car className="w-5 h-5" />}
                    {i === 4 && <Activity className="w-5 h-5" />}
                    {i === 5 && <Smartphone className="w-5 h-5" />}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{spec.title}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>

            {/* Spatial connection banner */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-zinc-900 border border-cyan-800/40 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Satellite className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Lien Stratégique avec les Technologies Spatiales</h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    Le module GNSS de SomniAlert exploite les constellations satellitaires pour assurer une localisation ultra-précise en temps réel sur les axes ruraux non couverts par les réseaux terrestres. À terme, l'intégration de la connectivité satellite basse orbite (Low-Orbit) garantira la couverture intégrale du continent africain.
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
                  L'Achat à Long Terme (Épargne-Achat)
                </h2>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                  Face au faible accès au crédit bancaire en Afrique, 3T.tech a développé une alternative éthique et révolutionnaire : la digitalisation de la <strong>tontine d'achat</strong>.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">Prix Bloqué &amp; Garanti</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Le prix de l'article est verrouillé d'accord commun entre l'acheteur et le commerçant.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">Acomptes à Votre Rythme</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">L'acheteur verse des acomptes progressifs dans son séquestre dédié, sans intérêts ni risque de surendettement.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">Suivi Commerçant &amp; Livraison à 100%</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Le commerçant voit la progression de la cagnotte en direct et procède à la livraison dès que les 100% sont atteints.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Sécurité de Niveau Bancaire</h3>
                <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                  <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                    <Lock className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">Chiffrement SSL/TLS &amp; Code PIN</div>
                      <div>Authentification forte pour valider chaque versement ou retrait.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                    <Smartphone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">Orange Money &amp; MTN MoMo</div>
                      <div>Recharge instantanée et retraits fluides vers vos numéros locaux.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                    <RefreshCw className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">Notifications Push &amp; SMS Instantanées</div>
                      <div>Intégration Firebase pour informer acheteurs et vendeurs à la seconde près.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Vision & Architecture */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
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
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">L'Impact</h2>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {product.vision.impact}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 h-fit sticky top-32"
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Excellence Technologique</h3>
              <ul className="space-y-6">
                {product.techStack.map((tech, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center mr-4">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <span className="text-lg text-zinc-700 dark:text-zinc-300 font-medium">{tech}</span>
                  </li>
                ))}
              </ul>

              {product.keyHighlights && product.keyHighlights.length > 0 && (
                <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-4">Points Clés</h4>
                  <div className="space-y-4">
                    {product.keyHighlights.map((kh, i) => (
                      <div key={i} className="text-sm">
                        <div className="font-bold text-zinc-900 dark:text-white">{kh.title}</div>
                        <div className="text-zinc-600 dark:text-zinc-400">{kh.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {product.gallery.length > 0 && (
        <section className="py-24 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Un aperçu de l'expérience</h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
              Captures, maquettes et photographies de la solution en action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative aspect-video rounded-3xl overflow-hidden group shadow-2xl bg-black border border-zinc-800"
                >
                  <Image
                    src={img}
                    alt={`Galerie ${idx + 1} de ${product.name}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-orange-500 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Convaincu par notre approche ?
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Chez 3T Global Tech, nous concevons des solutions sur mesure qui ont un réel impact sur la société.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#products" className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold text-base hover:scale-105 transition-all shadow-lg">
              Voir tous les produits
            </Link>
            <a href="mailto:contact@3t.tech" className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-500/20">
              Contacter notre équipe <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
