import React from "react";
import classes from "./Input.module.css";

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChange,
}): JSX.Element => (
  <div className={classes.Container}>
    <span className={classes.Label}>{label}</span>
    <input
      className={classes.Input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
