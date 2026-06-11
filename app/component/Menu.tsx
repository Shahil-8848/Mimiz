"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import dish from "../photos/Chicken Cashewnut Bao.png";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    name: "Cheese Cashwenet Bao",
    price: "Rs. 220",
    description: "A bao stuffed with cheese and cashewnuts."
  },
  {
    name: "Cheese Momo",
    price: "Rs. 179",
    description: "Steamed momos filled with creamy cheese, served with a tangy tomato-based chutney."
  },
  {
    name: "Pan Fried Noodles",
    price: "Rs. 299",
    description: "Cottage cheese cooked in a creamy tomato sauce, a staple dish celebrated for its rich and velvety texture."
  },
  {
    name: "Vegetable Curry",
    price: "Rs. 200",
    description: "Fresh seasonal vegetables simmered in a fragrant curry sauce with onions, garlic, ginger, and a hint of fenugreek."
  },
  {
    name: "Palak Paneer",
    price: "Rs. 190",
    description: "Creamy spinach sauce enveloping soft cheese cubes, a rich and comforting classic."
  },
  {
    name: "Paneer Tandoori",
    price: "Rs. 200",
    description: "Cottage cheese marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish."
  },
  {
    name: "Paneer Tikka Masala",
    price: "Rs. 200",
    description: "Cottage cheese chunks cooked in a rich tomato sauce with light cream, giving it a magical creamy texture."
  },
  {
    name: "Gobhi Manchurian (V)",
    price: "Rs. 200",
    description: "Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste."
  }
];

const MenuSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Entrance
      gsap.fromTo(
        leftColRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Right Column Entrance
      gsap.fromTo(
        rightColRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Menu Items Stagger
      gsap.fromTo(
        ".menu-item-row",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="min-h-screen bg-[#F3E5D8] overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Left Column - Menu Card */}
      <div
        ref={leftColRef}
        className="w-full lg:w-[42%] bg-[#C58D54] p-8 md:p-12 lg:p-16 flex flex-col"
      >
        <div className="flex justify-between items-start mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-[#1A1A1A] leading-tight">
            SIGNATURE<br />PLATES
          </h2>
          <div className="text-2xl text-[#1A1A1A]">
            🍴
          </div>
        </div>

        <div className="space-y-0 border-t border-[#1A1A1A]/20">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item-row py-6 border-b border-[#1A1A1A]/20 group cursor-default"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] group-hover:translate-x-2 transition-transform duration-300">
                  {item.name}
                </h3>
                <span className="font-body font-bold text-lg text-[#1A1A1A]">
                  {item.price}
                </span>
              </div>
              <p className="font-body text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed max-w-[90%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Info & Image */}
      <div
        ref={rightColRef}
        className="w-full lg:w-[58%] flex flex-col"
      >
        <div className="p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A]  leading-tight">
            SIGNATURE DISHES.<br />CLASSIC ROOTS.
          </h2>

          <p className="font-body text-lg text-[#1A1A1A]/80 max-w-2xl mb-10 leading-relaxed">
            Every item on our menu reflects decades of tradition — recipes passed
            down, refined through experience, and thoughtfully adapted for today's
            palate. From bold, aromatic curries to delicate tandoori finishes, our
            dishes are crafted to honor heritage while welcoming every kind of guest —
            whether it's your first taste or a family favorite.
          </p>

          <button className="w-fit px-10 py-4 bg-[#1A1A1A] text-white font-body font-bold uppercase tracking-widest text-sm hover:bg-[#C58D54] transition-colors duration-300 shadow-xl">
            Reserve a Table
          </button>
        </div>

        {/* Large Image Section */}
        <div className="relative h-[70vh] lg:h-[70vh] w-full overflow-hidden">
          <Image
            src={dish}
            alt="Signature Dish"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
