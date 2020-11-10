import React, { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { CurrentScreen } from "../Enumerables";
import classes from "./Username.module.css";

interface Props {
  setScreen: Dispatch<SetStateAction<CurrentScreen>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

const Username: React.FC<Props> = ({
  setScreen,
  username,
  setUsername,
}): JSX.Element => {
  return (
    <Card>
      <div className={classes.Content}>
        <h1 className={classes.Title}>Join chat</h1>
        <Input
          label="Please enter your username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Button text="Next" onClick={() => setScreen(CurrentScreen.Chat)} />
      </div>
    </Card>
  );
};

export default Username;
