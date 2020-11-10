import React, { useState } from "react";
import Username from "./Username/Username";
import "./App.css";
import Chat from "./Chat/Chat";
import { CurrentScreen } from "./Enumerables";

const App: React.FC = (): JSX.Element => {
  const [screen, setScreen] = useState(CurrentScreen.Username);
  const [username, setUsername] = useState("");

  return (
    <div className="center">
      {screen === CurrentScreen.Username && (
        <Username
          setScreen={setScreen}
          username={username}
          setUsername={setUsername}
        />
      )}
      {screen === CurrentScreen.Chat && <Chat />}
      <span>username: {username}</span>
    </div>
  );
};

export default App;
