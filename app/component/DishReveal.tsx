"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dishImg from "../photos/dish.jpg";
import BauPic from "../photos/BaoPic.png";
import BiryaniPic from "../photos/Madka Biryani .png";
import noodles from "../photos/Maxican Taco.png";
import Pizza from "../photos/Pizza.png";
gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    number: "01",
    tag: "Chef's Favourite",
    name: "Maxican\nTaco",
    price: "Rs.270",
    description:
      "",
    accent: "#C58D54",
    imageSrc: noodles,
    overlayColor: "rgba(90,30,0,0.55)",
  },
  {
    number: "02",
    tag: "Most Shared",
    name: "Bau",
    price: "Rs.280",
    description:
      "A curated sampler of baos, steamed till fluffy, filled with vibrant fillings and served with tangy chutneys.",
    accent: "#F05724",
    imageSrc: BauPic,
    overlayColor: "rgba(10,10,10,0.60)",
  },
  {
    number: "03",
    tag: "Heritage Recipe",
    name: "Biryani\n Plate",
    price: "Rs.290",
    description:
      "Aromatic basmati rice layered with spices, fresh herbs, and tender chicken, slow-cooked to perfection.",
    accent: "#7aab72",
    imageSrc: BiryaniPic,
    overlayColor: "rgba(5,20,5,0.65)",
  },
  {
    number: "04",
    tag: "Fire-Kissed",
    name: "Paneer\Pizza",
    price: "Rs.380",
    description:
      "Marinated overnight, kissed by a clay oven's heat. The smoke tells you it's ready before your eyes even do.",
    accent: "#F05724",
    imageSrc: Pizza,
    overlayColor: "rgba(80,20,0,0.60)",
  },
];

export default function DishReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const imageWrap = card.querySelector<HTMLElement>(".dr-image");
        const tag = card.querySelector<HTMLElement>(".dr-tag");
        const num = card.querySelector<HTMLElement>(".dr-number");
        const name = card.querySelector<HTMLElement>(".dr-name");
        const line = card.querySelector<HTMLElement>(".dr-line");
        const desc = card.querySelector<HTMLElement>(".dr-desc");
        const price = card.querySelector<HTMLElement>(".dr-price");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(imageWrap,
          { scale: 1.12, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        )
          .fromTo(tag,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=1.1"
          )
          .fromTo(num,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.9"
          )
          .fromTo(name,
            { y: 56, opacity: 0, clipPath: "inset(100% 0 0 0)" },
            { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1.0, ease: "power4.out" },
            "-=0.6"
          )
          .fromTo(line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.7, ease: "power2.out", transformOrigin: "left center" },
            "-=0.4"
          )
          .fromTo(desc,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(price,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C]">

      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#C58D54] text-[11px] tracking-[0.35em] uppercase font-medium mb-3">
              Scroll to Discover
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.05]">
              Our Signature<br />Dishes
            </h2>
          </div>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs md:text-right">
            Each dish carries decades of tradition — recipes passed down, refined through
            experience, and crafted for today's palate.
          </p>
        </div>
      </div>

      {/* ── Dish cards ── */}
      {dishes.map((dish, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="grid lg:grid-cols-2 min-h-screen border-b border-white/[0.06]"
          >
            {/* Image */}
            <div className={`relative overflow-hidden min-h-[50vh] lg:min-h-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
              <div className="dr-image absolute inset-0">
                {dish.imageSrc ? (
                  <Image
                    src={dish.imageSrc}
                    alt={dish.name.replace("\n", " ")}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={dishImg}
                    alt={dish.name.replace("\n", " ")}
                    fill
                    className="object-cover"
                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: dish.overlayColor }}
                />
              </div>
              {/* Ghost number on image */}
              <span className="dr-number absolute bottom-6 right-8 font-display font-bold text-white/[0.07] select-none leading-none"
                style={{ fontSize: "clamp(100px, 18vw, 200px)" }}>
                {dish.number}
              </span>
            </div>

            {/* Content */}
            <div className={`flex flex-col justify-center px-8 md:px-14 lg:px-16 py-20 bg-[#0C0C0C] ${isEven ? "lg:order-2" : "lg:order-1"}`}>
              {/* Tag */}
              <div className="dr-tag flex items-center gap-3 mb-8">
                <div className="h-px w-6" style={{ background: dish.accent }} />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase font-medium"
                  style={{ color: dish.accent }}
                >
                  {dish.tag}
                </span>
              </div>

              {/* Dish name */}
              <h3
                className="dr-name font-display font-semibold text-white leading-[1.05] mb-7"
                style={{ fontSize: "clamp(40px, 5.5vw, 80px)", whiteSpace: "pre-line" }}
              >
                {dish.name}
              </h3>

              {/* Divider */}
              <div className="dr-line h-px bg-white/15 mb-7" />

              {/* Description */}
              <p className="dr-desc text-white/50 text-base leading-[1.8] max-w-sm mb-10">
                {dish.description}
              </p>

              {/* Price + CTA */}
              <div className="dr-price flex items-center gap-5">
                <span
                  className="font-display text-4xl font-semibold"
                  style={{ color: dish.accent }}
                >
                  {dish.price}
                </span>
                <a
                  href="/menu"
                  className="text-[11px] tracking-[0.22em] uppercase text-white/40 border border-white/15 px-5 py-2 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
