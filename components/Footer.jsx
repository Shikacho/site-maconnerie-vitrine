"use client";

import Link from "next/link";
import { BRAND } from "../lib/brand";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const has = (v) => typeof v === "string" && v.trim().length > 0;

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        <div>
          <p className="font-semibold text-lg">{BRAND.name}</p>
          {has(BRAND.baseline) && (
            <p className="text-brand-light/90">{BRAND.baseline}</p>
          )}

          <ul className="mt-3 space-y-1 text-brand-light/90">
            {has(BRAND.siret) && (
              <li>
                <span className="font-medium">SIRET&nbsp;:</span> {BRAND.siret}
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Contact</p>
          <ul className="space-y-2 text-brand-light/90">
            {has(BRAND.phone) && (
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {BRAND.phone}
                </a>
              </li>
            )}
            {has(BRAND.email) && (
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href={`mailto:${BRAND.email}`} className="hover:underline">
                  {BRAND.email}
                </a>
              </li>
            )}
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" aria-hidden="true" />
              <address className="not-italic">
                {has(BRAND.headquarters) ? (
                  <>
                    {BRAND.headquarters}
                    {has(BRAND.address) && (
                      <div className="text-xs text-brand-light/80">
                        Secteurs&nbsp;: {BRAND.address}
                      </div>
                    )}
                  </>
                ) : (
                  <>{BRAND.address}</>
                )}
              </address>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Mentions</p>
          <ul className="space-y-2 text-brand-light/90">
            <li>
              <Link href="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-confidentialite"
                className="hover:underline"
              >
                Politique de confidentialité & Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-brand-light/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.
          </span>
          <span>
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>{" "}
            •{" "}
            <Link href="/politique-confidentialite" className="hover:underline">
              Confidentialité
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
