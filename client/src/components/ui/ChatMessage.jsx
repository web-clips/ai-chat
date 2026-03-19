import { motion } from "framer-motion";

export default function ChatMessage({msg}){

  const isUser = msg.role === "user";

  return (

    <motion.div
      initial={{opacity:0, y:10}}
      animate={{opacity:1, y:0}}
      className={`max-w-[70%] p-3 rounded-xl text-xs
      ${isUser ? "bg-blue-600 self-end" : "bg-gray-700 self-start"}
      `}
    >
      {msg.text}
    </motion.div>

  );
}