"use client"; // Required because you're using useEffect, useRef, and event listeners

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../../components/ui/button";
import Image from "next/image";

// Import images properly for Next.js optimization
import food from "../photos/food.jpg";
import coffee from "../photos/coffee.jpg";
import dish from "../photos/dish.jpg";
gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    id: 1,
    title: "Artisan Breakfast",
    description: "Farm-fresh eggs, avocado toast & seasonal fruits",

    image: food,
  },
  {
    id: 2,
    title: "Fresh Pastries",
    description: "Handcrafted croissants & buttery delights",

    image: coffee,
  },
  {
    id: 3,
    title: "Signature Coffee",
    description: "Single-origin pour-over & specialty lattes",

    image: dish,
  },
  {
    id: 4,
    title: "Gourmet Sandwiches",
    description: "Artisan bread with premium ingredients",

    image: food,
  },
];

const MenuSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        },
      );

      // Stacked cards animation
      const cards = cardsRef.current?.querySelectorAll(".menu-card");
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              y: 100,
              opacity: 0,
              rotationX: 15,
              transformPerspective: 1000,
            },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            },
          );

          // Hover effect
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -12,
              scale: 1.02,
              boxShadow: "0 20px 60px -15px rgba(0,0,0,0.2)",
              duration: 0.4,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1)",
              duration: 0.4,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);

          // Cleanup listeners on unmount
          return () => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
          };
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-24 md:py-32 bg-secondary overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Taste the <span className="italic">Difference</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From morning brews to afternoon delights, every item is crafted with
            care and the finest ingredients.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stacked-cards"
        >
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="menu-card bg-card rounded-2xl overflow-hidden shadow-soft cursor-pointer group"
            >
              {/* Image with Next.js Image component */}
              <div className="img-zoom aspect-[4/3] overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={item.id <= 2} // Optional: prioritize above-the-fold images
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-display text-xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
