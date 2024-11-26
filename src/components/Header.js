import React from "react";
import teapot from "../assets/teapotBeige.svg";

const Header = () => {
  return (
    <header>
    <img src={teapot} alt="Teapot" style={{ width: "100px", marginBottom: "10px" }} />
      <h1>ChaiPour</h1>
      <h2>Speciality Indian Tea</h2>
      <p>विशेष भारतीय चाय</p>
    </header>
  );
};

export default Header;