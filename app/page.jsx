import Link from "next/link";
import Testimonials from "../components/Testimonials";
import { BRAND } from "../lib/brand";

export default function Home() {
  return (
    <div>
      {/* --- Section Hero --- */}
      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand.dark">
            TALBAT CONSTRUCTION
          </h1>
          <p className="mt-2 max-w-2xl text-brand-dark/90">
            {BRAND.name} — maçonnerie générale basée à Narbonne. Nous
            intervenons en {BRAND.address} : fondations, murs porteurs,
            ouvertures, dalles, extensions et façades. Devis gratuit sous 24h
            ouvrées.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/devis"
              className="px-5 py-3 rounded-xl bg-brand-dark hover:bg-brand text-white hover:bg-brand-dark transition"
            >
              Demander un devis
            </Link>
            <Link
              href="/a-propos"
              className="px-5 py-3 rounded-xl bg-brand/20 text-brand-dark hover:bg-brand/30 transition"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* --- Section Réalisations --- */}
      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-brand.dark mb-8">
            Réalisations
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden ring-1 ring-brand/30 bg-white shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://source.unsplash.com/800x600/?masonry,construction&sig=${i}`}
                  alt={`Réalisation ${i}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-sm text-gray-800">
                  Chantier #{i} –{" "}
                  <span className="text-brand.dark font-semibold">
                    Paris & alentours
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Témoignages --- */}
      <section className="bg-brand-light py-16">
        <Testimonials />
      </section>
    </div>
  );
}
