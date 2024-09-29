import whatsappIcon from "../assets/icons/whatsapp.svg";
import { useChatContext } from "../hook/useChatContext";

const Whatsapp = () => {
  const { isShowChat, setIsShowChat } = useChatContext();

  const handleClick = () => {
    setIsShowChat(!isShowChat);
  };

  return (
    <>
      <div
        className={`md:top-[86vh] md:right-12 md:rounded-full md:border-[30px] md:border-[#b2ec05] md:animate-ping
        ${isShowChat ? "hidden" : "fixed"}
        `}
      />
      <div
        className={`${
          isShowChat ? "hidden" : "fixed"
        } md:top-[85vh] md:right-11 md:bg-[#b2ec05] md:rounded-3xl md:cursor-pointer md:h-[70px] md:w-[70px] md:animate-shake2`}
        onClick={handleClick}
      >
        <img src={whatsappIcon} alt="whatsapp" className="h-[70px] w-[70px]" />
      </div>
    </>
  );
};

export default Whatsapp;
