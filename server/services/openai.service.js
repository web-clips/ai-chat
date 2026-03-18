import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export const askAI = async (message) => {

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message
      }
    ],
   model: "llama-3.3-70b-versatile"
  });

  return chatCompletion.choices[0].message.content;
};