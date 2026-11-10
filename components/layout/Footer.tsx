"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* SVG icons for social networks (lucide-react n'a pas tout)           */
/* ------------------------------------------------------------------ */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/3t-global-tech",
    icon: <LinkedInIcon className="w-5 h-5" />,
    color: "hover:bg-blue-600",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@3TGlobalTech",
    icon: <YouTubeIcon className="w-5 h-5" />,
    color: "hover:bg-red-600",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/3tglobaltech",
    icon: <FacebookIcon className="w-5 h-5" />,
    color: "hover:bg-blue-700",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@3tglobaltech",
    icon: <TikTokIcon className="w-5 h-5" />,
    color: "hover:bg-zinc-700",
  },
  {
    label: "Telegram",
    href: "https://t.me/3tglobaltech",
    icon: <TelegramIcon className="w-5 h-5" />,
    color: "hover:bg-sky-500",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/237600000000",
    icon: <WhatsAppIcon className="w-5 h-5" />,
    color: "hover:bg-green-600",
  },
];

const navLinks = [
  { label: "Accueil", id: "hero" },
  { label: "Notre Vision", id: "vision" },
  { label: "L'Équipe", id: "team" },
  { label: "Nos Solutions", id: "products" },
];

const products = [
  { label: "JobbersFind", href: "/products/jobbersfind" },
  { label: "MboaCash", href: "/products/mboacash" },
  { label: "SomniAlert", href: "/products/somnialert" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-10">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-1">
              Travaillons ensemble
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Un projet ? Une idée ? Parlons-en.
            </h2>
          </div>
          <a
            href="mailto:contact@3t.tech"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold text-sm hover:scale-105 transition-all shadow-lg whitespace-nowrap"
          >
            <Mail className="w-4 h-4" />
            Nous contacter
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer body */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="relative w-16 h-16 mb-5">
              <Image
                src="/assets/3T.Tech_Logo_.svg"
                alt="3T Global Tech Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              3T Global Tech conçoit des solutions numériques à fort impact pour digitaliser
              et rentabiliser les entreprises partout dans le monde.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center transition-all duration-300 ${s.color} text-white hover:scale-110 hover:shadow-lg`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-zinc-400 hover:text-orange-400 text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Nos Solutions
            </h3>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-zinc-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@3t.tech"
                  className="flex items-start gap-3 text-sm hover:text-orange-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  contact@3t.tech
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/237600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-orange-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  +237 6 00 00 00 00
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  Yaoundé, Cameroun
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <span>© {year} 3T Global Tech — Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}

