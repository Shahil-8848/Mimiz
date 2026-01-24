"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import heroCafe from "@/assets/hero-cafe.jpg";
// import coffeeLatte from "@/assets/coffee-latte.jpg";
// import breakfastPlate from "@/assets/breakfast-plate.jpg";
// import pastries from "@/assets/pastries.jpg";
// import sandwich from "@/assets/sandwich.jpg";
// import mimiz1 from "../photos/mimiz1.jpeg";
// import mimiz1 from "../photos/hall1.jpeg";
import mimiz2 from "../photos/counter2.jpeg";
import mimiz1 from "../photos/hall1.jpeg";
import mimiz3 from "../photos/smokingzone.jpeg";
import mimiz4 from "../photos/hallroof1.jpeg";
import mimiz5 from "../photos/top1.jpeg";
import Image from "next/image";
import food from "../photos/food.jpg";
gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: mimiz2, alt: "Mimiz Cafe interior", span: "col-span-2 row-span-2" },
  { src: mimiz1, alt: "Signature latte art", span: "col-span-1 row-span-1" },
  { src: mimiz3, alt: "Gourmet breakfast", span: "col-span-1 row-span-1" },
  { src: mimiz4, alt: "Fresh pastries", span: "col-span-1 row-span-1" },
  { src: mimiz5, alt: "Artisan sandwich", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Gallery items with stagger
      const items = galleryRef.current?.querySelectorAll(".gallery-item");
      if (items) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        });
      }

      // Parallax effect on main image
      const mainImage = galleryRef.current?.querySelector(".gallery-main img");
      if (mainImage) {
        gsap.to(mainImage, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
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
      className="py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            A Glimpse of <span className="italic">Mimiz</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the warmth, flavors, and moments that make Mimiz Cafe
            special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${image.span} ${
                index === 0 ? "gallery-main" : ""
              } relative overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-display text-lg font-bold text-dark-foreground">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
