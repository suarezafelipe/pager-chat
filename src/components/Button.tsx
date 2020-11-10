import React from "react";
import classes from "./Button.module.css";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <div className={classes.Container}>
      <button className={classes.Button}>{text}</button>;
    </div>
  );
};

export default Button;
