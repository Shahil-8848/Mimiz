"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mimiz1 from "../photos/hall1.jpeg";
import mimiz2 from "../photos/counter2.jpeg";
import mimiz3 from "../photos/smokingzone.jpeg";
import mimiz4 from "../photos/hallroof1.jpeg";
import mimiz5 from "../photos/top1.jpeg";
import food   from "../photos/food.jpg";

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  label: string;
  num: string;
}

const images: GalleryImage[] = [
  { src: mimiz1, alt: "The Hall",        label: "The Hall",        num: "01" },
  { src: mimiz2, alt: "The Counter",     label: "The Counter",     num: "02" },
  { src: mimiz3, alt: "Smoking Zone",    label: "Smoking Zone",    num: "03" },
  { src: mimiz4, alt: "Hall Ceiling",    label: "Hall Ceiling",    num: "04" },
  { src: mimiz5, alt: "Aerial View",     label: "Aerial View",     num: "05" },
  { src: food,   alt: "Signature Dish",  label: "Signature Dish",  num: "06" },
];

export default function GallerySection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const labelRef    = useRef<HTMLParagraphElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Header label + line ───────────────────────────────
      gsap.fromTo(labelRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 82%" } }
      );
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 82%" } }
      );

      // ── Heading words ─────────────────────────────────────
      const words = headingRef.current?.querySelectorAll<HTMLElement>(".gs-word");
      if (words?.length) {
        gsap.fromTo(words,
          { y: 60, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)",
            duration: 1, stagger: 0.1, ease: "power4.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
        );
      }

      // ── Gallery card reveals — clip-path from bottom ──────
      const cards = gridRef.current?.querySelectorAll<HTMLElement>(".g-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(card,
          { clipPath: "inset(100% 0 0 0)", y: 20 },
          {
            clipPath: "inset(0% 0 0 0)",
            y: 0,
            duration: 1.1,
            delay: i * 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ── Subtle parallax on featured image ─────────────────
      const featured = gridRef.current?.querySelector<HTMLElement>(".g-featured img");
      if (featured) {
        gsap.to(featured, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* ── Header ──────────────────────────────────────── */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            {/* Label + line */}
            <div className="flex items-center gap-3 mb-5">
              <p ref={labelRef} className="text-[#F05724] text-[11px] tracking-[0.38em] uppercase font-medium">
                Our Gallery
              </p>
              <div ref={lineRef} className="h-px w-12 bg-[#F05724]" />
            </div>

            {/* Heading — each word wrapped for clip-path stagger */}
            <h2 className="font-display font-semibold text-slate-900 leading-tight overflow-hidden"
              style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}>
              {["Spaces,", "Stories", "&", "Moments"].map((w) => (
                <span key={w} className="gs-word inline-block mr-[0.25em]">{w}</span>
              ))}
            </h2>
          </div>

          {/* Right — description */}
          <p className="text-slate-400 text-sm leading-[1.85] max-w-xs md:text-right">
            Every corner of Mimiz has a story. These are the spaces, the dishes,
            and the moments that define who we are.
          </p>
        </div>

        {/* ── Main grid — editorial asymmetric ────────────── */}
        <div
          ref={gridRef}
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "340px 340px",
          }}
        >
          {/* 01 — Featured tall (left, spans 2 rows) */}
          <GalleryCard
            image={images[0]}
            className="g-card g-featured"
            style={{ gridColumn: "1 / 6", gridRow: "1 / 3" }}
            large
          />

          {/* 02 */}
          <GalleryCard
            image={images[1]}
            className="g-card"
            style={{ gridColumn: "6 / 10", gridRow: "1 / 2" }}
          />

          {/* 03 */}
          <GalleryCard
            image={images[2]}
            className="g-card"
            style={{ gridColumn: "10 / 13", gridRow: "1 / 2" }}
          />

          {/* 04 */}
          <GalleryCard
            image={images[3]}
            className="g-card"
            style={{ gridColumn: "6 / 9", gridRow: "2 / 3" }}
          />

          {/* 05 */}
          <GalleryCard
            image={images[4]}
            className="g-card"
            style={{ gridColumn: "9 / 11", gridRow: "2 / 3" }}
          />

          {/* 06 */}
          <GalleryCard
            image={images[5]}
            className="g-card"
            style={{ gridColumn: "11 / 13", gridRow: "2 / 3" }}
          />
        </div>

        {/* ── Mobile grid — 2 col ──────────────────────────── */}
        <div className="grid grid-cols-2 gap-3 mt-3 lg:hidden">
          {images.map((img) => (
            <div key={img.num} className="relative overflow-hidden aspect-square group cursor-pointer">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="text-white text-xs tracking-[0.15em] uppercase font-medium">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer row ───────────────────────────────────── */}
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-[11px] tracking-[0.25em] uppercase">
            {images.length} spaces · Birtamode, Jhapa
          </p>
          <a
            href="/gallery"
            className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-slate-600 hover:text-[#F05724] transition-colors duration-300"
          >
            View All
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable card ───────────────────────────────────────── */
interface CardProps {
  image: GalleryImage;
  className?: string;
  style?: React.CSSProperties;
  large?: boolean;
}

function GalleryCard({ image, className = "", style, large }: CardProps) {
  return (
    <div
      className={`${className} relative overflow-hidden group cursor-pointer hidden lg:block`}
      style={style}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Dark overlay — builds on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Ghost number — always visible, subtle */}
      <span
        className="absolute top-4 right-5 font-display font-bold text-white/10 select-none leading-none pointer-events-none transition-all duration-500 group-hover:text-white/20"
        style={{ fontSize: large ? "96px" : "64px" }}
      >
        {image.num}
      </span>

      {/* Label — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-px bg-[#F05724]" />
          <span className="text-[#F05724] text-[9px] tracking-[0.3em] uppercase font-medium">{image.num}</span>
        </div>
        <p className="text-white font-display font-medium text-xl leading-tight">
          {image.label}
        </p>
      </div>

      {/* Top-right "expand" hint */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/0 group-hover:border-white/50 transition-all duration-500" />
    </div>
  );
}
