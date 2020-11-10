import React, { Component } from "react";
import Username from "./Username/Username";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="center">
      <Username />
    </div>
  );
};

export default App;
