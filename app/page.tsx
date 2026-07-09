"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Navigation } from "@/components/navigation";
import esewa from "../app/photos/esewa.png";
import khalti from "../app/photos/khalti.png";
import imePay from "../app/photos/imePay.png";
import heroImage from "../app/photos/hall.jpg";
import dynamic from "next/dynamic";

const VideoPromo = dynamic(() => import("./component/VideoPromo"));
const MenuSection = dynamic(() => import("./component/Menu"));
const DishReveal = dynamic(() => import("./component/DishReveal"));
const CateringSection = dynamic(() => import("./component/Catering"));
const GallerySection = dynamic(() => import("./component/Gallery"));
const AtmosphereSection = dynamic(() => import("./component/Atmosphere"));
const Footer = dynamic(() => import("./component/Footer"));
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MimizCafeHome() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeOpacity = Math.max(1 - scrollY / 600, 0);

  useEffect(() => {
    // Hero content entrance
    const elements = [pillRef.current, titleRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.transition = "all 1.1s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 200);
    });

    const ctx = gsap.context(() => {
      // Why Choose section cards
      gsap.fromTo(
        ".why-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center md:justify-end overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Mimiz Cafe"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/52" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 text-center md:text-right px-6 md:px-0 max-w-xl md:mr-16 lg:mr-28 xl:mr-36 w-full md:mx-0 mx-auto flex flex-col items-center md:items-end"
          style={{ opacity: fadeOpacity }}
        >
          {/* Location pill */}
          <div ref={pillRef} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-white/25 rounded-full backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F05724]" />
            <span className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-medium">
              Birtamode, Jhapa · Nepal
            </span>
          </div>

          {/* Main heading */}
          <div ref={titleRef}>
            <h1 className="font-display font-bold text-white leading-[0.92] mb-6 text-center md:text-right"
              style={{ fontSize: "clamp(72px, 14vw, 160px)" }}>
              MIMIZ
            </h1>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-6">
              <div className="h-px w-12 bg-white/30" />
              <span className="text-white/70 text-[11px] tracking-[0.5em] uppercase">Cafe</span>
              <div className="h-px w-12 bg-white/30" />
            </div>
            <p className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto md:mr-0 leading-relaxed text-center md:text-right">
              Signature dishes rooted in tradition,<br />served in a space designed to inspire.
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end mt-10 w-full">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-[#F05724] text-white text-[13px] tracking-[0.1em] uppercase font-semibold px-8 py-3.5 rounded-full hover:bg-[#d94d1e] transition-colors duration-300"
            >
              Explore Menu
            </Link>
            <a
              href="tel:9709178530"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-[13px] tracking-[0.1em] uppercase font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              Reserve
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: fadeOpacity * 0.7 }}
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-5 h-8 border border-white/25 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-mimiz-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ── Video promo ───────────────────────────────────── */}
      <VideoPromo />

      {/* ── Signature Plates (existing) ───────────────────── */}
      <MenuSection />

      {/* ── Scroll-triggered Dish Reveal ──────────────────── */}
      <DishReveal />

      {/* ── Catering ──────────────────────────────────────── */}
      <CateringSection />

      {/* ── Gallery ───────────────────────────────────────── */}
      {/* <GallerySection /> */}

      {/* ── Atmosphere ────────────────────────────────────── */}
      <AtmosphereSection />

      {/* ── Why Choose Mimiz ──────────────────────────────── */}
      {/* <section ref={whyRef} className="py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
    
          <div className="mb-16 max-w-xl">
            <p className="text-[#F05724] text-[11px] tracking-[0.35em] uppercase font-medium mb-3">
              Why Mimiz
            </p>
            <h2 className="font-display font-semibold text-slate-900 leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              Crafted with care,<br />served with soul.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "100% Vegetarian",
                body: "Delicious plant-based dishes crafted with creativity and fresh local produce.",
                icon: "🌱",
              },
              {
                label: "Festive Menus",
                body: "Seasonal specialties and signature dishes to celebrate every occasion.",
                icon: "🎉",
              },
              {
                label: "Free Delivery",
                body: "Enjoy our dishes delivered fresh to your doorstep.",
                icon: "🚚",
              },
              {
                label: "Fully Accessible",
                body: "Wheelchair accessible with thoughtful design throughout.",
                icon: "♿",
              },
            ].map((f, i) => (
              <div key={i} className="why-card group">
                <div className="text-3xl mb-5">{f.icon}</div>
                <div className="h-px w-8 bg-[#F05724] mb-4 transition-all duration-300 group-hover:w-16" />
                <h3 className="font-semibold text-slate-900 mb-2 tracking-tight">{f.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Digital Payments ──────────────────────────────── */}
      {/* <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-400 mb-2">Payments</p>
          <h3 className="font-display font-semibold text-slate-900 text-3xl md:text-4xl mb-10">
            We Accept Digital Payments
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              { name: "eSewa", image: esewa },
              { name: "Khalti", image: khalti },
              { name: "IME Pay", image: imePay },
            ].map((p, i) => (
              <div
                key={i}
                className="group w-64 bg-white border border-slate-200 hover:border-[#F05724]/40 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-16 w-full flex items-center justify-center">
                  <img
                    src={p.image.src}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-[#F05724] transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
