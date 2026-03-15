import Icon from "./Icon"
function MicButton() {
    return (
        <button className="p-2 text-blue-200 hover:text-white">
          <Icon name="microphone" className="text-white w-6" />
        </button>
    )
}

export default MicButton
