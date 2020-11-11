import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import classes from "./Chat.module.css";
import io from "socket.io-client";
import MessageInput from "./MessageInput/MessageInput";
import { Message } from "../../types/Message";
import MessageList from "./MessageList/MessageList";
import Typers from "./Typers/Typers";

interface Props {
  username: string;
}

const Chat: React.FC<Props> = ({ username }): JSX.Element => {
  const [messages, setMessages] = useState(new Array<Message>());
  const [typers, setTypers] = useState({});

  // TODO move endpoint to environment variables

  const ENDPOINT = `https://pager-hiring.herokuapp.com/?username=${username}`;
  const socket = io(ENDPOINT);

  useEffect(() => {
    socket.on("is-typing", (typers: Object) => setTypers(typers));
    socket.on("message", (message: Message) =>
      setMessages((previousMessages) => [...previousMessages, message])
    );
    socket.emit("typing", false);

    return () => socket.disconnect();
  }, []);

  return (
    <>
      <Card>
        <div className={classes.Container}>
          <MessageList messages={messages} />
          <MessageInput socket={socket} />
          <Typers typers={typers} />
        </div>
      </Card>
    </>
  );
};

export default Chat;
