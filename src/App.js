import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import WeatherResults from "./components/WeatherResults";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/grid/columns.sass";

const API_KEY = "8be3d65cca94173480958df7d29d2623";

class App extends React.Component {
  state = {
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

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        weatherType: data.weather[0].main,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        weatherType: undefined,
        country: undefined,
        description: undefined,
        error: "Plesae add a city and country"
      });
    }
  };
  render() {
    return (
      <div class="columns">
        <Header />
        <Form getCurrentWeather={this.getCurrentWeather} />
        <WeatherResults
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          weatherType={this.state.weatherType}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
