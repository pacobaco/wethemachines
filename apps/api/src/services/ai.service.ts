import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateTags = async (content: string) => {
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Generate 5 short, relevant tags for content" },
      { role: "user", content }
    ],
    max_tokens: 50
  });

  const tags = response.choices[0]?.message?.content
    .split(",")
    .map(t => t.trim())
    .filter(Boolean);

  return tags || [];
};
