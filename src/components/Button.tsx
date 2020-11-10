import React from "react";
import classes from "./Button.module.css";

const Button: React.FC = (): JSX.Element => {
  return (
    <div className={classes.Container}>
      <button className={classes.Button}>Next</button>;
    </div>
  );
};

export default Button;
