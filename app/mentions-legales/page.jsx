// app/mentions-legales/page.jsx
export const metadata = { title: "Mentions légales – TALBAT CONSTRUCTION" };

export default function MentionsLegales() {
  return (
    <section className="bg-brand-light py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-brand-dark mb-6">
          Mentions légales
        </h1>

        <div className="text-brand-dark/90 space-y-6">
          <h2 className="text-xl font-semibold mt-8">Éditeur du site</h2>
          <p>
            <strong>TALBAT</strong>, SARL au capital social de
            1&nbsp;000,00&nbsp;€.
            <br />
            Siège social : 76 Avenue Anatole France, 11100 Narbonne, France.
            <br />
            <strong>SIREN</strong> : 922&nbsp;807&nbsp;961 —{" "}
            <strong>SIRET (siège)</strong> : 922&nbsp;807&nbsp;961&nbsp;00011
            <br />
            <strong>RCS</strong> : Narbonne, immatriculé le 13/01/2023 — Numéro
            RCS : 922&nbsp;807&nbsp;961 R.C.S. Narbonne
            <br />
            <strong>RNE</strong> : inscrit le 13/01/2023
            <br />
            <strong>TVA intracom</strong> : FR51922807961
            <br />
            Représentant légal : <strong>Ohtay Ozkurt</strong>, gérant.
            <br />
            Tél. : 06&nbsp;43&nbsp;92&nbsp;08&nbsp;73 — Email :{" "}
            <a
              className="underline hover:text-brand"
              href="mailto:talb.a.t@hotmail.com"
            >
              talb.a.t@hotmail.com
            </a>
          </p>

          {/* Hébergement OVHcloud */}
          <h2 className="text-xl font-semibold mt-8">Hébergement</h2>
          <address className="not-italic leading-relaxed">
            Hébergeur : OVHcloud
            <br />
            Adresse : 2 rue Kellermann, 59100 Roubaix, France
            <br />
            Site :{" "}
            <a
              href="https://www.ovhcloud.com"
              className="underline hover:text-brand"
            >
              https://www.ovhcloud.com
            </a>{" "}
            — Tél. : 1007 (depuis la France)
            <br />
            SIRET : 424&nbsp;761&nbsp;419&nbsp;00045
          </address>

          <h2 className="text-xl font-semibold mt-8">Activité & assurances</h2>
          <p className="leading-relaxed text-brand-dark/90">
            Activité : Travaux de maçonnerie générale et gros œuvre.
            <br />
            Assurance responsabilité civile professionnelle et garantie
            décennale souscrites. Références de police en cours de mise à jour.
            <br />
            Attestations disponibles sur demande.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            Propriété intellectuelle
          </h2>
          <p>
            Les contenus du site (textes, images, logos) sont protégés. Toute
            reproduction non autorisée est interdite.
          </p>

          <h2 className="text-xl font-semibold mt-8">Données personnelles</h2>
          <p>
            Voir notre{" "}
            <a
              href="/politique-confidentialite"
              className="underline hover:text-brand"
            >
              Politique de confidentialité & Cookies
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8">Crédits photos</h2>
          <p>Photos © TALBAT, sauf mention contraire.</p>

          <h2 className="text-xl font-semibold mt-8">Dernière mise à jour</h2>
          <p>[20/10/2025]</p>
        </div>
      </div>
    </section>
  );
}
