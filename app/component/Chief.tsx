"use client"; // Client-side for animations and effects

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Assume the image is saved in your assets folder; replace with actual path
import chief from "../photos/chief.jpg";

gsap.registerPlugin(ScrollTrigger);

const ChefHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hover effect handlers
    const handleMouseEnter = () => {
      if (statementRef.current) {
        gsap.to(statementRef.current, {
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (statementRef.current) {
        gsap.to(statementRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const ctx = gsap.context(() => {
      // Image animation: subtle parallax and fade-in
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 50, opacity: 0, scale: 1.1 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Text container fade-in
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Unique bold statement animation: Split words and animate with stagger, rotation, and shadow effect
      if (statementRef.current) {
        const words = statementRef.current.querySelectorAll("span");
        if (words.length > 0) {
          gsap.fromTo(
            words,
            { y: 20, opacity: 0, rotationX: -15, filter: "blur(5px)" },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: statementRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Add event listeners for hover effect
        statementRef.current.addEventListener("mouseenter", handleMouseEnter);
        statementRef.current.addEventListener("mouseleave", handleMouseLeave);
      }
    }, sectionRef);

    // Cleanup function
    return () => {
      ctx.revert();
      // Remove event listeners
      if (statementRef.current) {
        statementRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        statementRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, []);

  // Bold statement text – customize as needed; split into spans for word-by-word animation
  const boldStatement = "Ignite Your Senses with Culinary Mastery";

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-neutral-50 via-orange-50/30 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div
            ref={imageRef}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group"
          >
            <div className="relative w-full aspect-[3/4] lg:aspect-[2/3]">
              <Image
                src={chief}
                alt="Chef crafting a culinary masterpiece"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Decorative border glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F05724]/30 transition-colors duration-300 rounded-2xl lg:rounded-3xl" />
            </div>
          </div>

          {/* Text Side */}
          <div
            ref={textRef}
            className="text-center lg:text-left space-y-6 lg:space-y-8 px-4 lg:px-0"
          >
            <div className="space-y-4">
              <h2
                ref={statementRef}
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight cursor-pointer transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #F05724 0%, #FF8C42 50%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  lineHeight: "1.2",
                }}
              >
                {boldStatement.split(" ").map((word, index) => (
                  <span key={index} className="inline-block mr-2 sm:mr-3">
                    {word}
                  </span>
                ))}
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Witness the passion and precision that goes into every dish. Our
                chefs transform fresh ingredients into unforgettable
                experiences.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                <div className="h-1 w-12 bg-gradient-to-r from-[#F05724] to-orange-400 rounded-full"></div>
                <div className="h-1 w-8 bg-[#F05724]/30 rounded-full"></div>
                <div className="h-1 w-4 bg-[#F05724]/20 rounded-full"></div>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: "👨‍🍳", text: "Master Chefs" },
                { icon: "🌿", text: "Fresh Ingredients" },
                { icon: "✨", text: "Artisanal Craft" },
                { icon: "🔥", text: "Passion Driven" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-orange-100 dark:border-neutral-700 hover:border-[#F05724]/50 transition-all duration-300 hover:shadow-lg"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefHeroSection;
