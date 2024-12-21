import React from "react";
import teapot from "../assets/teapotBeige.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={teapot} alt="Teapot" className="logo" />
      <h1>Chaipour</h1>
      <h2>Speciality Indian Tea</h2>
      <p className="hindi-text">विशेष भारतीय चाय</p>
    </header>
  );
};

export default Header;