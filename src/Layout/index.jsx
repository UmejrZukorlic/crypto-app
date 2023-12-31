import React from "react";
import Photo from "../assets/logo.png";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Header"></div>
      <div className="navBar">
        <img src={Photo} alt="logo" className="logo" />
        <div className="btns">
          <p className="navbtn">CONVERTER</p>
          <p className="navbtn">EXCHANGE</p>
        </div>
        <select name="select" id="select">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
      </div>
      {props.children}
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
