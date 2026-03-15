import Icon from "../components/ui/Icon";
import ChatMessage from "../components/ui/ChatMessage";
import ChatInput from "../components/ui/ChatInput";
import MicButton from "../components/ui/MicButton";
function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-blue-900 text-white px-40 pt-40 pb-20">
      <div className="w-12 h-12 bg-icon flex items-center justify-center rounded-xl mb-10 p-2">
        <Icon name="chat" />
      </div>
      <h1 className="text-3xl font-semibold mb-6">Hi there!</h1>
      <p className="text-4xl font-bold mb-6">What would you like to know?</p>
      <p className="text-2xl font-light text-textSecondary w-[470px]">
        Use one of the most common prompts below or ask your own question
      </p>
      <ChatMessage />
      <div className="w-[600px] flex items-center bg-blue-900/80 rounded-2xl p-2 border border-blue-700 pl-5 mt-auto">
        <MicButton />
        <ChatInput />
        <button
          type="submit"
          className="w-[60px] h-full p-4 items-center content-center bg-btn rounded-xl"
        >
          <Icon name="send" />
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
