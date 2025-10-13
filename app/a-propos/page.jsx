// app/a-propos/page.jsx
import Section from "../../components/Section";
import { BRAND } from "../../lib/brand";
import { ShieldCheck, Hammer, Ruler, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <Section title="À propos" subtitle="Qui sommes-nous ?">
      <div className="space-y-8 text-gray-800">
        {/* Intro */}
        <div className="space-y-3">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-brand-dark">{BRAND.name}</span>{" "}
            — À vos côtés pour bâtir votre projet, du rêve au concret. Tous
            travaux de construction, réalisés avec soin à Narbonne et en{" "}
            {BRAND.address}.
          </p>
          <p>
            Intervention en <span className="font-medium">{BRAND.address}</span>
            . Devis gratuit, conseils techniques, suivi sérieux.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <li className="rounded-xl ring-1 ring-brand/20 p-4 flex items-start gap-3 bg-brand-light/60">
            <ShieldCheck className="w-5 h-5 mt-0.5 text-brand-dark" />
            <div className="text-sm">
              <p className="font-semibold text-brand-dark">Assurances</p>
              <p className="text-gray-700">{BRAND.insurance}</p>
            </div>
          </li>
          <li className="rounded-xl ring-1 ring-brand/20 p-4 flex items-start gap-3 bg-brand-light/60">
            <MapPin className="w-5 h-5 mt-0.5 text-brand-dark" />
            <div className="text-sm">
              <p className="font-semibold text-brand-dark">
                Zone d’intervention
              </p>
              <p className="text-gray-700">
                Pyrénées-Orientales (66), Hérault (34), Aude (11)
              </p>
            </div>
          </li>
          <li className="rounded-xl ring-1 ring-brand/20 p-4 flex items-start gap-3 bg-brand-light/60">
            <Hammer className="w-5 h-5 mt-0.5 text-brand-dark" />
            <div className="text-sm">
              <p className="font-semibold text-brand-dark">Neuf & rénovation</p>
              <p className="text-gray-700">
                Gros œuvre, ouvertures, dalles, façades…
              </p>
            </div>
          </li>
          <li className="rounded-xl ring-1 ring-brand/20 p-4 flex items-start gap-3 bg-brand-light/60">
            <Ruler className="w-5 h-5 mt-0.5 text-brand-dark" />
            <div className="text-sm">
              <p className="font-semibold text-brand-dark">Conseils & devis</p>
              <p className="text-gray-700">
                Techniques & devis gratuits sous 24–48 h.
              </p>
            </div>
          </li>
        </ul>

        {/* Engagements (sur le même fond) */}
        <div className="p-5 rounded-xl bg-brand-light ring-1 ring-brand/30">
          <p className="font-medium text-brand-dark">Nos engagements</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-sm">
            <li>Respect des délais et du voisinage.</li>
            <li>Chantier propre & sécurisé.</li>
            <li>Transparence sur les matériaux et les coûts.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
