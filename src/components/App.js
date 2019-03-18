import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

import './App.css';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    console.log("form confirmed");

    const API = `api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=817f4d3116a83865d3692250c52719b7`;

  };

  render() {
    return (
      <div className="App">
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  };
};

export default App;