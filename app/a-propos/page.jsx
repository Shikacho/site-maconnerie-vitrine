import Section from "../../components/Section";
import Card from "../../components/Card";
import { BRAND } from "../../lib/brand";
import { ShieldCheck, Hammer, Ruler, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <Section title="À propos" subtitle="Qui sommes-nous ?">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-gray-800">
          <p>
            <span className="font-semibold text-brand-dark">{BRAND.name}</span>{" "}
            accompagne particuliers et professionnels pour des travaux de
            maçonnerie générale : fondations, murs porteurs, ouvertures, dalles,
            extensions et rénovations de façade. Intervention sur{" "}
            {BRAND.address}.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-sm">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 mt-0.5 text-brand-dark" />{" "}
              {BRAND.insurance}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-brand-dark" />
              Zone : Pyrénées-Orientales (66), Hérault (34), Aude (11)
            </li>
            <li className="flex items-start gap-3">
              <Hammer className="w-5 h-5 mt-0.5 text-brand-dark" /> Neuf &
              rénovation
            </li>
            <li className="flex items-start gap-3">
              <Ruler className="w-5 h-5 mt-0.5 text-brand-dark" /> Conseils
              techniques & devis gratuits
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-brand-light ring-brand/30 text-sm">
            <p className="font-medium text-brand-dark">Nos engagements</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-800">
              <li>Respect des délais et du voisinage.</li>
              <li>Chantier propre & sécurisé.</li>
              <li>Transparence sur les matériaux et les coûts.</li>
            </ul>
          </div>
        </div>

        <Card>
          <img
            src="https://source.unsplash.com/800x900/?mason,work"
            alt="Équipe au travail"
            className="h-72 w-full object-cover"
          />
          <div className="p-5 text-sm bg-brand/20">
            <p className="font-semibold text-brand-dark">{BRAND.name}</p>
            <p className="text-gray-800 mt-1">
              Entreprise familiale – 15 ans d’expérience cumulée.
            </p>
            <p className="text-gray-700">{BRAND.siret}</p>
            <p className="text-gray-700">Horaires : {BRAND.hours}</p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
