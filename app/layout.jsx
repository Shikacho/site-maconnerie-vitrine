import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";

export const metadata = {
  title: "TALBAT CONSTRUCTION",
  description: "Maçonnerie générale à Narbonne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-brand-light">
        <Navbar />

        <MobileHeader />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
