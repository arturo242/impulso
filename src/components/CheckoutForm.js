// components/CheckoutForm.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  // Enrollment data
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [notes, setNotes] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const canSubmit = useMemo(() => {
    return (
      !!stripe &&
      !!elements &&
      childName.trim() &&
      age &&
      guardianName.trim() &&
      phone.trim() &&
      email.trim() &&
      dateFrom &&
      dateTo
    );
  }, [stripe, elements, childName, age, guardianName, phone, email, dateFrom, dateTo]);

  useEffect(() => {
    if (!stripe) return;
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) return;
    // If you are redirected back from a 3DS flow, show status message
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("¡Pago completado! Hemos recibido tu inscripción.");
          break;
        case "processing":
          setMessage("Tu pago se está procesando…");
          break;
        case "requires_payment_method":
          setMessage("Tu pago no pudo completarse. Intenta con otro método.");
          break;
        default:
          setMessage(null);
      }
    });
  }, [stripe]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!stripe || !elements) return;
    if (!canSubmit) {
      setMessage("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setIsSubmitting(true);

    // Optional: send your enrollment data to your backend so you can
    // attach it as metadata to the PaymentIntent or store it in your DB.
    // This keeps Stripe Dashboard + your records in sync.
    // You can implement this route; it's safe to skip if you prefer.
    try {
      await fetch("/api/enrollment/impulso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childName,
          age,
          guardianName,
          phone,
          email,
          dateFrom,
          dateTo,
          notes,
        }),
      });
    } catch {
      // Non-fatal: continue with payment even if this call fails.
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      // Only redirect if the payment method requires it (e.g., 3DS)
      redirect: "if_required",
      confirmParams: {
        // This info shows up on the receipt & can prefill payment UI
        receipt_email: email,
        payment_method_data: {
          billing_details: {
            name: guardianName,
            email,
            phone,
          },
        },
        // If your flow needs a return URL for mandatory redirects:
        return_url: typeof window !== "undefined"
          ? `${window.location.origin}/inscripcion-exitosa`
          : undefined,
      },
    });

    if (error) {
      // Immediate validation or confirmation error
      setMessage(error.message || "Ha ocurrido un error al procesar el pago.");
      setIsSubmitting(false);
      return;
    }

    // Handle result without redirect:
    if (paymentIntent?.status === "succeeded") {
      setMessage("¡Pago completado! Hemos recibido tu inscripción.");
    } else if (paymentIntent?.status === "processing") {
      setMessage("Tu pago se está procesando…");
    } else if (paymentIntent?.status === "requires_payment_method") {
      setMessage("Tu pago no pudo completarse. Prueba con otro método.");
    } else {
      setMessage("Estado de pago desconocido. Revisa tu correo o inténtalo de nuevo.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-left space-y-6">
      <h3 className="text-2xl font-semibold mb-2">Formulario de inscripción</h3>

      {/* Enrollment fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Nombre del niño/a *</label>
          <input
            className="rounded-lg border bg-background p-3"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Nombre y apellidos"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Edad *</label>
          <input
            type="number"
            min="1"
            className="rounded-lg border bg-background p-3"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Años"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Nombre del tutor/a *</label>
          <input
            className="rounded-lg border bg-background p-3"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="Nombre y apellidos"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Teléfono de contacto *</label>
          <input
            className="rounded-lg border bg-background p-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+34 6XX XXX XXX"
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm mb-1">Email *</label>
          <input
            type="email"
            className="rounded-lg border bg-background p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tutor@correo.com"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Fecha de inicio *</label>
          <input
            type="date"
            className="rounded-lg border bg-background p-3"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Fecha de fin *</label>
          <input
            type="date"
            className="rounded-lg border bg-background p-3"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm mb-1">Observaciones (alergias, necesidades especiales, etc.)</label>
          <textarea
            rows={4}
            className="rounded-lg border bg-background p-3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Cuéntanos cualquier información relevante"
          />
        </div>
      </div>

      {/* Stripe PaymentElement */}
      <div className="rounded-xl border p-4 bg-card">
        <label className="block text-sm mb-2">Método de pago</label>
        <PaymentElement />
      </div>

      {message && (
        <div className="text-sm p-3 rounded-lg border bg-emerald-950/40">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit || isSubmitting}
        className="w-full md:w-auto px-6 py-3 text-white btn-grad rounded-xl disabled:opacity-60"
      >
        {isSubmitting ? "Procesando…" : "Pagar e inscribir"}
      </button>

      <p className="text-xs text-muted-foreground">
        Al continuar, aceptas nuestra política de privacidad y el tratamiento de los datos para formalizar la inscripción.
      </p>
    </form>
  );
}
