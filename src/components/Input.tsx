import React from "react";
import classes from "./Input.module.css";

const Input: React.FC = (): JSX.Element => {
  return (
    <div className={classes.Container}>
      <span className={classes.Label}>Please enter your username</span>
      <input className={classes.Input} />
    </div>
  );
};

export default Input;
