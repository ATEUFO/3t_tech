"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { StripedPattern } from "@/components/magicui/striped-pattern";

const teamMembers = [
  {
    name: "ATEUFO Arthur",
    role: "Expert en architecture informatique",
    image: "/assets/peoples/Profile ATEUFO Arthur.jpg",
  },
  {
    name: "TSOPFACK DONCFACK Durel",
    role: "Ingénieur réseau",
    image: "/assets/peoples/TSOPFACK DONCFACK Durel.jpg",
  },
  {
    name: "TCHIEDA Teupe Brayan",
    role: "Concepteur de système",
    image: "/assets/peoples/Profile TCHIEDA Teupe Brayan.jpg",
  },
];

export function Team() {
  return (
    <section id="team" className="w-full relative min-h-screen py-24 flex flex-col justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <StripedPattern className="text-zinc-200 dark:text-zinc-800 opacity-50" />
      
      <div className="z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            L'Équipe 3T Tech
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Trois passionnés par l'informatique et la sécurité, réunis pour concevoir des systèmes robustes et innovants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-4">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
