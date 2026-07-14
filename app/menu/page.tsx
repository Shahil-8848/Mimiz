"use client";

import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";
import { ExternalLink, QrCode, Smartphone, ShoppingBag, Clock, ShieldCheck } from "lucide-react";

export default function Menu() {
  const menuLink = "https://mimiz.ehospitalitynepal.com/guest/gKpQWfCkX8TKWyquxfdzFvkAh3G3/delivery";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(menuLink)}`;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F3E5D8] flex flex-col justify-between">
        {/* Style block for animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan {
            0%, 100% { top: 0%; opacity: 0.8; }
            50% { top: 100%; opacity: 0.8; }
          }
          .scanner-line {
            animation: scan 4s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          .glow-effect {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}} />

        {/* Hero Section */}
        <div className="relative bg-[#1A1A1A] pt-32 pb-20 overflow-hidden flex items-center justify-center border-b border-[#C58D54]/20">
          {/* Decorative Glowing Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C58D54]/10 blur-[100px] pointer-events-none glow-effect" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <span className="font-body text-[#C58D54] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-3 block">
              Mimiz Cafe Experience
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight tracking-wider mb-6">
              OUR DIGITAL MENU
            </h1>
            <p className="font-body text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our full menu online, check out the latest signature plates, and place your order directly. Scan the QR code or click the button below to start.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 md:py-16 flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left Column: Interactive Cards & CTA */}
          <div className="w-full lg:w-1/2 space-y-8 flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl text-[#1A1A1A] font-bold leading-tight">
              Order Online & Enjoy Fresh Flavors
            </h2>
            
            <p className="font-body text-[#1A1A1A]/85 text-sm md:text-base leading-relaxed">
              Welcome to the digital storefront of Mimiz Cafe. Through our online ordering platform, you can browse all of our dishes, view active specials, customize options, and secure your order for instant pickup or direct delivery.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm border border-[#C58D54]/20 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-[#C58D54] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A]">Easy Ordering</h4>
                  <p className="font-body text-xs text-[#1A1A1A]/70 mt-0.5">Quickly select, customize, and add items to your cart.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm border border-[#C58D54]/20 rounded-xl">
                <Smartphone className="w-5 h-5 text-[#C58D54] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A]">Mobile Friendly</h4>
                  <p className="font-body text-xs text-[#1A1A1A]/70 mt-0.5">Perfectly optimized for your mobile device or tablet.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm border border-[#C58D54]/20 rounded-xl">
                <Clock className="w-5 h-5 text-[#C58D54] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A]">Real-time Tracking</h4>
                  <p className="font-body text-xs text-[#1A1A1A]/70 mt-0.5">Track your order preparation and delivery times.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm border border-[#C58D54]/20 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-[#C58D54] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A]">Secure Checkout</h4>
                  <p className="font-body text-xs text-[#1A1A1A]/70 mt-0.5">Safe and secure digital payment methods available.</p>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={menuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1A1A] hover:bg-[#C58D54] text-white font-body font-semibold uppercase tracking-wider text-sm rounded-lg transition-colors duration-300 shadow-xl hover:shadow-2xl active:scale-95 duration-150 group"
              >
                <span>Browse Menu & Order</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column: QR Code Display Card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(197,141,84,0.15)] border border-[#C58D54]/20 max-w-sm w-full text-center">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C58D54]" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C58D54]" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#C58D54]" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#C58D54]" />

              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-[#F3E5D8]/45 rounded-2xl border border-[#C58D54]/10">
                  <QrCode className="w-6 h-6 text-[#C58D54]" />
                </div>
              </div>

              <h3 className="font-display text-xl text-[#1A1A1A] font-bold mb-2">
                Scan with Phone
              </h3>
              
              <p className="font-body text-xs text-[#1A1A1A]/60 mb-6 max-w-[240px] mx-auto leading-relaxed">
                Scan this QR code using your phone's camera to instantly view the menu on your screen.
              </p>

              {/* QR Image Container with Scanning Effect */}
              <div className="relative mx-auto w-56 h-56 p-4 bg-white border-2 border-[#1A1A1A]/10 rounded-2xl overflow-hidden shadow-inner group flex items-center justify-center">
                {/* Scanner Laser Animation */}
                <div className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C58D54] to-transparent scanner-line z-10" />
                
                {/* QR Code Image */}
                <img
                  src={qrCodeUrl}
                  alt="Mimiz Digital Menu QR Code"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain relative z-0"
                />
              </div>

              <div className="mt-6">
                <span className="inline-block text-[10px] tracking-[0.2em] font-semibold text-[#C58D54] bg-[#C58D54]/10 px-4 py-1.5 rounded-full uppercase">
                  mimiz.ehospitalitynepal.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
