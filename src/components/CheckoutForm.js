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
  const [pricing, setPricing] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const canSubmit = useMemo(() => {
    return (
      childName.trim() &&
      age &&
      guardianName.trim() &&
      phone.trim() &&
      email.trim() &&
      dateFrom &&
      dateTo &&
      pricing.trim()
    );
    }, [childName, age, guardianName, phone, email, dateFrom, dateTo, pricing]);

  // useEffect(() => {
  //   if (!stripe) return;
  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );
  //   if (!clientSecret) return;
  //   // If you are redirected back from a 3DS flow, show status message
  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent?.status) {
  //       case "succeeded":
  //         setMessage("¡Pago completado! Hemos recibido tu inscripción.");
  //         break;
  //       case "processing":
  //         setMessage("Tu pago se está procesando…");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Tu pago no pudo completarse. Intenta con otro método.");
  //         break;
  //       default:
  //         setMessage(null);
  //     }
  //   });
  // }, [stripe]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!elements) return;
    if (!canSubmit) {
      setMessage("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setIsSubmitting(true);

    const data = { childName, age, guardianName, phone, email, dateFrom, dateTo, notes, pricing };

    const response = await fetch("/api/inscripciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setMessage("¡Inscripción completada! Nos pondremos en contacto contigo pronto.");
    } else {
      const errorData = await response.json();
      setMessage(errorData.error || "Hubo un error al enviar la inscripción. Inténtalo de nuevo.");
    }

  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6">Inscripción</h3>

      {/* Enrollment fields */}
      <div className="grid md:grid-cols-2 gap-4 text-left">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Nombre del niño/a *</label>
          <input
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
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
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Años"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Nombre del tutor/a *</label>
          <input
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="Nombre y apellidos"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Teléfono de contacto *</label>
          <input
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
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
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
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
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Fecha de fin *</label>
          <input
            type="date"
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm mb-1">Observaciones (alergias, necesidades especiales, etc.)</label>
          <textarea
            rows={4}
            className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Cuéntanos cualquier información relevante"
          />
        </div>
      </div>

      <div>
        <select id="pricing" onChange={(e) => setPricing(e.target.value)} className="rounded-lg border border-primary-light shadow focus:shadow-blue-500 outline-none p-3 w-full " required>
          <option className="bg-primary-light" value="">Selecciona una tarifa *</option>
          <option className="bg-primary-light" value={"semanal"} >Bono semanal (60€)</option>
          <option className="bg-primary-light" value={"mensual"}>Bono mensual (200€)</option>
        </select>
      </div>

      {/* Stripe PaymentElement */}
      {/* <div className="rounded-xl border border-primary-light p-4 bg-card">
        <label className="block text-sm mb-2">Método de pago</label>
        <PaymentElement />
      </div> */}

      {message && (
        <div className="text-sm p-3 rounded-lg border bg-emerald-950/40">
          {message}
        </div>
      )}

        <div className="text-sm p-3 rounded-lg border bg-indigo-400/50">
          ℹ️ El pago se realizará en el establecimiento.
        </div>

      <button
        type="submit"
        className="cursor-pointer w-full md:w-auto px-6 py-3 text-white btn-grad rounded-xl disabled:opacity-30 disabled:cursor-not-allowed disabled:btn-grad-disabled font-semibold transition"
      >
        Inscribir
      </button>

      {/* <p className="text-xs text-muted-foreground">
        Al continuar, aceptas nuestra política de privacidad y el tratamiento de los datos para formalizar la inscripción.
      </p> */}
    </form>
  );
}
