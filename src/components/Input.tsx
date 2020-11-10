import React from "react";
import classes from "./Input.module.css";

interface Props {
  label: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ label, placeholder }): JSX.Element => (
  <div className={classes.Container}>
    <span className={classes.Label}>{label}</span>
    <input className={classes.Input} placeholder={placeholder} />
  </div>
);

export default Input;
