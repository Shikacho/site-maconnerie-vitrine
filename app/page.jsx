import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 h-[48vh] flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Maçonnerie Durand
          </h1>
          <p className="mt-3 text-gray-700">
            Rénovation • Dallage • Extensions • Façades
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/devis"
              className="px-5 py-3 rounded-xl bg-red-700 text-white hover:bg-red-600"
            >
              Demander un devis
            </Link>
            <Link
              href="/a-propos"
              className="px-5 py-3 rounded-xl bg-orange-100 text-red-700 hover:bg-orange-200"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-red-700">Réalisations</h2>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden ring-1 ring-red-200 bg-white shadow hover:shadow-lg transition"
            >
              <img
                src={`https://source.unsplash.com/800x600/?masonry,construction&sig=${i}`}
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
      </section>
    </div>
  );
}
