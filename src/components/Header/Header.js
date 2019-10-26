import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header text-center">
    <h1>{props.children}</h1>
    <div className="scores">
      <h2>Current Score: {props.score}</h2>
      <h2>Highest Score: {props.highScore}</h2>
    </div>
  </div>
);

export default Header;