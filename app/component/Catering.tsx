"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Images from photos
import dish from "../photos/roof2.jpeg";
import chief from "../photos/hallroof1.jpeg";
import food from "../photos/roof3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const CateringSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      // Grid Animation
      gsap.fromTo(
        ".catering-img",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#BEB7A4] text-[#1A1A1A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div ref={headerRef} className="relative text-center mb-20">
          {/* Side Labels - Only visible on LG screens */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
              Exceptional Food
            </span>
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
              Anywhere
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tight">
            CATERING<br />
            THE MIMIZ WAY
          </h2>

          <p className="font-body text-lg md:text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto leading-relaxed">
            Whether you're hosting a wedding, corporate gathering, or private celebration,
            our catering brings the warmth of vegetarian hospitality straight to your table.
            From full-service spreads to curated menus, Mimiz Cafe delivers flavor, style,
            and care — wherever the occasion takes you.
          </p>
        </div>

        {/* Image Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { img: dish, alt: "Catering Spread" },
            { img: chief, alt: "Professional Chef" },
            { img: food, alt: "Fresh Ingredients" }
          ].map((item, index) => (
            <div
              key={index}
              className="catering-img relative aspect-[4/5] overflow-hidden group shadow-2xl"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
