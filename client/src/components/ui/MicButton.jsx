import Icon from "./Icon"
function MicButton() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        onVoice(text);
    };
    return (
        <button className="p-3 text-blue-200 hover:text-white bg-bgInput hover:bg-primary cursor-pointer rounded-[50%] transition duration-300">
            <Icon name="microphone" className="text-white w-5" />
        </button>
    )
}

export default MicButton
