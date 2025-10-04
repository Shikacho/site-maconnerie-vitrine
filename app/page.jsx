import Link from "next/link";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      {/* --- Section Hero --- */}
      <section className="bg-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700">
            Maçonnerie Durand
          </h1>
          <p className="mt-3 text-gray-800 text-lg">
            Rénovation • Dallage • Extensions • Façades
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/devis"
              className="px-5 py-3 rounded-xl bg-red-700 text-white hover:bg-red-600 transition"
            >
              Demander un devis
            </Link>
            <Link
              href="/a-propos"
              className="px-5 py-3 rounded-xl bg-orange-200 text-red-700 hover:bg-orange-300 transition"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* --- Section Réalisations --- */}
      <section className="bg-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-red-700 mb-8">
            Réalisations
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden ring-1 ring-red-200 bg-white shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://source.unsplash.com/800x600/?masonry,construction&sig=${i}`}
                  alt={`Réalisation ${i}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-sm text-gray-800">
                  Chantier #{i} –{" "}
                  <span className="text-red-700 font-semibold">
                    Paris & alentours
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Témoignages --- */}
      <section className="bg-orange-100 py-16">
        <Testimonials />
      </section>
    </div>
  );
}
