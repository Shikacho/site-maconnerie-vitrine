import { BRAND } from "../lib/brand";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-red-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold text-lg">{BRAND.name}</p>
          <p className="text-red-100">{BRAND.baseline}</p>
          <p className="mt-2 text-red-200">{BRAND.siret}</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <p className="flex items-center gap-2 text-red-100">
            <Phone className="w-4 h-4" /> {BRAND.phone}
          </p>
          <p className="flex items-center gap-2 text-red-100">
            <Mail className="w-4 h-4" /> {BRAND.email}
          </p>
          <p className="flex items-center gap-2 text-red-100">
            <MapPin className="w-4 h-4" /> {BRAND.address}
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Mentions</p>
          <p className="text-red-100">
            Mentions légales • Politique de confidentialité
          </p>
          <p className="text-xs text-red-200 mt-2">
            Photos d&apos;illustration : Unsplash (placeholders).
          </p>
        </div>
      </div>
    </footer>
  );
}
