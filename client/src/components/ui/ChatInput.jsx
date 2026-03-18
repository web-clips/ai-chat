import { useState } from "react";
import MicButton from "./MicButton";
import Icon from "./Icon";

export default function ChatInput({ ask }) {

  const [input, setInput] = useState("");

  const send = () => {
    if (!input) return;
    ask(input);
    setInput("");
  }

  return (
    <>
      <MicButton />
      <input className="w-[100%] outline-none pr-5" type="text" placeholder="Ask whatever your want" value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        type="submit"
        onClick={() => send()}
        className="p-3 text-blue-200 hover:text-white hover:bg-btn/60 bg-primary rounded-[50%] transition duration-300 cursor-pointer ml-auto"
      >
        <Icon name="send" className="text-white w-5" />
      </button>
    </>
  );
}