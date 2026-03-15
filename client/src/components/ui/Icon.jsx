import {
  ChatBubbleLeftIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

const icons = {
  chat: ChatBubbleLeftIcon,
  microphone: MicrophoneIcon,
  send: PaperAirplaneIcon,
};

function Icon({ name, className, size = 24 }) {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} size={size} />;
}

export default Icon;
