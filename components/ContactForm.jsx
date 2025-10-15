"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [cooldown, setCooldown] = useState(0); // secondes restantes

  // timer pour le cooldown
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function onSubmit(e) {
    e.preventDefault();
    if (cooldown > 0) return; // anti-spam
    setStatus("loading");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      if (!res.ok) throw new Error("HTTP " + res.status);

      // succès : reset + message + cooldown
      formEl.reset();
      setStatus("done");
      setCooldown(30);
    } catch {
      setStatus("error");
    } finally {
      // repasse en idle après 2 s (le bandeau de succès reste visible pendant le cooldown)
      setTimeout(() => setStatus("idle"), 2000);
    }
  }

  const disabled = status === "loading" || cooldown > 0;

  return (
    <Card>
      <form onSubmit={onSubmit} className="p-6 space-y-4">
        {/* Messages de statut */}
        {status === "error" && (
          <p className="text-sm px-3 py-2 rounded-lg bg-red-50 text-red-700 border border-red-200">
            Une erreur est survenue. Merci de réessayer dans un instant.
          </p>
        )}
        {(status === "done" || cooldown > 0) && (
          <p className="text-sm px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
            Message envoyé.{" "}
            {cooldown > 0 && <>Vous pourrez renvoyer dans {cooldown}s.</>}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Nom *" name="name" required />
          <Field label="Email *" name="email" type="email" required />
          <Field label="Téléphone *" name="phone" required />
          <Field label="Ville / CP (dans 66 / 34 / 11)" name="city" />
        </div>

        <Field label="Votre message" name="message" textarea rows={5} />

        {/* honeypot */}
        <input
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="mt-2 flex items-center justify-between px-1 sm:px-2">
          <p className="text-xs text-gray-500 mr-3">
            En envoyant, vous acceptez d’être recontacté(e).
          </p>
          <Button type="submit" variant="primary" disabled={disabled}>
            <Send className="w-4 h-4" />
            {status === "loading"
              ? " Envoi…"
              : cooldown > 0
                ? ` Réessayer dans ${cooldown}s`
                : " Envoyer"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export function Field({
  label,
  name,
  type = "text",
  textarea,
  rows = 3,
  children,
  required,
  placeholder,
}) {
  const base =
    "mt-1 w-full rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 " +
    "outline-none focus:border-brand focus:ring-2 focus:ring-brand/40 transition-shadow";
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      ) : children ? (
        <div className="mt-1">{children}</div>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
