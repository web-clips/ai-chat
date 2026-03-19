import ChatMessage from './ChatMessage'

export default function MessageList({ messages, bottomRef }) {
  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto h-[250px] sm:h-[300px] md:h-[400px] mt-4">
      {messages.map((msg, i) => (
        <ChatMessage key={i} msg={msg} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}