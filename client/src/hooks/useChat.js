import { useState } from "react";
import { sendMessage } from "../api/chatApi";

export const useChat = () => {

  const [messages,setMessages] = useState([]);
  const [loading,setLoading] = useState(false);

  const ask = async(text)=>{

    const userMessage = { role:"user", text };

    setMessages(prev => [...prev, userMessage]);

    setLoading(true);

    const data = await sendMessage(text);

    const aiMessage = { role:"ai", text:data.reply };

    setMessages(prev => [...prev, aiMessage]);

    setLoading(false);
  }

  return { messages, ask, loading }

}