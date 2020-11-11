import React, { useEffect, useRef } from "react";

import { Message } from "../../../types/Message";
import classes from "./MessageList.module.css";

interface Props {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }): JSX.Element => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [messages]);

  const renderBody = (message: Message) => {
    if (message.type === "text") {
      return <span className={classes.MessageText}>{message.text}</span>;
    } else if (message.type === "image") {
      return <img src={message.url} alt={message.alt} className={classes.Image} />;
    }
  };

  const renderMessages = (): JSX.Element | JSX.Element[] => {
    return messages.map((message: Message) => {
      return (
        <li key={new Date(message.time).getTime()} className={classes.Grid}>
          <div className={classes.Avatar}>
            <img
              src={`https://ui-avatars.com/api/?name=${message.username}`}
              alt={message.username}
            />
          </div>
          <div className={classes.TopRow}>
            <span className={classes.Username}>{message.username}</span>
            <span className={classes.Time}>
              {new Date(message.time).toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className={classes.BottomRow}>{renderBody(message)}</div>
        </li>
      );
    });
  };

  return (
    <div className={classes.MessageList}>
      <ul>{renderMessages()}</ul>
      <div ref={divRef}></div>
    </div>
  );
};

export default MessageList;
