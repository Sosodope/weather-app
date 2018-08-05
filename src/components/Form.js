import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getCurrentWeather}>
        <input type="text" name="city" placeholder="Enter City" />
        <input type="text" name="country" placeholder="Enter Country" />
        <select
          name="unit"
          value={this.props.unit}
          onChange={this.handleChange}
        >
          <option value="metric">&#176; C</option>
          <option value="imperial">&#176; F</option>
        </select>
        <button type="submit">Get weather</button>
      </form>
    );
  }
}

export default Form;
