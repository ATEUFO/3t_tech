"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { products } from "@/lib/data/products";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Cpu, Briefcase } from "lucide-react";

export function Products() {
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
          borderHover: "hover:border-orange-500/50 hover:shadow-orange-500/10",
          badgeBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
          buttonBg: "bg-orange-500 hover:bg-orange-600 text-white",
          accentColor: "bg-orange-500"
        };
      case "mboacash":
        return {
          borderHover: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
          badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
          buttonBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
          accentColor: "bg-emerald-500"
        };
      case "somnialert":
        return {
          borderHover: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
          badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
          buttonBg: "bg-cyan-600 hover:bg-cyan-700 text-white",
          accentColor: "bg-cyan-500"
        };
      default:
        return {
          borderHover: "hover:border-orange-500/50 hover:shadow-orange-500/10",
          badgeBg: "bg-orange-500/10 text-orange-600 border-orange-500/20",
          buttonBg: "bg-orange-500 hover:bg-orange-600 text-white",
          accentColor: "bg-orange-500"
        };
    }
  };

  return (
    <section id="products" className="w-full relative min-h-screen py-24 flex flex-col justify-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0">
        <GlyphMatrix className="opacity-20" color="#f97316" />
        <NoiseTexture className="opacity-40 mix-blend-overlay" />
      </div>

      <div className="z-10 container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4 border border-orange-200 dark:border-orange-800/40"
          >
            <Sparkles className="w-4 h-4" />
            Écosystème 3T Global Tech
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white"
          >
            Nos Solutions & Produits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
          >
            Des innovations technologiques à fort impact pour transformer le quotidien : emploi de proximité, sécurisation du commerce numérique et sécurité routière par l'IA.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const styles = getProductAccent(product.id);
            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className={`flex flex-col bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-2 ${styles.borderHover}`}
              >
                {/* Header card with category and icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles.badgeBg}`}>
                    {getProductIcon(product.id)}
                    {product.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Logo container */}
                <div className="relative w-full h-40 mb-6 rounded-2xl bg-white dark:bg-zinc-950/60 p-4 border border-zinc-100 dark:border-zinc-800/80 flex items-center justify-center group overflow-hidden">
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
                <div className="flex-1 flex flex-col">
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
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                        {tech.split(" ")[0]}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Link href={`/products/${product.slug}`} className="mt-auto">
                    <button className={`w-full py-3.5 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${styles.buttonBg}`}>
                      <span>Découvrir la solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
