import { Star } from "lucide-react";

const testimonials = [
  {
    name: "M. Dupont – Argenteuil",
    text: "Travail impeccable et dans les temps ! Le chantier était propre et le résultat est au-dessus de nos attentes.",
  },
  {
    name: "Mme Martin – Narbonne",
    text: "Équipe très professionnelle, communication fluide et devis clair. Je recommande sans hésiter.",
  },
  {
    name: "Entreprise BTP Sud – Gruissan",
    text: "Partenaire fiable sur plusieurs projets de gros œuvre. Sérieux et respect des délais à chaque fois.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand.dark mb-12 text-center">
          Ce que disent nos clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border-t-4 border-brand-dark flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{t.text}”
              </p>
              <div>
                <div className="flex text-yellow-500 mb-2">
                  {Array(5)
                    .fill()
                    .map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                </div>
                <p className="text-sm font-semibold text-brand.dark">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
