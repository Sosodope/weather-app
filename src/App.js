import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import WeatherResults from "./components/WeatherResults";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <WeatherResults />
      </div>
    );
  }
}

export default App;
