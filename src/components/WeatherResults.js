import React from "react";
import Clouds from "../assets/icons/partly-cloudy.svg";
import "../App.css";

class WeatherResults extends React.Component {
  render() {
    return (
      <div>
        <p>
          Location: {this.props.city}, {this.props.country}
        </p>
        <p>Temperature: {this.props.temperature}</p>
        <p>Description: {this.props.description}</p>
        {this.props.weatherType === "Clouds" ? (
          <img src={Clouds} alt="weather type" />
        ) : null}
      </div>
    );
  }
}

export default WeatherResults;
