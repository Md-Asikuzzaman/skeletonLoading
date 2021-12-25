import React from "react";
import "./Main.css";
import Phone from "./Phone";
import Users from "./Users";

const Main = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left__side">
          <Users />
        </div>
        <div className="right__side">
          <Phone />
        </div>
      </div>
    </div>
  );
};

export default Main;
