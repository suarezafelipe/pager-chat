import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import classes from "./Username.module.css";

const Username: React.FC = (): JSX.Element => {
  return (
    <Card>
      <div className={classes.Content}>
        <h1 className={classes.Title}>Join chat</h1>
        <Input label="Please enter your username" />
        <Button text="Next" />
      </div>
    </Card>
  );
};

export default Username;
