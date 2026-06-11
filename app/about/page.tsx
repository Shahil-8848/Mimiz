"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";
import { Phone, Zap, Leaf, Coffee } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../photos/roof2.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Universal reveal: any element with .gs-reveal
      gsap.utils.toArray<HTMLElement>(".gs-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Clip-path text reveals
      gsap.utils.toArray<HTMLElement>(".gs-clip").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)", y: 20 },
          {
            clipPath: "inset(0% 0 0 0)",
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Image zoom reveal
      gsap.utils.toArray<HTMLElement>(".gs-image").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Staggered line reveals
      gsap.utils.toArray<HTMLElement>(".gs-stagger-parent").forEach((parent) => {
        const children = parent.querySelectorAll<HTMLElement>(".gs-stagger-child");
        gsap.fromTo(
          children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 80%",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ════════════════════════════════════════════════
          HERO — cinematic full-bleed
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Mimiz Cafe"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-stop gradient: dark bottom, lighter top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>

        {/* Bottom-anchored text block */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24 w-full">
          {/* Top label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#F05724]" />
            <span className="text-white/60 text-[11px] tracking-[0.35em] uppercase font-medium">
              Mimiz Cafe · Birtamode, Jhapa
            </span>
          </div>

          <h1
            className="font-display font-bold text-white leading-[0.9] mb-6"
            style={{ fontSize: "clamp(56px, 11vw, 128px)" }}
          >
            Every Visit<br />
            <em className="text-[#F05724] not-italic">Feels New.</em>
          </h1>

          <p className="text-white/60 text-base md:text-lg font-light max-w-lg leading-relaxed">
            A family restaurant designed to surprise — where the food is honest,
            the atmosphere is alive, and no two visits feel the same.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white" />
          <span className="text-white text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OPENING MANIFESTO
      ════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="gs-reveal text-[#F05724] text-[11px] tracking-[0.4em] uppercase font-medium mb-8">
            Our Story
          </p>
          <blockquote
            className="gs-clip font-display text-3xl md:text-4xl lg:text-5xl text-slate-900 font-medium italic leading-[1.25]"
          >
            "We didn't build Mimiz to be just another restaurant. We built it to be
            a place you'd return to — not out of habit, but out of love."
          </blockquote>
          <div className="mt-12 h-px bg-slate-100 max-w-xs mx-auto" />
          <p className="gs-reveal mt-10 text-slate-500 text-base leading-[1.9] max-w-2xl mx-auto">
            Surrounded by living greenery, lit by warm Edison bulbs, and designed
            to feel like somewhere new every time — Mimiz Cafe is where food is
            delicious, the atmosphere breathes, and every corner holds a story worth
            discovering.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 1 — THE LOUNGE
      ════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] overflow-hidden">
        <div className="grid lg:grid-cols-[58%_42%] min-h-[80vh]">
          {/* Image — no rounded corners, editorial */}
          <div className="gs-image relative overflow-hidden min-h-[50vh] lg:min-h-full">
            <Image
              src="/photos/about/lounge.png"
              alt="Mimiz Cafe Lounge"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-10 md:px-14 lg:px-16 py-20">
            <div className="gs-stagger-parent">
              <div className="gs-stagger-child flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#F05724]" />
                <span className="text-[#F05724] text-[10px] tracking-[0.3em] uppercase font-medium">
                  The Lounge
                </span>
              </div>

              <h2 className="gs-stagger-child font-display font-semibold text-slate-900 leading-tight mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Where comfort<br />meets aesthetic.
              </h2>

              <p className="gs-stagger-child text-slate-500 text-base leading-[1.85] mb-8 max-w-sm">
                Step inside and feel the difference immediately. The main lounge is
                modern, airy, and alive — potted plants and climbing vines line every
                corner, Edison bulbs cast a golden warmth, and velvet seating invites
                you to stay longer than you planned.
              </p>

              <div className="gs-stagger-child grid grid-cols-2 gap-3 max-w-xs">
                {["Lush indoor greenery", "Edison bulb lighting", "Velvet seating", "Instagram-worthy"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#F05724] shrink-0" />
                    <span className="text-slate-600 text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PULL QUOTE — full width
      ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <p className="gs-clip font-display italic font-medium text-slate-900 text-center leading-[1.2]"
            style={{ fontSize: "clamp(26px, 4.5vw, 54px)" }}>
            "Come for the coffee,<br />
            <span className="text-[#C58D54]">stay for the atmosphere."</span>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — SMOKING ZONE
      ════════════════════════════════════════════════ */}
      <section className="bg-[#111111] overflow-hidden">
        <div className="grid lg:grid-cols-[42%_58%] min-h-[80vh]">
          {/* Content — left */}
          <div className="flex flex-col justify-center px-10 md:px-14 lg:px-16 py-20 lg:order-1">
            <div className="gs-stagger-parent">
              <div className="gs-stagger-child flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-orange-400" />
                <span className="text-orange-400 text-[10px] tracking-[0.3em] uppercase font-medium">
                  Smoking Zone
                </span>
              </div>

              <h2 className="gs-stagger-child font-display font-semibold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Chill out back.<br />
                <span className="text-orange-400">Smoke & flavour.</span>
              </h2>

              <p className="gs-stagger-child text-white/50 text-base leading-[1.85] mb-6 max-w-sm">
                An outdoor-style escape at the back of the cafe — dark ceilings, warm
                strip lighting, hanging plants in colorful baskets, and chunky wooden
                tables with bold chairs. A place made entirely for good company.
              </p>

              <p className="gs-stagger-child text-white/50 text-base leading-[1.85] mb-10 max-w-sm">
                Unlimited hookah flavours served tableside, with an industrial aesthetic
                that feels worlds apart from the main lounge — intentionally.
              </p>

              <div className="gs-stagger-child flex flex-wrap gap-3">
                {["Unlimited Hookah", "Industrial Aesthetic", "Open-Air Vibe"].map((tag) => (
                  <span key={tag} className="text-[11px] tracking-[0.15em] uppercase border border-white/15 text-white/50 px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image — right */}
          <div className="gs-image relative overflow-hidden min-h-[50vh] lg:min-h-full lg:order-2">
            <Image
              src="/photos/about/smoking.png"
              alt="Smoking Zone"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — THE HALL
      ════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] overflow-hidden">
        <div className="grid lg:grid-cols-[58%_42%] min-h-[80vh]">
          {/* Image */}
          <div className="gs-image relative overflow-hidden min-h-[50vh] lg:min-h-full">
            <Image
              src="/photos/about/hall.png"
              alt="Mimiz Hall"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-10 md:px-14 lg:px-16 py-20">
            <div className="gs-stagger-parent">
              <div className="gs-stagger-child flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#F05724]" />
                <span className="text-[#F05724] text-[10px] tracking-[0.3em] uppercase font-medium">
                  The Hall
                </span>
              </div>

              <h2 className="gs-stagger-child font-display font-semibold text-slate-900 leading-tight mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                For every kind<br />of gathering.
              </h2>

              <p className="gs-stagger-child text-slate-500 text-base leading-[1.85] mb-10 max-w-sm">
                Planning something special? Our dedicated hall seats 20–25 guests and
                can be privately booked for birthdays, reunions, family dinners, and
                corporate events. Stunning arch-accented interiors, full privacy.
              </p>

              <ul className="gs-stagger-child space-y-3 mb-10 max-w-sm">
                {[
                  "Capacity for 20–25 guests",
                  "Private booking, call to reserve",
                  "Arch-accented, corridor interiors",
                  "Ideal for celebrations & corporates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-[#F05724] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="tel:9709178530"
                className="gs-stagger-child inline-flex items-center gap-2 bg-[#F05724] text-white text-[12px] tracking-[0.08em] uppercase font-semibold px-7 py-3 rounded-full hover:bg-[#d94d1e] transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                Book Your Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHAT MAKES MIMIZ DIFFERENT
      ════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 grid md:grid-cols-2 gap-6 items-end">
            <div>
              <p className="gs-reveal text-[#F05724] text-[11px] tracking-[0.4em] uppercase font-medium mb-4">
                Our Difference
              </p>
              <h2 className="gs-clip font-display font-semibold text-slate-900 leading-tight"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
                What makes Mimiz<br />worth returning to.
              </h2>
            </div>
            <p className="gs-reveal text-slate-400 text-sm leading-relaxed max-w-xs md:ml-auto">
              Every detail at Mimiz was considered — not added. These are the things
              our guests talk about when they come back.
            </p>
          </div>

          {/* Features — editorial, no cards */}
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 gs-stagger-parent">
            {[
              {
                Icon: Zap,
                title: "EV Charging Station",
                body: "Charge your vehicle while you dine. Four-wheeler EV charging available right at the entrance — because thoughtfulness doesn't stop at the door.",
                color: "text-blue-500",
              },
              {
                Icon: Leaf,
                title: "A Garden in Every Corner",
                body: "Real plants — not props — breathe life into every space. The air is fresher, the vibe unmistakably organic, and the calm is genuine.",
                color: "text-green-600",
              },
              {
                Icon: Coffee,
                title: "Food Worth Coming Back For",
                body: "A curated menu of freshly prepared dishes rooted in tradition and crafted for today's palate — satisfying cravings and building new favourites.",
                color: "text-[#C58D54]",
              },
            ].map(({ Icon, title, body, color }) => (
              <div key={title} className="gs-stagger-child px-8 md:px-10 py-10 md:py-0 first:pt-0 last:pb-0">
                <Icon className={`w-7 h-7 ${color} mb-6`} />
                <h3 className="font-semibold text-slate-900 text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA — dark, editorial
      ════════════════════════════════════════════════ */}
      <section className="bg-[#111111] py-28 md:py-36 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="gs-reveal text-white/30 text-[11px] tracking-[0.4em] uppercase mb-8">
            Come Visit
          </p>
          <h2 className="gs-clip font-display font-semibold text-white leading-tight mb-8"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>
            Book your table<br />
            <span className="text-[#F05724]">or your private hall.</span>
          </h2>
          <p className="gs-reveal text-white/40 text-base mb-12 leading-relaxed">
            Reserve a corner of the lounge, a hookah at the zone, or the entire hall
            for your next event. Every visit genuinely feels new.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center gs-reveal">
            <a
              href="tel:9709178530"
              className="inline-flex items-center justify-center gap-2 bg-[#F05724] text-white text-[12px] tracking-[0.1em] uppercase font-semibold px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 9709178530
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center border border-white/20 text-white/60 text-[12px] tracking-[0.1em] uppercase font-semibold px-8 py-4 rounded-full hover:border-white/50 hover:text-white transition-all"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
