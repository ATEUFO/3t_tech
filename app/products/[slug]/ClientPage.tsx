"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ChevronRight, Activity, Leaf, ShieldCheck, Download } from "lucide-react";
import { getProductBySlug } from "@/lib/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";

export default function ClientPage({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black selection:bg-orange-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 z-0">
          <GlyphMatrix className="opacity-10" color="#f97316" />
          <NoiseTexture className="opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-black" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link href="/#products" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-orange-500 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux produits
          </Link>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-6 border border-orange-200 dark:border-orange-800/50">
                Produit 3T Global Tech
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-light">
                {product.tagline}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {product.techStack.slice(0,3).map((tech, i) => (
                  <span key={i} className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" />
                    {tech.split(' ')[0]}
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
                    download
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Télécharger l'APK (Android)
                  </a>
                  <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    Version Bêta • Fichier sécurisé
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={product.heroImage}
                  alt={`Aperçu de ${product.name}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
            {product.metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-6"
              >
                <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {product.gallery.length > 0 && (
        <section className="py-24 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold mb-16 text-center">Un aperçu de l'expérience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden group shadow-2xl"
                >
                  <Image
                    src={img}
                    alt={`Galerie ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Footer CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-orange-500 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
            Convaincu par notre approche ?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Chez 3T Global Tech, nous concevons des solutions sur mesure qui ont un réel impact sur la société.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-500/20">
            Contactez notre équipe <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
