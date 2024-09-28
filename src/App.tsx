import { ChatProvider } from "./Context/displayContext";
import Home from "./Pages/Home";

const App = () => {
  return (
    <ChatProvider>
      <Home />
    </ChatProvider>
  );
};

export default App;
