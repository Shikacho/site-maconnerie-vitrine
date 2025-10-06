"use client";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { FileText } from "lucide-react";
import { SERVICES } from "../lib/services";
import { Field } from "./ContactForm";

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");
  const [service, setService] = useState(SERVICES[0].title);
  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }
  return (
    <Card>
      <form onSubmit={onSubmit} className="p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Nom *" name="name" required />
          <Field label="Email *" name="email" type="email" required />
          <Field label="Téléphone *" name="phone" required />
          <Field label="Ville / CP" name="city" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Type de prestation *" name="service">
            <select
              className="w-full rounded-xl border-gray-300 focus:ring-brand-dark focus:border-brand"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>Ouverture de mur</option>
              <option>Dalle béton</option>
            </select>
          </Field>
          <Field
            label="Surface / dimensions"
            name="size"
            placeholder="ex. 25 m²"
          />
        </div>
        <Field
          label="Budget indicatif"
          name="budget"
          placeholder="ex. 5 000 €"
        />
        <Field
          label="Message"
          name="message"
          textarea
          rows={5}
          placeholder="Décrivez votre projet…"
        />
        <Field label="Photos (optionnel)" name="photos" type="file" multiple />
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" required className="rounded border-gray-300" />
          J’accepte d’être recontacté(e) concernant ma demande.
        </label>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Nous respectons votre vie privée : aucune donnée transmise à des
            tiers.
          </p>
          <Button type="submit" variant="primary">
            <FileText className="w-4 h-4" />
            {status === "loading"
              ? " Envoi…"
              : status === "done"
              ? " Demande envoyée"
              : " Envoyer ma demande"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
