import React, { Component } from 'react';
import AutoComplete from "./AutoComplete";
import ItemGroup  from './ItemGroup';

export class FirstView extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>Weather App</h1>
        </header>

        <AutoComplete addWeather={this.props.addWeather}/>

        <div className="container">
            <ItemGroup weathers={this.props.weathers} onSave={this.props.onSave} />
        </div>

      </div>
    )
  }
}

export default FirstView;
