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
    images: ["/logo-talbat.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-talbat.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [{ url: "/logo-talbat.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Contractor",
    name: "TALBAT CONSTRUCTION",
    url: "https://maison-talbat.com",
    telephone: "06 43 92 08 73",
    email: "talb.a.t@hotmail.com",
    logo: "https://maison-talbat.com/logo-talbat.png",
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
        <div className="sm:hidden">
          <MobileHeader />
        </div>
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <main className="flex-1 sm:pt-20">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
