import { askAI } from "../services/openai.service.js";

export const chat = async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await askAI(message);

    res.json({ reply });

  } catch (error) {
    console.error("OpenAi_error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
};