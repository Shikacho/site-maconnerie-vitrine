"use client";

import Link from "next/link";
import Testimonials from "../components/Testimonials";
import { BRAND } from "../lib/brand";
import { GALLERY } from "../lib/gallery";
import GalleryGrid from "../components/GalleryGrid";
import { Phone } from "lucide-react";

const TITLE_MAP = {
  "/realisations/1.jpg": "Charpente bois sur murs en briques",
  "/realisations/2.jpg": "Allée gravillonnée avec bordures",
  "/realisations/3.jpg": "Plancher poutrelles-hourdis polystyrène",
  "/realisations/4.jpg": "Soubassements et dallage avec réseaux",
  "/realisations/5.jpg": "Couverture en tuiles canal neuves",
  "/realisations/6.jpg": "Dallage béton fraîchement coulé",
};
const getTitle = (src) =>
  TITLE_MAP[src] ?? "Réalisation de maçonnerie – Talbat Construction";

export default function Home() {
  const first6 = GALLERY.slice(0, 6);

  return (
    <div>
      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark">
            TALBAT CONSTRUCTION
          </h1>
          <p className="mt-5 sm:mt-6 mb-8 sm:mb-10 max-w-2xl text-brand-dark/90 leading-relaxed">
            {BRAND.name} — Maçonnerie générale basée à Narbonne. Nous
            intervenons en {BRAND.address} : fondations, murs porteurs,
            ouvertures, dalles, extensions et façades. Devis gratuit sous 24h
            ouvrées.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl
               bg-brand-dark text-white hover:bg-brand transition"
            >
              Demander un devis
            </Link>

            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl
               bg-brand/20 text-brand-dark hover:bg-brand/30 transition"
            >
              En savoir plus
            </Link>

            <Link
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl
               bg-emerald-600 text-white hover:bg-emerald-700 ring-1 ring-emerald-900/10 shadow-sm
               focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
              aria-label="Appeler"
            >
              Appeler
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-brand-dark mb-8">
            Réalisations
          </h2>

          <GalleryGrid
            images={first6}
            getAlt={(src) => getTitle(src)}
            showCaptions={true}
          />

          <Link
            href="/realisations"
            className="block mt-8 text-center text-brand-dark underline hover:text-brand"
          >
            Voir toutes les réalisations →
          </Link>
        </div>
      </section>
    </div>
  );
}
