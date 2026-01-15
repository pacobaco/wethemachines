import { Router } from "express";
import Stripe from "stripe";

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2022-11-15" });

router.post("/create-checkout-session", async (req, res) => {
  const { priceId, userId } = req.body;
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.FRONTEND_URL}/success`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    metadata: { userId }
  });
  res.json({ sessionId: session.id });
});

export default router;
