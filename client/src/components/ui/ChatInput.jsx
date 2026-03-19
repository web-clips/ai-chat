import { useState } from "react";
import MicButton from "./MicButton";
import Icon from "./Icon";

export default function ChatInput({ ask }) {

  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault()
    if (!input) return;
    ask(input);
    setInput("");
  }

  return (
    <>
      <form onSubmit={send} className="w-[600px] h-[65px] flex items-center bg-bgInput rounded-[50px] border-1 border-primary p-2 mt-auto border">
        <MicButton />
        <input className="w-[100%] outline-none pr-5" type="text" placeholder="Ask whatever your want" value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          type="submit"
          className="p-3 text-blue-200 hover:text-white hover:bg-btn/60 bg-primary rounded-[50%] transition duration-300 cursor-pointer ml-auto"
        >
          <Icon name="send" className="text-white w-5" />
        </button>
      </form>
    </>
  );
}