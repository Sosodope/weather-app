import React from "react";
import Thermometer from "../assets/icons/thermometer.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={Thermometer} alt="Thermometer icon" /> Get current weather
      </h1>
      <h5>Search for the current weather of a location</h5>
    </header>
  );
};

export default Header;
