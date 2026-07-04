import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Products } from "@/components/sections/Products";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress className="top-0 bg-gradient-to-r from-orange-400 to-orange-600 h-1.5" />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Team />
        <Products />
      </div>
    </>
  );
}
