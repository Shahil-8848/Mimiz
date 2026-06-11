"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, X, Phone, Mail, MapPin, Share2 } from "lucide-react";
import mimiz from "../photos/mimiz.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
    { label: "Reservations", href: "/reservations" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ];

  return (
    <footer className="relative bg-[#F05C2B] overflow-hidden">

      {/* ── Wave transition from section above ─────────────── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] h-16 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F05C2B"
          />
        </svg>
      </div>

      {/* ── Subtle texture circles (white, very faint) ──────── */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full bg-white/5 pointer-events-none" />

      {/* ════════════════════════════════════════════════════
          LARGE WORDMARK — editorial anchor at the top
      ════════════════════════════════════════════════════ */}
      <div className="border-b border-white/15 py-10 md:py-12 px-6 lg:px-12">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-6">

          {/* Logo + wordmark */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/15 border border-white/25 flex items-center justify-center overflow-hidden shrink-0">
              <Image src={mimiz} alt="Mimiz" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-3xl md:text-4xl tracking-[0.06em] leading-none block">
                MIMIZ
              </span>
              <span className="text-[10px] tracking-[0.45em] uppercase text-white/55 font-medium mt-0.5 block">
                Cafe · Est. Birtamode
              </span>
            </div>
          </div>

          {/* Tagline — hidden on mobile */}
          <p className="hidden md:block text-white/55 text-sm leading-relaxed max-w-xs text-right italic font-display">
            "Every visit genuinely feels new."
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          MAIN CONTENT GRID
      ════════════════════════════════════════════════════ */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1 — About ─────────────────────────────── */}
          <div className="lg:col-span-1">
            <p className="text-white/90 text-sm leading-[1.85] mb-8">
              Authentic vegetarian cuisine in the heart of Birtamode — where bold
              flavours, warm spaces, and genuine hospitality come together.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Share2, href: "#", label: "Share" },
                { Icon: X, href: "#", label: "X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 — Navigation ────────────────────────── */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.35em] uppercase font-semibold mb-6 flex items-center gap-2">
              <span className="w-5 h-px bg-white/40 inline-block" />
              Explore
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/65 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/0 group-hover:bg-white/60 transition-all duration-300 inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Contact ───────────────────────────── */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.35em] uppercase font-semibold mb-6 flex items-center gap-2">
              <span className="w-5 h-px bg-white/40 inline-block" />
              Contact
            </h4>
            <ul className="space-y-5">
              {[
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Birtamode, Jhapa, Nepal",
                  href: undefined,
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "9709178530",
                  href: "tel:9709178530",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: "hello@mimizcafe.com",
                  href: "mailto:hello@mimizcafe.com",
                },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon size={15} className="text-white/50 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/45 text-[10px] tracking-[0.15em] uppercase mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white/80 text-sm hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 — Hours ─────────────────────────────── */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.35em] uppercase font-semibold mb-6 flex items-center gap-2">
              <span className="w-5 h-px bg-white/40 inline-block" />
              Hours
            </h4>

            <div className="space-y-3 mb-8">
              {[
                { day: "Mon — Fri", time: "9:00 AM — 9:00 PM" },
                { day: "Saturday", time: "9:00 AM — 10:00 PM" },
                { day: "Sunday", time: "10:00 AM — 8:00 PM" },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between items-baseline border-b border-white/10 pb-2.5">
                  <span className="text-white/55 text-xs">{day}</span>
                  <span className="text-white text-xs font-medium">{time}</span>
                </div>
              ))}
            </div>

            {/* Reserve CTA */}
            <a

              className="inline-flex items-center gap-2 bg-white text-[#F05C2B] text-[11px] tracking-[0.15em] uppercase font-bold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg shadow-black/10"
            >
              <Phone size={12} />
              Reserve a Table
            </a>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          BOTTOM BAR
      ════════════════════════════════════════════════════ */}
      <div className="border-t border-white/15 px-6 lg:px-12 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/45 text-[11px] tracking-[0.1em]">
            © {year} Mimiz Cafe. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/40 text-[11px] hover:text-white/80 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
