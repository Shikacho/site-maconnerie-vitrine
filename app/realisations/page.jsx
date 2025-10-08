import { GALLERY } from "../../lib/gallery";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata = {
  title: "Réalisations – TALBAT CONSTRUCTION",
  description:
    "Galerie de chantiers : dallage, ouvertures, fondations, façades…",
};

export default function RealisationsPage() {
  return (
    <section className="bg-brand-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-brand-dark mb-3">
          Nos réalisations
        </h1>
        <p className="text-brand-dark/80 mb-8">
          Découvrez nos chantiers récents réalisés à Narbonne et aux alentours :
          Pyrénées-Orientales (66), Hérault (34) et Aude (11). Cliquez sur une
          photo pour l’agrandir.
        </p>

        <GalleryGrid images={GALLERY} />
      </div>
    </section>
  );
}
