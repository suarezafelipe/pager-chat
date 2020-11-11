import React from "react";

import { Message } from "../../../types/Message";
import classes from "./MessageList.module.css";

interface Props {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }): JSX.Element => {
  const renderMessages = (): JSX.Element | JSX.Element[] => {
    return messages.map((message) => {
      if (message.type === "text") {
        return (
          <li key={new Date(message.time).getTime()}>
            <div>{message.username}</div>
            <div>{message.time}</div>
            <div>{message.text}</div>
          </li>
        );
      }
      if (message.type === "image") {
        return (
          <li key={new Date(message.time).getTime()}>
            <div>{message.username}</div>
            <div>{message.time}</div>
            <div>
              <img src={message.url} alt={message.alt}></img>
            </div>
          </li>
        );
      }
    });
  };

  return (
    <div className={classes.MessageList}>
      <ul>{renderMessages()}</ul>
    </div>
  );
};

export default MessageList;
