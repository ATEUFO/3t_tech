"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe, TrendingUp, Layers, Zap, Building2, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Rentabilisation",
    description:
      "Transformer chaque acteur économique — artisan, commerçant, entrepreneur — en opérateur numérique capable de générer des revenus stables, mesurables et traçables.",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Digitalisation",
    description:
      "Structurer et dématérialiser des secteurs entiers encore peu numérisés — emploi de proximité, paiements sécurisés, sécurité industrielle — pour les intégrer dans l'économie formelle mondiale.",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Adaptation Locale",
    description:
      "Concevoir pour les réalités du terrain : connectivité variable, Mobile Money, multilinguisme, contraintes de coût — des outils qui fonctionnent partout, pour tout le monde.",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Ambition Mondiale",
    description:
      "Chaque produit 3T est conçu comme une infrastructure exportable à n'importe quel marché émergent dans le monde entier.",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="w-full relative py-24 md:py-32 overflow-hidden bg-zinc-900 text-white"
    >
      {/* Background gradient subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20"
          >
            <Zap className="w-4 h-4" />
            Notre Mission
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Digitaliser et rentabiliser
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              les entreprises à travers le monde.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            3T Global Tech conçoit des solutions technologiques à fort impact pour accélérer la
            transformation numérique des entreprises et des individus. Notre approche : construire
            des outils robustes, adaptés aux réalités locales, capables de s'exporter et de
            créer de la valeur partout dans le monde.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="flex gap-5 p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${pillar.color}`}
              >
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20"
        >
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
                Zone d'impact
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
        </motion.div>
      </div>
    </section>
  );
}

