import React from "react";
import classes from "./Card.module.css";

const Card: React.FC = (): JSX.Element => {
  return (
    <div className={classes.Card}>
      <h2> Hello from Card component </h2>
    </div>
  );
};

export default Card;
