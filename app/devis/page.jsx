import Section from "../../components/Section";
import Card from "../../components/Card";
import QuoteForm from "../../components/QuoteForm";

export default function QuotePage() {
  return (
    <Section title="Demander un devis" subtitle="Gratuit et sans engagement">
      <div className="grid md:grid-cols-2 items-start gap-8">
        <QuoteForm />

        <div className="self-start">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg">Comment ça marche ?</h3>
              <ol className="list-decimal pl-5 mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  Vous décrivez votre projet (surface, type de prestation,
                  photos).
                </li>
                <li>Nous vous appelons pour affiner les détails.</li>
                <li>Vous recevez un devis sous 48 h.</li>
              </ol>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
