import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "TALBAT CONSTRUCTION – Maçonnerie générale",
  description:
    "Rénovation, dallage, extensions et façades – Secteurs 66 • 34 • 11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-brand-light text-brand-dark flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
