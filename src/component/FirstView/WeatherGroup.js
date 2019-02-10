import React, { Component } from 'react';
import WeatherItem from "./WeatherItem";

export class WeatherGroup extends Component {
  render() {
    return (
        this.props.weathers.map( w => <WeatherItem onSave={this.props.onSave} key={w.id} w={w}/>)
    )
  }
}

export default WeatherGroup
