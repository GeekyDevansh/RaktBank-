import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";

function NavBar({ mode, setMode }) {
  const handleOnClick = () => {
    if (mode === "off") {
      setMode("on");
    } else {
      setMode("off");
    }
  };

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="companylogo" />
      </div>
      <Link to="/home">
        <div
          className="home"
          style={{
            color: mode === "on" ? "black" : "#828282",
            fontWeight: mode === "on" ? "900" : "normal",
            // fontFamily: mode === "on" ? "Arial" : "Poppins",
            fontSize: "1.5vw",
          }}
        >
          Home
        </div>
      </Link>
      <Link to="/about">
        {" "}
        <div
          className="about"
          style={{
            color: mode === "on" ? "black" : "#828282",
            fontWeight: mode === "on" ? "900" : "normal",
            // fontFamily: mode === "on" ? "Arial" : "Poppins",
            fontSize: "1.5vw",
          }}
        >
          About
        </div>
      </Link>
      <Link to="/contact">
        <div
          className="contact"
          style={{
            color: mode === "on" ? "black" : "#828282",
            fontWeight: mode === "on" ? "900" : "normal",
            // fontFamily: mode === "on" ? "Arial" : "Poppins",
            fontSize: "1.5vw",
          }}
        >
          Contact
        </div>
      </Link>

      <span>
        <div
          className="dyslexic"
          style={{
            color: mode === "on" ? "black" : "#828282",
            fontWeight: mode === "on" ? "900" : "normal",
            // fontFamily: mode === "on" ? "Arial" : "Poppins",
            fontSize: "1.5vw",
          }}
        >
          Dyslexic Friendly &nbsp;
        </div>
      </span>
      <label className="switch">
        <input type="checkbox" onClick={handleOnClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default NavBar;
