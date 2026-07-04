"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { NoiseTexture } from "@/components/ui/noise-texture";

export function Products() {
  return (
    <section id="products" className="w-full relative min-h-screen py-24 flex flex-col justify-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0">
        <GlyphMatrix className="opacity-20" color="#f97316" />
        <NoiseTexture className="opacity-40 mix-blend-overlay" />
      </div>

      <div className="z-10 container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Nos Produits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Découvrez nos solutions conçues pour résoudre vos problèmes du quotidien.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-200 dark:border-zinc-800 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 drop-shadow-xl hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/jobbersfind_logo_form.png"
                  alt="Jobbersfind Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Jobbersfind</h3>
              <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                C'est une application innovante pour résoudre les problèmes du quotidien.
                Vous cherchez une personne pour faire vos tâches quotidiennes, construire votre maison ou réparer votre voiture ? 
                <br /><br />
                <strong>Jobbersfind</strong> est la solution.
              </p>
              <button className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                En savoir plus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
