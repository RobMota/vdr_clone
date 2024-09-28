import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../assets/icons/close";
import SendIcon from "../assets/icons/send";
import UserIcon from "../assets/icons/user";
import { useChatContext } from "../hook/useChatContext";

type Message = {
  value: string;
};

const Chat = () => {
  const id = useId();
  const { isShowChat, setIsShowChat } = useChatContext();

  const inputText = useRef(null);

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = () => {
    setMessages([...messages, { value }]);
    setValue("");
    inputText.current.focus();
  };

  const handleClick = () => {
    setIsShowChat(false);
  };

  return (
    isShowChat &&
    createPortal(
      <div
        className={`animate-slideUp bg-black fixed top-[60vh] right-12 font-poppins rounded-t-3xl rounded-b-lg border border-[#b2ec05]`}
      >
        <div className="w-64 h-64 flex flex-col">
          <div className=" flex justify-between border-b-[1px] px-3 py-1 border-[#b2ec05] ">
            <div className="flex items-center">
              <UserIcon />
              <p className="text-[#b2ec05] ml-2 font-bold">Atendente</p>
            </div>

            <div className="cursor-pointer" onClick={handleClick}>
              <CloseIcon />
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto text-[14px]">
            {messages.map((msg) => (
              <div
                key={id + "-" + msg.value}
                className="w-full text-white py-1 px-4 "
              >
                <p>{msg.value}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between my-auto pl-3 py-2">
            <input
              type="text"
              className="outline-none w-[90%] bg-[#090909] text-white py-1 px-2 text-[14px] rounded-md border border-[#b2ec05]"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              ref={inputText}
            />
            <button type="submit" onClick={handleSubmit}>
              <div className="w-10 flex items-center justify-center outline-none">
                <SendIcon />
              </div>
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("chat-container") as HTMLElement
    )
  );
};

export default Chat;
