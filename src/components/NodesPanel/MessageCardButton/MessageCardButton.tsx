import { MessageIcon } from "../../../icons";

function MessageCardButton() {
  return (
    <div
      className={`h-16 w-28 hover:bg-blue-50 border border-blue-800 font-bold text-sm text-blue-800 rounded-lg flex flex-col justify-center items-center gap-1 bg-white`}
    >
      <MessageIcon className="h-6 w-6" />
      <p>Message</p>
    </div>
  );
}

export default MessageCardButton;
