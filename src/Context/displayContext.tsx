import { createContext, useState } from "react";

type IContextType = {
  isShowChat: boolean;
  setIsShowChat: (value: boolean) => void;
};

const INITIAL_STATE: IContextType = {
  isShowChat: false,
  setIsShowChat: () => {},
};

export const ChatContext = createContext(INITIAL_STATE);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isShowChat, setIsShowChat] = useState(false);

  const value = {
    isShowChat,
    setIsShowChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
