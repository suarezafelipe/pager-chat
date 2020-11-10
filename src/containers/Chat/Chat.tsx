import React from "react";
import Card from "../../components/Card";
import classes from "./Chat.module.css";

const Chat: React.FC = (): JSX.Element => {
  return (
    <Card>
      <div className={classes.Container}>
          <h1>hello world from chat</h1>
      </div>
    </Card>
  );
};

export default Chat;
