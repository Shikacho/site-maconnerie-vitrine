"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BRAND } from "../lib/brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/devis", label: "Devis" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/95 backdrop-blur shadow-md" : "bg-brand-dark"
      }`}
    >
      <div className="max-w-6xl mx-auto h-16 sm:h-20 px-4 flex items-center justify-between text-white relative">
        <div className="flex-1 flex justify-center sm:justify-start items-center">
          <Link href="/" className="block">
            <div className="relative w-[160px] h-[55px] sm:w-[175px] sm:h-[58px] flex items-center">
              <Image
                src="/logo-talbat.png"
                alt={`${BRAND.name} logo`}
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 640px) 160px, 175px"
              />
            </div>
          </Link>
        </div>

        <ul className="hidden sm:flex gap-1">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="px-3 py-2 rounded-lg hover:bg-brand/25 focus:outline-none focus:ring-2 focus:ring-brand-light/60 transition"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden absolute right-4 p-2 rounded-md hover:bg-brand/25 focus:outline-none focus:ring-2 focus:ring-brand-light"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-brand-dark text-white border-t border-brand-light/20 shadow-lg animate-slideDown">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-lg hover:text-brand-light transition"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
