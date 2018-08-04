import React from "react";
import Clouds from "../assets/icons/partly-cloudy.svg";
import Sun from "../assets/icons/sun.svg";
import Rain from "../assets/icons/rain.svg";
import "../App.css";

const weatherIcons = {
  Clouds: "Clouds",
  Clear: "Sun",
  Rain: "Rain"
};

class WeatherResults extends React.Component {
  render() {
    return (
      <div>
        {this.props.city &&
          this.props.country && (
            <p>
              Location: {this.props.city}, {this.props.country}
            </p>
          )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.weatherType && <img src={Sun} alt="weather type" />}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default WeatherResults;
