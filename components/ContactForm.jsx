"use client";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
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
        <Field label="Votre message" name="message" textarea rows={5} />
        <input
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            En envoyant, vous acceptez d’être recontacté(e).
          </p>
          <Button type="submit" variant="primary">
            <Send className="w-4 h-4" />
            {status === "loading"
              ? " Envoi…"
              : status === "done"
              ? " Envoyé"
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
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-900"
        />
      ) : children ? (
        <div className="mt-1">{children}</div>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-900"
        />
      )}
    </label>
  );
}
