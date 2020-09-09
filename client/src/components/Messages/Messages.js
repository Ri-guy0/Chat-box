import React from "react";
import ScrollToButtom from "react-scroll-to-bottom";
import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => (
  <ScrollToButtom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToButtom>
);

export default Messages;
