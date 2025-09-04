import React from "react";
import Message from "./Message";

const Welcome = ({ text }) => {
  return (
    <div>
      <h1 style={{ color: "green" }}>{text}</h1>
    </div>
  );
};

export default Welcome;
