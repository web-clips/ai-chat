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
    <div className="h-screen flex flex-col items-start justify-between bg-blue-900 text-white px-4 sm:px-10 md:px-20 lg:px-40 pt-6 sm:pt-10 pb-10">

      {/* Верхний блок */}
      <div className="w-full flex flex-col items-start mb-4">
        {/* Логотип всегда */}
        <div className="w-12 h-12 bg-icon flex items-center justify-center rounded-xl mb-4 p-2">
          <Icon name="chat" />
        </div>

        {/* "Hi there!" всегда */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-left mb-4">Hi there!</h1>

        {/* Остальные тексты только на sm+ */}
        <div className="hidden sm:block">
          <p className="text-3xl sm:text-4xl font-bold mb-2 text-left">What would you like to know?</p>
          <p className="text-sm sm:text-base font-light text-textSecondary text-left sm:w-[470px] w-full mb-6">
            Use one of the most common prompts below or ask your own question
          </p>
        </div>
      </div>

      {/* Сообщения */}
      <div className="flex-1 w-full max-w-4xl mb-4 overflow-auto
                      h-[calc(100vh-200px)] sm:h-[400px]">
        <MessageList bottomRef={bottomRef} messages={messages} />
      </div>

      {/* Инпут */}
      <div className="w-full max-w-4xl mt-4">
        <ChatInput ask={ask} />
      </div>
    </div>
  );
}

export default ChatPage;