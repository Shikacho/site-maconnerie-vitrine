// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";

export const metadata = {
  metadataBase: new URL("https://maison-talbat.com"),
  title: {
    default: "TALBAT CONSTRUCTION",
    template: "%s – TALBAT CONSTRUCTION",
  },
  description:
    "Maçonnerie générale à Narbonne et alentours. Tous travaux de construction. Devis gratuit sous 24h.",
  alternates: { canonical: "https://maison-talbat.com" },
  openGraph: {
    type: "website",
    url: "https://maison-talbat.com",
    siteName: "TALBAT CONSTRUCTION",
    title: "TALBAT CONSTRUCTION",
    description:
      "Maçonnerie générale à Narbonne et alentours. Tous travaux de construction.",
    images: ["/og-image.jpg"], // place un visuel dans /public si tu veux
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Contractor",
    name: "TALBAT CONSTRUCTION",
    telephone: "06 43 92 08 73",
    email: "talb.a.t@hotmail.com",
    url: "https://maison-talbat.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "76 Avenue Anatole France",
      postalCode: "11100",
      addressLocality: "Narbonne",
      addressCountry: "FR",
    },
    areaServed: ["Aude (11)", "Hérault (34)", "Pyrénées-Orientales (66)"],
    openingHours: "Mo-Fr 08:00-18:30",
  };

  return (
    <html lang="fr">
      <body className="bg-brand-light min-h-screen flex flex-col">
        {/* Mobile only */}
        <div className="sm:hidden">
          <MobileHeader />
        </div>

        {/* Desktop only */}
        <div className="hidden sm:block">
          <Navbar />
        </div>

        {/* espace sous l’en-tête desktop (navbar sticky ~80px) */}
        <main className="flex-1 sm:pt-20">{children}</main>

        <Footer />

        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
