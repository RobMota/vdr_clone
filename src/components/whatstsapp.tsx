import whatsappIcon from "../assets/icons/whatsapp.svg";
import { useChatContext } from "../hook/useChatContext";

const Whatsapp = () => {
  const { isShowChat, setIsShowChat } = useChatContext();

  const handleClick = () => {
    setIsShowChat(!isShowChat);
  };

  return (
    <div
      className={`${
        isShowChat ? "none" : "fixed"
      } top-[85vh] right-12 bg-[#b2ec05] rounded-3xl cursor-pointer`}
      onClick={handleClick}
    >
      <img src={whatsappIcon} alt="whatsapp" className="h-[70px] w-[70px]" />
    </div>
  );
};

export default Whatsapp;
