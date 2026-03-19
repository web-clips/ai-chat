import ChatMessage from './ChatMessage'

export default function MessageList({ messages, bottomRef }) {

  return (

    <div className="h-[300px] flex flex-col gap-3 p-4 overflow-y-auto mt-10">

      {messages.map((msg, i) => (
        <ChatMessage key={i} msg={msg} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}