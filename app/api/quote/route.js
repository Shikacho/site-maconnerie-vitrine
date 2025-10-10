export const runtime = "nodejs";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const form = await req.formData();
    if (form.get("company")) return Response.json({ ok: true });

    const name = (form.get("name") || "").toString();
    const email = (form.get("email") || "").toString();
    const phone = (form.get("phone") || "").toString();
    const city = (form.get("city") || "").toString();
    const service = (form.get("service") || "").toString();
    const size = (form.get("size") || "").toString();
    const budget = (form.get("budget") || "").toString();
    const message = (form.get("message") || "").toString();

    if (!name || !email || !phone || !service) {
      return Response.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      reply_to: email,
      subject: `Devis – ${service} – ${name} (${phone})`,
      text:
        `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nVille/CP: ${city}\n` +
        `Prestation: ${service}\nSurface: ${size}\nBudget: ${budget}\n\nMessage:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("QUOTE EMAIL ERROR:", e);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
