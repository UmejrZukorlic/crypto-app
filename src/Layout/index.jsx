import React from "react";
import Photo from "../assets/logo.png";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Header"></div>
      <div>
        <img src={Photo} alt="logo" className="logo" />
      </div>
      {props.children}
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
