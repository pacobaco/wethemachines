import React from "react";
import { Content } from "../types/content";
import { useStripeCheckout } from "../lib/useStripe";

type Props = { content: Content; userId: string };

export default function ContentCard({ content, userId }: Props) {
  const { checkout, loading } = useStripeCheckout();

  return (
    <div className="content-card">
      <h3>{content.title}</h3>
      {content.premium ? (
        <button
          disabled={loading}
          onClick={() => checkout(content.priceId!, userId)}
        >
          {loading ? "Processing..." : "Unlock Premium"}
        </button>
      ) : (
        <p>{content.body}</p>
      )}
    </div>
  );
}
