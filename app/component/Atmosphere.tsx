"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import atmosphereImg from "../photos/DslrHall.jpg";

gsap.registerPlugin(ScrollTrigger);

const AtmosphereSection = () => {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, y: -50 },
        {
          scale: 1,
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Text Animations
      const textAnims = [
        { ref: text1Ref, x: -100, y: 0 },
        { ref: text2Ref, x: 100, y: 0 },
        { ref: text3Ref, x: 0, y: 100 },
      ];

      textAnims.forEach((anim) => {
        gsap.fromTo(
          anim.ref.current,
          { 
            opacity: 0, 
            x: anim.x, 
            y: anim.y,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Image without Overlay */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <Image
          src={atmosphereImg}
          alt="Mimiz Atmosphere"
          fill
          className="object-cover"
        />
      </div>

      {/* Aesthetic Text Elements at Edges */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 py-24 flex flex-col justify-between">
        {/* Top Left */}
        <div ref={text1Ref} className="self-start mt-12 md:mt-24 drop-shadow-2xl">
          <span className="block text-[10px] md:text-xs font-bold text-[#F05724] tracking-[0.4em] uppercase mb-4">
            Curated Space
          </span>
          <h2 className="text-4xl md:text-7xl font-display text-white leading-tight">
            Culinary <br />
            <span className="italic font-light opacity-90">Excellence.</span>
          </h2>
        </div>

        {/* Middle Right */}
        <div ref={text3Ref} className="self-end md:mr-12 drop-shadow-xl">
          <p className="text-white/80 font-light tracking-widest text-sm md:text-base max-w-xs text-right italic">
            "A harmony of flavors and aesthetics, designed for your comfort."
          </p>
        </div>

        {/* Bottom Right */}
        <div ref={text2Ref} className="self-end mb-12 md:mb-24 text-right drop-shadow-2xl">
          <h2 className="text-4xl md:text-7xl font-display text-white leading-tight mb-4">
            Atmospheric <br />
            <span className="italic font-light opacity-90 text-[#F05724]">Comfort.</span>
          </h2>
          <span className="block text-[10px] md:text-xs font-bold text-white/60 tracking-[0.4em] uppercase">
            Birtamode, Jhapa
          </span>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-12 right-12 w-32 h-[1px] bg-white/20 hidden md:block"></div>
      <div className="absolute bottom-12 left-12 w-32 h-[1px] bg-white/20 hidden md:block"></div>
      <div className="absolute top-12 left-12 w-[1px] h-32 bg-white/20 hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-[1px] h-32 bg-white/20 hidden md:block"></div>
    </section>
  );
};

export default AtmosphereSection;
