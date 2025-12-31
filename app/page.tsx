"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChefHat, Clock, Leaf, Star } from "lucide-react";
import { useState, useEffect } from "react";
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation />
      <main className="">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Images with Ken Burns Effect */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${
                  currentImage === index ? "animate-ken-burns" : ""
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  animation:
                    currentImage === index ? "kenBurns 10s ease-out" : "none",
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
                RESTRO V
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
                Experience culinary excellence where tradition meets innovation.
                <br />
                Discover unforgettable flavors crafted by our master chefs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/menu"
                  className="px-10 py-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/reservations"
                  className="px-10 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg shadow-lg backdrop-blur-sm"
                >
                  Reserve a Table
                </Link>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
              </div>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-8 right-8 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes kenBurns {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.1);
              }
            }

            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
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
                transform: translateY(12px);
              }
            }

            .animate-fade-in-up {
              animation: fade-in-up 1s ease-out;
            }

            .animate-scroll {
              animation: scroll 2s ease-in-out infinite;
            }
          `}</style>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-balance">
              Why Choose Luminaire
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ChefHat,
                  title: "Delicious Foods",
                  description:
                    "Our chef has good touch for creating memorable dining experiences",
                },
                {
                  icon: Leaf,
                  title: "Fresh Ingredients",
                  description:
                    "Locally sourced, seasonal ingredients at peak freshness",
                },
                {
                  icon: Clock,
                  title: "Impeccable Service",
                  description:
                    "Attentive, professional staff dedicated to your satisfaction",
                },
                {
                  icon: Star,
                  title: "Fine Dining",
                  description:
                    "Michelin-star quality experience in an elegant atmosphere",
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-balance">
              Signature Dishes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Pan-Seared Salmon",
                  image:
                    "bg-gradient-to-br from-orange-400/30 to-orange-600/30",
                },
                {
                  name: "Beef Wellington",
                  image: "bg-gradient-to-br from-amber-700/30 to-amber-900/30",
                },
                {
                  name: "Truffle Risotto",
                  image: "bg-gradient-to-br from-yellow-600/30 to-amber-800/30",
                },
              ].map((dish, i) => (
                <div
                  key={i}
                  className={`h-64 rounded-lg ${dish.image} border border-border flex items-end p-6 group cursor-pointer hover:shadow-xl transition-all`}
                >
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground text-balance">
              Ready to Dine?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
              Join us for an unforgettable culinary journey. Reserve your table
              today.
            </p>
            <Link
              href="/reservations"
              className="inline-flex px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-medium"
            >
              Reserve Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
