"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated title                                                    */
/* ------------------------------------------------------------------ */
function GradientTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <h1
        className="relative text-7xl md:text-9xl font-black tracking-tighter leading-none select-none"
        style={{
          fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          background: "linear-gradient(135deg, #18181b 0%, #ea580c 45%, #f97316 75%, #d97706 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.04em",
        }}
      >
        3T Tech
      </h1>

      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="origin-left h-1 mt-2 mx-auto w-2/3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero section                                                      */
/* ------------------------------------------------------------------ */
export function Hero() {
  return (
    <section
      id="hero"
      className="w-full relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black"
    >
      {/* ── Background identique à la section Produits ── */}
      <div className="absolute inset-0 z-0">
        <GlyphMatrix className="opacity-20" color="#f97316" />
        <NoiseTexture className="opacity-40 mix-blend-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto gap-10">

        {/* Logo agrandi sans halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Image
            src="/assets/3T.Tech_Logo_.svg"
            alt="3T Tech Logo"
            width={180}
            height={180}
            loading="eager"
            className="relative drop-shadow-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Titre */}
        <GradientTitle />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium max-w-2xl leading-relaxed"
        >
          Un collectif de passionnés d'informatique et de sécurité, unis pour construire
          l'avenir de la technologie.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex items-start justify-center pt-1.5 bg-white/60 dark:bg-black/60 backdrop-blur-sm shadow-sm"
        >
          <div className="w-1.5 h-2 rounded-full bg-orange-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
