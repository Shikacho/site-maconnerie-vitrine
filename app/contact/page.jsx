import Section from "../../components/Section";
import Card from "../../components/Card";
import ContactForm from "../../components/ContactForm";
import { BRAND } from "../../lib/brand";
import { Mail, MapPin, Phone } from "lucide-react";
import LeafletMapShell from "../../components/LeafletMapShell";

const POSITION = [43.1881, 2.9884];
const ADDRESS = "76 Avenue Anatole France, 11100 Narbonne, France";

export default function ContactPage() {
  return (
    <Section title="Nous contacter" subtitle="Parlons de votre projet">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <div className="p-6 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-dark" /> {BRAND.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-dark" /> {BRAND.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-dark" /> {BRAND.address}
              </p>
              <p className="text-gray-600">Nous répondons sous 24 h ouvrées.</p>
            </div>
          </Card>

          <LeafletMapShell
            position={POSITION}
            popupTitle={BRAND.name}
            popupAddress={ADDRESS}
            zoom={14}
          />
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
