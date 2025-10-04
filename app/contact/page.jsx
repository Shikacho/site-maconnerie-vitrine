"use client";

import Section from "../../components/Section";
import Card from "../../components/Card";
import ContactForm from "../../components/ContactForm";
import { BRAND } from "../../lib/brand";
import { Mail, MapPin, Phone } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function ContactPage() {
  const position = [43.1843, 3.004];

  return (
    <Section title="Nous contacter" subtitle="Parlons de votre projet">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <div className="p-6 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600" /> {BRAND.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600" /> {BRAND.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" /> {BRAND.address}
              </p>
              <p className="text-gray-600">Nous répondons sous 24 h ouvrées.</p>
            </div>
          </Card>

          <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <strong>{BRAND.name}</strong>
                  <br />
                  Maçonnerie générale à Narbonne
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
