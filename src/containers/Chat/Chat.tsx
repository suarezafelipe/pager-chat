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
  const [userConnected, setUserConnected] = useState("");
  const [userDisconnected, setUserDisconnected] = useState("");
  const [messages, setMessages] = useState(new Array<Message>());
  const [typers, setTypers] = useState({});

  const ENDPOINT = `https://pager-hiring.herokuapp.com/?username=${username}`;
  const socket = io(ENDPOINT);

  useEffect(() => {
    socket.on("user-connected", (username: string) => setUserConnected(username));
    socket.on("user-disconnected", (username: string) => setUserDisconnected(username));
    socket.on("is-typing", (typers: Object) => setTypers(typers));
    socket.on("message", (message: Message) =>
      setMessages((previousMessages) => [...previousMessages, message])
    );

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
      <button onClick={() => socket.disconnect()}>DISCONNECT</button>
    </>
  );
};

export default Chat;
