import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header text-center">{props.children}
    <div className="jumbotron">
      Current Score: {props.score} 
      <br/>
      Highest Score: {props.highScore}
    </div>
    <div className="scores">
    </div>
  </div>
);

export default Header;