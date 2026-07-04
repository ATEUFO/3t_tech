"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { HomeIcon, Users, Package, Mail } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <Dock className="bg-white/50 border border-zinc-200 shadow-xl">
        <DockIcon onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
          <HomeIcon className="size-6 text-zinc-800" />
        </DockIcon>
        <DockIcon onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>
          <Users className="size-6 text-zinc-800" />
        </DockIcon>
        <DockIcon onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
          <Package className="size-6 text-zinc-800" />
        </DockIcon>
        <DockIcon onClick={() => window.location.href = 'mailto:contact@3t.tech'}>
          <Mail className="size-6 text-zinc-800" />
        </DockIcon>
      </Dock>
    </div>
  );
}
