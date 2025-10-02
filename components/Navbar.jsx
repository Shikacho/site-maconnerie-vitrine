import Link from "next/link";
import { Hammer } from "lucide-react";
import { BRAND } from "../lib/brand";

export default function Navbar() {
  const items = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/devis", label: "Devis" },
  ];
  return (
    <nav className="sticky top-0 z-40 bg-red-700 text-white">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        <span className="font-semibold">Maçonnerie Durand</span>
        <ul className="hidden sm:flex gap-2">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                className="px-3 py-2 rounded-lg hover:bg-red-600"
                href={it.href}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
