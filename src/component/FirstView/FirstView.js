import React, { Component } from 'react';
import AutoComplete from "./AutoComplete";
import WeatherGroup  from './WeatherGroup';

export class FirstView extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>Weather App</h1>
        </header>

        <AutoComplete addWeather={this.props.addWeather}/>

        <div className="container">
            <WeatherGroup weathers={this.props.weathers} onSave={this.props.onSave} />
        </div>

      </div>
    )
  }
}

export default FirstView;
