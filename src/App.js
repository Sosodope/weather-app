import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import WeatherResults from "./components/WeatherResults";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    unit: "",
    temperature: undefined,
    city: undefined,
    country: undefined,
    weatherType: undefined,
    description: undefined,
    error: undefined
  };
  getCurrentWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const unit = e.target.elements.unit.value;
    const cityInput = document.getElementById("city");
    const countryInput = document.getElementById("country");

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${unit}`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        weatherType: data.weather[0].main,
        country: data.sys.country,
        description: data.weather[0].description,
        error: "",
        unit
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        weatherType: undefined,
        country: undefined,
        description: undefined,
        unit: "",
        error: "Please enter a city and country"
      });
    }
    cityInput.value = "";
    countryInput.value = "";
  };
  handleChange = e => {
    this.setState(prevState => ({ unit: e.target.value }));
  };
  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid main">
          <div className="row">
            <div className="col-sm col-xs-6 form-container">
              <Header />
              <Form getCurrentWeather={this.getCurrentWeather} />
            </div>
            <div className="col-sm col-xs-6 results-container">
              <WeatherResults
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                weatherType={this.state.weatherType}
                error={this.state.error}
                unit={this.state.unit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
