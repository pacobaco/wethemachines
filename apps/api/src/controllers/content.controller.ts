import { Request, Response } from "express";
import { generateTags } from "../services/ai.service";

const dummyContent = [
  { id: "1", title: "Converge Knowledge, Not Prestige", premium: false, creatorId: "1", x: 50, y: 100 },
  { id: "2", title: "AI-Powered Futures", premium: true, priceId: "price_123", creatorId: "2", x: 200, y: 150 }
];

export const getContent = async (_req: Request, res: Response) => {
  const taggedContent = await Promise.all(dummyContent.map(async c => ({
    ...c,
    tags: await generateTags(c.title)
  })));
  res.json({ items: taggedContent });
};
