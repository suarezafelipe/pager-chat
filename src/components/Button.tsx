import React from "react";
import classes from "./Button.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }): JSX.Element => {
  return (
    <div className={classes.Container}>
      <button className={classes.Button} onClick={onClick}>{text}</button>;
    </div>
  );
};

export default Button;
