import React from "react";
import classes from "./Typers.module.css";

interface Props {
  typers: Object;
}

const Typers: React.FC<Props> = ({ typers }): JSX.Element => {
  const renderTypers = (): string => {
    let peopleTyping = new Array<string>();
    for (const [key, value] of Object.entries(typers)) {
      if (value) {
        peopleTyping.push(key);
      }
    }

    if (peopleTyping.length === 1) {
      return `${peopleTyping[0]} is typing...`;
    } else if (peopleTyping.length > 1) {
      return "People are typing...";
    }
  };
  return <span className={classes.SmallLabel}>{renderTypers()}</span>;
};

export default Typers;
