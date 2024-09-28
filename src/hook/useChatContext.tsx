import { useContext } from "react";
import { ChatContext } from "../Context/displayContext";

export const useChatContext = () => useContext(ChatContext);
