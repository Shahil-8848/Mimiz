"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChefHat,
  Clock,
  Leaf,
  Star,
  Phone,
  Wifi,
  ParkingCircle,
  CreditCard,
  LocateIcon,
  LocateFixedIcon,
  Locate,
} from "lucide-react";
import mimiz from "../app/photos/mimiz.png";
import heroImage from "../app/photos/hallroof1.jpeg";
import esewa from "../app/photos/esewa.png";
import khalti from "../app/photos/khalti.png";
import imePay from "../app/photos/imePay.png";
import MenuSection from "./component/Menu";
import GallerySection from "./component/Gallery";
import ChefHeroSection from "./component/Chief";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MimizCafeHome() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const parallaxOffset = scrollY * 0.5;
  const fadeOpacity = Math.max(1 - scrollY / 500, 0);
  const scaleValue = 1 + scrollY * 0.0002;

  useEffect(() => {
    // GSAP-like animations using Web Animations API
    const animateElement = (element: HTMLElement | null, delay = 0) => {
      if (!element) return;

      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";

      setTimeout(() => {
        element.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    };

    animateElement(titleRef.current, 200);
    animateElement(subtitleRef.current, 400);
    animateElement(ctaRef.current, 600);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-15 h-15  rounded-full flex items-center justify-center">
              <span className="text-white rounded-b-full font-bold text-xl">
                <img src={mimiz.src} alt="mimiz" />
              </span>
            </div>
            <span className="text-2xl font-bold text-slate-800">
              Mimiz Cafe
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              className="text-slate-700 hover:text-[#F05724] transition-colors font-medium"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-[#F05724] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-[#F05724] transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="tel:9709178530"
              className="flex items-center space-x-2 bg-[#F05724] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>9709178530</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center mt-10 justify-center overflow-hidden pt-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage.src})`,
        }}
      >
        {/* Animated Background Elements */}

        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${scaleValue})`,
          }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F05724] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F05724]/10 to-orange-300/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Food Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl opacity-10"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animation: `float ${5 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {["🥗", "🍰", "☕", "🥤", "🍕", "🥪"][i]}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          style={{ opacity: fadeOpacity }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-orange-100">
            <Locate className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-700">
              Birtamode, Jhapa
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#F05724] via-orange-500 to-[#F05724] bg-clip-text text-transparent animate-gradient">
              MIMIZ
            </span>
            <br />
            <span className="text-gray-700">CAFE</span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 bg-slate-300 rounded"></div>
            <div className="h-1 w-32 bg-gradient-to-r from-[#F05724] to-orange-400 rounded mx-2"></div>
            <div className="h-1 w-16 bg-slate-300 rounded"></div>
          </div>

          {/* Subtitle */}
          {/* <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A unique & aesthetic vegetarian experience with
            <span className="font-semibold text-[#F05724]">
              {" "}
              delicious festive menus
            </span>{" "}
            and
            <span className="font-semibold text-[#F05724]">
              {" "}
              signature dishes
            </span>{" "}
            to try!
          </p> */}

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            style={{ backgroundImage: `url(${mimiz})` }}
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#F05724] to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#F05724] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="px-10 py-5 bg-white text-slate-800 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-[#F05724] hover:text-[#F05724] flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Quick Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: Wifi, text: "Free WiFi" },
              { icon: ParkingCircle, text: "Free Parking" },
              { icon: CreditCard, text: "Digital Payment" },
              { text: "🚚 Free Delivery" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 border border-orange-100"
              >
                {item.icon ? (
                  <item.icon className="w-4 h-4 text-[#F05724]" />
                ) : (
                  <span>{item.text.split(" ")[0]}</span>
                )}
                <span className="font-medium text-slate-700">
                  {item.icon ? item.text : item.text.substring(2)}
                </span>
                {/* <h1>THE BOTTOM LINE </h1> */}
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            style={{ opacity: fadeOpacity }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-slate-500 font-medium">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-[#F05724] rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-[#F05724] rounded-full animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes scroll {
            0% {
              opacity: 0;
              transform: translateY(0);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(15px);
            }
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-scroll {
            animation: scroll 2s ease-in-out infinite;
          }
        `}</style>
      </section>

      <MenuSection />
      <ChefHeroSection />
      <GallerySection />
      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F05724] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                Why Choose <span className="text-[#F05724]">Mimiz?</span>
              </h2>
              <p className="text-xl text-slate-600">
                Experience excellence in every bite
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "🌱",
                  title: "100% Vegetarian",
                  description:
                    "Delicious plant-based dishes crafted with care and creativity",
                },
                {
                  icon: "🎉",
                  title: "Festive Menus",
                  description:
                    "Signature dishes and seasonal specialties to celebrate every occasion",
                },
                {
                  icon: "🚚",
                  title: "Free Delivery",
                  description:
                    "Enjoy our delicious food delivered right to your doorstep",
                },
                {
                  icon: "♿",
                  title: "Fully Accessible",
                  description:
                    "Wheelchair accessible with gender-neutral restrooms",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group p-8 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-[#F05724] hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#F05724] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#F05724]/10 to-orange-200/20 blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-100">
              <img
                src={mimiz.src}
                alt="Mimiz cafe ambience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F05724] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              We Accept <span className="text-[#F05724]">Digital Payments</span>
            </h3>
            <p className="text-lg text-slate-600">
              Secure and convenient payment options for your convenience
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-stretch">
            {[
              { name: "eSewa", image: esewa },
              { name: "Khalti", image: khalti },
              { name: "IME Pay", image: imePay },
            ].map((payment, i) => (
              <div
                key={i}
                className="group relative w-full sm:w-[280px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-[#F05724]/30 hover:-translate-y-2"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                  {/* Image Container */}
                  <div className="relative w-full h-32 mb-4 flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50 rounded-xl p-4 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-[#F05724]/5 transition-all duration-300">
                    <img
                      src={payment.image.src}
                      alt={payment.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Payment Name */}
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#F05724] transition-colors">
                    {payment.name}
                  </h4>

                  {/* Decorative Accent */}
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-transparent via-[#F05724] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F05724]/0 to-orange-500/0 group-hover:from-[#F05724]/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#F05724] to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Experience Magic?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-orange-100">
            Visit us today or order online for a delightful vegetarian feast!
          </p>
          <DotLottieReact
            src="https://lottie.host/3b21a866-c005-47f7-af4c-335b72b3710b/PvxznxTZkJ.lottie"
            loop
            autoplay
          />
          <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-[#F05724] rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all hover:scale-105">
              Order Online
            </button>
            <a
              href="tel:9709178530"
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#F05724] transition-all hover:scale-105"
            >
              Call: 9709178530
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F05724] to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-4xl font-bold">Mimiz Cafe</span>
            <DotLottieReact
              src="https://lottie.host/5b45caa9-79d2-45e3-9736-e9b83dce8f17/SVzWN2VkaV.lottie"
              loop
              autoplay
            />
          </div>
          <p className="text-slate-400 mb-4">
            Birtamode's Finest Cafe and Dining Experience
          </p>
          <p className="text-sm text-slate-500">
            © 2026 Mimiz Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
