import React, { Component } from 'react';

export class SecondView extends Component {
  componentDidMount = () => {
    if(!this.props.weather){
      this.props.history.push('/');
    }
  }
  
  
  render() {
    return (
      <div>
        {this.props.weather ? this.props.weather.name : null}
        <p>{this.props.weather ? this.props.weather.main.temp : null}</p>
        <p>{this.props.weather ? this.props.weather.main.temp_max : null}</p>
        <p>{this.props.weather ? this.props.weather.main.temp_min : null}</p>
        <p>{this.props.weather ? this.props.weather.wind.speed : null}</p>
        <p>{this.props.weather ? this.props.weather.main.humidity : null}</p>

      </div>
    )
  }
}

export default SecondView;
