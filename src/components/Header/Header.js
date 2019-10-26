import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header text-center">
    <h1>{props.children}</h1>
  </div>
);

export default Header;