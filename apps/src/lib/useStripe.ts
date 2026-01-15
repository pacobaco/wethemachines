import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export const useStripeCheckout = () => {
  const [loading, setLoading] = useState(false);

  const checkout = async (priceId: string, userId: string) => {
    setLoading(true);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

    const res = await fetch("/api/payments/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, userId })
    });
    const { sessionId } = await res.json();
    await stripe?.redirectToCheckout({ sessionId });
    setLoading(false);
  };

  return { checkout, loading };
};
