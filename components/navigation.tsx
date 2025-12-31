"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Phone, Clock } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reservations", label: "Reservations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Mon-Sat: 11AM - 11PM</span>
                <span className="sm:hidden">11AM - 11PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
            </div>
            <div className="hidden md:block text-sm font-medium">
              Free Delivery on Orders Over Rs.500
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/98 backdrop-blur-xl shadow-lg mt-0"
            : "bg-background/95 backdrop-blur-md mt-10 border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-all flex-shrink-0"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-xl">RV</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
                  Restro V
                </div>
                <div className="text-xs text-muted-foreground -mt-1">
                  Fine Dining Experience
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-foreground hover:text-primary-600 transition-colors text-sm font-medium group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Reserve Button - Desktop */}
              <Link
                href="/reservations"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
              >
                Reserve Table
              </Link>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-lg hover:bg-muted transition-colors border border-border flex-shrink-0"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-lg hover:bg-muted transition-colors border border-border flex-shrink-0"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">RV</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">
                  Restro V
                </div>
                <div className="text-xs text-muted-foreground">Fine Dining</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-foreground hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:text-amber-600 transition-all font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/reservations"
              className="block px-4 py-3 mt-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg text-center font-medium hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Table
            </Link>
          </div>

          <div className="p-6 border-t border-border bg-muted/30">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 11AM - 11PM</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="h-[90px]" />
    </>
  );
}
