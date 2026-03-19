import { useState } from "react";
import MicButton from "./MicButton";
import Icon from "./Icon";

export default function ChatInput({ ask }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    ask(input);
    setInput("");
  };

  return (
    <form
      onSubmit={send}
      className="flex items-center w-full sm:w-[600px] h-[65px] bg-bgInput rounded-full border border-primary p-2 mt-auto"
    >
      <MicButton />
      <input
        className="flex-1 outline-none px-4 sm:pr-5"
        type="text"
        placeholder="Ask whatever your want"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="p-3 ml-2 sm:ml-3 text-blue-200 hover:text-white hover:bg-btn/60 bg-primary rounded-full transition duration-300 cursor-pointer"
      >
        <Icon name="send" className="text-white w-5" />
      </button>
    </form>
  );
}