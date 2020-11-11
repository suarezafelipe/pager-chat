import React, { useState } from "react";
import Button from "../../../components/Button";
import classes from "./MessageInput.module.css";

interface Props {
  socket: SocketIOClient.Socket;
}

const MessageInput: React.FC<Props> = ({ socket }): JSX.Element => {
  const [currentMessage, setCurrentMessage] = useState("");
  const postMessage = () => {
    socket.emit("text-message", currentMessage);
    setCurrentMessage("");
  };

  const isTyping = (isTyping: boolean) => {
    socket.emit("typing", isTyping);
  };

  return (
    <div className={classes.MessageInput}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentMessage(e.target.value)
        }
        onFocus={() => isTyping(true)}
        onBlur={() => isTyping(false)}
        value={currentMessage}
      />
      <Button
        text="Send"
        isDisabled={currentMessage === ""}
        onClick={postMessage}
      ></Button>
    </div>
  );
};

export default MessageInput;
