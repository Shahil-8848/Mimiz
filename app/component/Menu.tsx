"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import dish from "../photos/Chicken Cashewnut Bao.png";
import dish2 from "../photos/CryspyOnion.png";
import dish3 from "../photos/RussianSalad.png";
import dish4 from "../photos/DragonPanner.png";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    name: "Bao (Veg / Chicken)",
    price: "Rs. 289 / 339",
    description: "Soft, fluffy steamed buns with your choice of savory Veg (Rs. 289) or Chicken (Rs. 339) filling."
  },
  {
    name: "Madka Biryani (Veg / Chicken)",
    price: "Rs. 449 / 459",
    description: "Aromatic, long-grain basmati rice layered with spices and slow-cooked in a traditional clay pot. Choose Veg (Rs. 449) or Chicken (Rs. 459)."
  },
  {
    name: "Cooker Momo (Veg / Chicken)",
    price: "Rs. 229 / 279",
    description: "Delicious freshly made momos steamed in a pressure cooker to seal in all the juicy goodness. Veg: Rs. 229, Chicken: Rs. 279."
  },
  {
    name: "Russian Salad",
    price: "Rs. 339",
    description: "A classic refreshing salad of boiled vegetables, diced potatoes, and sweet apples tossed in a rich, creamy mayonnaise dressing."
  },
  {
    name: "Veg Pizza (Medium / Large)",
    price: "Rs. 449 / 549",
    description: "Hand-tossed pizza base topped with robust tomato sauce, seasonal vegetables, and loads of melted mozzarella. Medium: Rs. 449, Large: Rs. 549."
  },
  {
    name: "Crispy Onion Ring",
    price: "Rs. 229",
    description: "Golden-brown, light and crunchy onion rings served hot, the perfect appetizer for sharing."
  },
  {
    name: "Dragon Paneer",
    price: "Rs. 339",
    description: "Spicy Indo-Chinese classic featuring succulent cubes of paneer tossed in a fiery chili and garlic sauce with bell peppers."
  },
  {
    name: "Khana Set (Veg)",
    price: "Rs. 399 / 599",
    description: "Traditional Thakali rice set served with lentils, vegetables, and pickles. Choose standard Thakali Rice (Rs. 399) or premium Marshi Rice (Rs. 599)."
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

      {/* Right Column - Info & 2x2 Images Grid */}
      <div
        ref={rightColRef}
        className="w-full lg:w-[58%] flex flex-col bg-[#F3E5D8]"
      >
        <div className="p-8 md:p-12 lg:p-16 pb-4 md:pb-4 lg:pb-6 flex flex-col justify-start">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight mb-6">
            SIGNATURE DISHES.<br />CLASSIC ROOTS.
          </h2>

          <p className="font-body text-lg text-[#1A1A1A]/80 max-w-2xl mb-8 leading-relaxed">
            Every dish at Mimiz Cafe is a celebration of authentic flavors, crafted with the finest ingredients and a passion for excellence. Inspired by timeless recipes and elevated with a modern touch, our menu brings together comfort, creativity, and unforgettable taste. Whether you’re joining us for a quick coffee, a family meal, or a special celebration, every bite is thoughtfully prepared to make every visit feel truly memorable.
          </p>

          <button className="w-fit px-10 py-4 bg-[#1A1A1A] text-white font-body font-bold uppercase tracking-widest text-sm hover:bg-[#C58D54] transition-colors duration-300 shadow-xl">
            Reserve a Table
          </button>
        </div>

        {/* Bento Grid: 1 large card on the left, 3 stacked cards on the right */}
        <div className="p-8 md:p-12 lg:p-16 pt-0 md:pt-0 lg:pt-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl h-auto md:h-[500px] lg:h-[580px]">
          {/* Card 1: Tall Feature Card (Bao) */}
          <div className="relative overflow-hidden rounded-3xl col-span-1 md:col-span-2 md:row-span-3 h-[280px] md:h-full shadow-lg group border border-[#C58D54]/10">
            <Image
              src={dish}
              alt="Chicken Cashewnut Bao"
              fill
              className="object-cover group-hover:scale-108 transition-all duration-700 ease-out"
            />
            {/* Elegant overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C58D54] font-semibold mb-1">Featured Dish</span>
              <h3 className="font-display text-2xl md:text-3xl text-white font-bold tracking-wide">
                Chicken Cashewnut Bao
              </h3>
            </div>
            {/* Hover border glow */}
            <div className="absolute inset-4 border border-[#C58D54]/30 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
          </div>

          {/* Card 2: Square Top Card (Crispy Onion Ring) */}
          <div className="relative overflow-hidden rounded-tr-[3rem] rounded-bl-[2rem] rounded-tl-xl rounded-br-xl col-span-1 md:col-span-1 md:row-span-1 h-[140px] md:h-full shadow-lg group border border-[#C58D54]/10">
            <Image
              src={dish2}
              alt="Crispy Onion Ring"
              fill
              className="object-cover group-hover:scale-108 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C58D54] font-semibold">Appetizer</span>
              <h3 className="font-display text-base md:text-lg text-white font-bold leading-snug mt-0.5">
                Crispy Onion Rings
              </h3>
            </div>
            <div className="absolute inset-3 border border-[#C58D54]/30 rounded-tr-[2.5rem] rounded-bl-[1.5rem] rounded-tl-lg rounded-br-lg pointer-events-none opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
          </div>

          {/* Card 3: Square Middle Card (Russian Salad) */}
          <div className="relative overflow-hidden rounded-tl-[3rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl col-span-1 md:col-span-1 md:row-span-1 h-[140px] md:h-full shadow-lg group border border-[#C58D54]/10">
            <Image
              src={dish3}
              alt="Russian Salad"
              fill
              className="object-cover group-hover:scale-108 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C58D54] font-semibold">Salad</span>
              <h3 className="font-display text-base md:text-lg text-white font-bold leading-snug mt-0.5">
                Russian Salad
              </h3>
            </div>
            <div className="absolute inset-3 border border-[#C58D54]/30 rounded-tl-[2.5rem] rounded-br-[1.5rem] rounded-tr-lg rounded-bl-lg pointer-events-none opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
          </div>

          {/* Card 4: Square Bottom Card (Dragon Paneer) */}
          <div className="relative overflow-hidden rounded-tr-[3rem] rounded-bl-[2rem] rounded-tl-xl rounded-br-xl col-span-1 md:col-span-1 md:row-span-1 h-[140px] md:h-full shadow-lg group border border-[#C58D54]/10">
            <Image
              src={dish4}
              alt="Dragon Paneer"
              fill
              className="object-cover group-hover:scale-108 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C58D54] font-semibold">Sizzling</span>
              <h3 className="font-display text-base md:text-lg text-white font-bold leading-snug mt-0.5">
                Dragon Paneer
              </h3>
            </div>
            <div className="absolute inset-3 border border-[#C58D54]/30 rounded-tr-[2.5rem] rounded-bl-[1.5rem] rounded-tl-lg rounded-br-lg pointer-events-none opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
