import ChatInput from "../components/ui/ChatInput";
import { useChat } from "../hooks/useChat";
import Icon from "../components/ui/Icon";
import MessageList from "../components/ui/MessageList";
import { useEffect, useRef } from "react";
function ChatPage() {
  const { messages, ask } = useChat();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-blue-900 text-white px-40 pt-20 pb-20">
      <div className="w-12 h-12 bg-icon flex items-center justify-center rounded-xl mb-10 p-2">
        <Icon name="chat" />
      </div>
      <h1 className="text-3xl font-semibold mb-6">Hi there!</h1>
      <p className="text-4xl font-bold mb-2">What would you like to know?</p>
      <p className="text-m font-light text-textSecondary w-[470px]">
        Use one of the most common prompts below or ask your own question
      </p>
      <div className="h-[400px] flex-1 overflow-auto">
        <MessageList bottomRef={bottomRef} messages={messages} />
      </div>
      <div className="w-[600px] h-[65px] flex items-center bg-bgInput rounded-[50px] border-1 border-primary p-2 mt-auto border">
        <ChatInput ask={ask} />
      </div>

    </div>
  );
}

export default ChatPage;
