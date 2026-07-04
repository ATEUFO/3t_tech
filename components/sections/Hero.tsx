"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { WarpBackground } from "@/components/ui/warp-background";
import { ComicText } from "@/components/ui/comic-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function Hero() {
  return (
    <section id="hero" className="w-full relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <WarpBackground className="w-full h-full absolute inset-0 flex items-center justify-center border-none" perspective={150}>
        <div className="z-10 flex flex-col items-center justify-center text-center space-y-8 px-4 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <Image 
              src="/assets/3T.Tech_Logo_.svg" 
              alt="3T Tech Logo" 
              width={120} 
              height={120} 
              className="drop-shadow-lg mx-auto"
            />
          </motion.div>

          <ComicText className="text-6xl md:text-8xl" fontSize={6}>
            3T Tech
          </ComicText>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-zinc-700 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Un collectif de passionnés d'informatique et de sécurité, unis pour construire l'avenir de la technologie.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <InteractiveHoverButton 
              className="mt-8 text-lg bg-orange-500 text-white border-orange-600 hover:bg-orange-600 dark:bg-orange-600 dark:text-white"
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir notre équipe
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </WarpBackground>
    </section>
  );
}
