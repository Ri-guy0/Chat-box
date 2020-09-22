import React from "react";
import onlineIcon from "../Icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1> Online: </h1>
        <h2>
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <img alt="Online Icon" src={onlineIcon} />
              {name}
            </div>
          ))}
        </h2>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
