"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Tilt3D } from "@/components/ui/tilt-3d";

const teamMembers = [
  {
    name: "ATEUFO Arthur",
    role: "Expert en architecture informatique",
    image: "/assets/peoples/Profile ATEUFO Arthur.jpg",
  },
  {
    name: "TSOPFACK DONFACK Durel",
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
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".team-header-item", {
          opacity: 0,
          y: 22,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".team-header",
            start: "top 85%",
          },
        });

        gsap.from(".team-card-3d", {
          opacity: 0,
          y: 44,
          rotateY: -18,
          rotateX: 12,
          transformPerspective: 1000,
          duration: 0.75,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 85%",
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
      id="team"
      className="w-full relative min-h-screen py-24 flex flex-col justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950"
    >
      <StripedPattern className="text-zinc-200 dark:text-zinc-800 opacity-50" />

      <div className="z-10 container mx-auto px-4 max-w-6xl">
        <div className="team-header text-center mb-16">
          <h2 className="team-header-item text-4xl md:text-5xl font-bold tracking-tight mb-4">
            L&apos;Équipe 3T Tech
          </h2>
          <p className="team-header-item text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Trois passionnés par l&apos;informatique et la sécurité, réunis pour concevoir des systèmes robustes et innovants.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card-3d">
              <Tilt3D maxTilt={8} scale={1.03} className="h-full">
                <div className="group relative h-full bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-zinc-100 dark:border-zinc-800">
                  <div
                    className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-sm"
                    style={{ transform: "translateZ(26px)" }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div style={{ transform: "translateZ(16px)" }}>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                  </div>
                </div>
              </Tilt3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
