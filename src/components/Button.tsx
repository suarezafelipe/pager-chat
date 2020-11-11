import React from "react";
import classes from "./Button.module.css";

interface Props {
  text: string;
  onClick: () => void;
  isDisabled: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  isDisabled,
}): JSX.Element => {
  return (
    <button
      className={`${classes.Button} ${
        isDisabled ? classes.Disabled : classes.Active
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
