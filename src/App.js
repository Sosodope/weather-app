import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import WeatherResults from "./components/WeatherResults";

const API_KEY = "8be3d65cca94173480958df7d29d2623";

class App extends React.Component {
  getCurrentWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Header />
        <Form getCurrentWeather={this.getCurrentWeather} />
        <WeatherResults />
      </div>
    );
  }
}

export default App;
