"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import mimiz from "../app/photos/mimiz.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolled = isScrolled || isMobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${scrolled
          ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.07)] py-3.5"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className={`overflow-hidden rounded-full ring-1 transition-all duration-500
            ${scrolled ? "ring-orange-200 w-9 h-9" : "ring-white/30 w-10 h-10"}`}>
            <Image
              src={mimiz}
              alt="Mimiz"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-display font-bold tracking-[0.1em] transition-all duration-500
                ${scrolled ? "text-[#F05724] text-xl" : "text-white text-[22px]"}`}
            >
              MIMIZ
            </span>
            <span className={`text-[9px] tracking-[0.4em] uppercase font-medium mt-0.5 transition-colors duration-500
              ${scrolled ? "text-[#F05724]/60" : "text-white/60"}`}>
              Cafe
            </span>
          </div>
        </Link>

        {/* ── Desktop links ─────────────────────────── */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[12px] tracking-[0.18em] font-medium uppercase transition-colors duration-300 group
                ${scrolled ? "text-slate-700 hover:text-[#F05724]" : "text-white/90 hover:text-white"}`}
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#F05724] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <a
            href="tel:9709178531"
            className="flex items-center gap-2 bg-[#F05724] text-white text-[12px] tracking-[0.06em] font-semibold px-5 py-2.5 rounded-full hover:bg-[#d94d1e] transition-colors duration-300 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>9709178531</span>
          </a>
        </div>

        {/* ── Mobile toggle ─────────────────────────── */}
        <button
          aria-label="Toggle menu"
          className={`md:hidden p-1.5 transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ─────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out
          ${isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-5 border-t border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] tracking-[0.18em] font-medium uppercase text-slate-700 hover:text-[#F05724] transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:9709178531"
            className="inline-flex items-center gap-2 bg-[#F05724] text-white text-[12px] tracking-[0.06em] font-semibold px-5 py-3 rounded-full w-fit"
            onClick={() => setIsMobileOpen(false)}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>9709178531</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
