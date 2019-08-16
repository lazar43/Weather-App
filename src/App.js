import React, { Component } from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "feaf46a5ac074e8138e86731985785c0";

export default class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    const country = e.target.elements.country.value.trim();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    const api_call = await fetch(API);
    const data = await api_call.json();
    //console.log(data);
    if (data.name && data.sys.country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: "Please enter the values"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-xs-5 title-container ">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather data={this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
