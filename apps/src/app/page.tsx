import React, { useEffect, useState } from "react";
import { fetchContent } from "../lib/api";
import PinupMap from "../components/PinupMap";
import { Content } from "../types/content";

export default function HomePage() {
  const [pins, setPins] = useState<Content[]>([]);
  const userId = "demo-user";

  useEffect(() => {
    fetchContent().then(setPins);
  }, []);

  return <PinupMap pins={pins} userId={userId} />;
}
