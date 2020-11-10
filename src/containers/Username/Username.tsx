import React from "react";
import Card from "../../components/Card";

const Username: React.FC = (): JSX.Element => {
  return (
    <div>
      <Card>
        <h1>Join chat</h1>
        <input placeholder="Enter your username" />
      </Card>
    </div>
  );
};

export default Username;
