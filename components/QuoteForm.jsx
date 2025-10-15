"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { FileText } from "lucide-react";
import { SERVICES } from "../lib/services";
import { Field } from "./ContactForm";

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");
  const [cooldown, setCooldown] = useState(0);
  const [service, setService] = useState(SERVICES[0].title);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function onSubmit(e) {
    e.preventDefault();
    if (cooldown > 0) return;
    setStatus("loading");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    try {
      const res = await fetch("/api/quote", { method: "POST", body: form });
      if (!res.ok) throw new Error("HTTP " + res.status);

      // reset du formulaire et de la sélection
      formEl.reset();
      setService(SERVICES[0].title);

      setStatus("done");
      setCooldown(30);
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  }

  const disabled = status === "loading" || cooldown > 0;

  return (
    <Card>
      <form onSubmit={onSubmit} className="p-6 space-y-4">
        {status === "error" && (
          <p className="text-sm px-3 py-2 rounded-lg bg-red-50 text-red-700 border border-red-200">
            Une erreur est survenue. Merci de réessayer dans un instant.
          </p>
        )}
        {(status === "done" || cooldown > 0) && (
          <p className="text-sm px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
            Demande envoyée.{" "}
            {cooldown > 0 && <>Vous pourrez renvoyer dans {cooldown}s.</>}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Nom *" name="name" required />
          <Field label="Email *" name="email" type="email" required />
          <Field label="Téléphone *" name="phone" required />
          <Field label="Ville / CP" name="city" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Type de prestation *" name="service">
            <select
              className="w-full rounded-xl border border-gray-300 bg-white text-gray-900
              outline-none focus:border-brand focus:ring-2 focus:ring-brand/40 transition-shadow"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>Ouverture de mur</option>
              <option>Dalle béton</option>
              <option>Autres</option>
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
          placeholder="ex. 5 000 €"
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
          <Button type="submit" variant="primary" disabled={disabled}>
            <FileText className="w-4 h-4" />
            {status === "loading"
              ? " Envoi…"
              : cooldown > 0
                ? ` Réessayer dans ${cooldown}s`
                : " Envoyer ma demande"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
