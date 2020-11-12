import React, { useState } from "react";
import axios from "../../../../node_modules/axios/index";
import Button from "../../../components/Button";
import classes from "./MessageInput.module.css";

interface Props {
  socket: SocketIOClient.Socket;
}

const MessageInput: React.FC<Props> = ({ socket }): JSX.Element => {
  const [currentMessage, setCurrentMessage] = useState("");
  const postMessage = () => {
    if (currentMessage.startsWith("/gif ")) {
      const query = currentMessage.replace("/gif ", "");
      // TODO move url and api key to environment variables
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=JY3AwDxWwJZ2LLLEqqQAANO74aaqedTT&q=${query}&limit=1&offset=0&rating=g&lang=en`
        )
        .then(({ data }) => {
          socket.emit("image-message", {
            url: data.data[0].images.downsized_medium.url,
            alt: query,
          });
        })
        .catch((error) => console.log(error));
    } else {
      socket.emit("text-message", currentMessage);
    }

    setCurrentMessage("");
    isTyping(false);
  };

  const isTyping = (isTyping: boolean) => {
    socket.emit("typing", isTyping);
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      postMessage();
    }
  };

  return (
    <div className={classes.MessageInput}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentMessage(e.target.value);
          isTyping(true);
        }}
        onBlur={() => isTyping(false)}
        onKeyPress={onKeyPressHandler}
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
