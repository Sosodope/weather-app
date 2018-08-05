import React from "react";
import Clouds from "../assets/icons/partly-cloudy.svg";
import Sun from "../assets/icons/sun.svg";
import Rain from "../assets/icons/rain.svg";
import Mist from "../assets/icons/mist.svg";
import Snow from "../assets/icons/snow.svg";
import Thunderstorm from "../assets/icons/thunderstorm.svg";
import "../App.css";

const weatherIcons = {
  Clouds: Clouds,
  "few clouds": Clouds,
  "scattered clouds": Clouds,
  "broken clouds": Clouds,
  Clear: Sun,
  Rain: Rain,
  "shower rain": Rain,
  Fog: Mist,
  Mist: Mist,
  Snow: Snow,
  Thunderstorm: Thunderstorm
};

class WeatherResults extends React.Component {
  getWeatherIcon = icon => {
    return weatherIcons[`${icon}`];
  };
  render() {
    return (
      <div>
        {this.props.weatherType && (
          <img
            src={this.getWeatherIcon(this.props.weatherType)}
            alt="weather type"
          />
        )}
        {this.props.city &&
          this.props.country && (
            <p>
              Location: {this.props.city}, {this.props.country}
            </p>
          )}
        {this.props.temperature && (
          <p>
            Temperature: {this.props.temperature}
            <span> &#176;{this.props.unit === "imperial" ? "F" : "C"}</span>
          </p>
        )}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default WeatherResults;
