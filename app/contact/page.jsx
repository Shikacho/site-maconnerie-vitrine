import Section from "../../components/Section";
import Card from "../../components/Card";
import ContactForm from "../../components/ContactForm";
import { BRAND } from "../../lib/brand";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage(){
  return (
    <Section title="Nous contacter" subtitle="Parlons de votre projet">
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="p-6 space-y-3 text-sm">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> {BRAND.phone}</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> {BRAND.email}</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {BRAND.address}</p>
            <p className="text-gray-600">Nous répondons sous 24 h ouvrées.</p>
          </div>
        </Card>
        <ContactForm />
      </div>
    </Section>
  );
}
