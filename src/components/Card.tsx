import React from "react";
import classes from "./Card.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Card: React.FC<Props> = ({ children }): JSX.Element => (
  <div className={classes.Card}>{children}</div>
);

export default Card;
