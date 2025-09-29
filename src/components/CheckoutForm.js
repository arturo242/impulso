"use client";

import { useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url:
          typeof window !== "undefined"
            ? `${window.location.origin}/checkout/success`
            : "https://example.com/checkout/success",
      },
    });

    if (error) {
      setMessage(error.message || "Ha ocurrido un error al pagar.");
      setProcessing(false);
    }
    // Si no hay error, Stripe puede redirigir automáticamente (3DS, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement options={{ layout: "tabs" }} />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full rounded-xl px-4 py-3 bg-black text-white disabled:opacity-60"
      >
        {processing ? "Procesando…" : "Pagar 19,99 €"}
      </button>

      {message && (
        <p className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">{message}</p>
      )}
      <p className="text-xs text-gray-500">
        Modo prueba: usa 4242 4242 4242 4242, cualquier fecha futura y CVC.
      </p>
    </form>
  );
}