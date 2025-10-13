"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { BRAND } from "../lib/brand";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/devis", label: "Devis" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="sm:hidden w-full bg-brand-dark text-white sticky top-0 z-[60] shadow-md">
      <div className="relative px-3 pt-[calc(env(safe-area-inset-top)+8px)] pb-3">
        <div className="w-full flex justify-center">
          <Link href="/" aria-label="Aller à l’accueil" className="block">
            <div className="relative w-[360px] h-[125px] max-w-[85vw]">
              <Image
                src="/logo-talbat.png"
                alt={`${BRAND.name} logo`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 420px) 85vw, 360px"
              />
            </div>
          </Link>
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2.5 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {BRAND?.baseline && (
        <p className="text-center text-[17px] leading-5 text-white/90 tracking-wide pb-3 px-4">
          {BRAND.baseline}
        </p>
      )}

      {open && (
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[59] bg-transparent"
        />
      )}
      {open && (
        <div className="relative z-[60] border-t border-white/10 bg-brand-dark text-white shadow-lg">
          <nav className="flex flex-col">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-[16px] font-medium hover:bg-white/10 active:bg-white/15 transition"
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
