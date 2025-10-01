// pages/api/create-payment-intent.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 20000,          // 200€ en céntimos
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });
    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error creating payment intent" });
  }
}
