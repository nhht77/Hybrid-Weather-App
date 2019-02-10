import React, { Component } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : "300px",
    height                 : "60vh",
    padding: "0 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-between",
  }
};



class SecondView extends Component {
  

  renderWeatherIcon = () => {
    const temp = this.props.weather ? this.props.weather.main.temp : null;
    if(temp){
      if(temp > 0 ){
        return <i style={{color:"coral", fontSize: "4.3rem"}}className="far fa-sun"></i>
      }
      if(temp === 0 ){
        return <i style={{color:"cadetblue", fontSize: "4.3rem"}} className="fas fa-cloud-sun"></i>
      }
      else {
        return <i style={{color:"cornflowerblue", fontSize: "4.3rem"}} className="fas fa-cloud"></i>
      }
    }
  }

  onClick = name => {
    this.props.addFavorite(name);
  }

  render() {
    const name = this.props.weather ? this.props.weather.name : null;

    return (
      <ReactModal ariaHideApp={false} style={customStyles} isOpen={this.props.isOpen}>
      
      <div className="content-header">
        <button onClick={this.onClick.bind(this, name)} className="content-icon content-fav"><i className="far fa-star"></i></button>
        <h1>{this.props.weather ? this.props.weather.name : null}</h1> 
        <button className="content-icon content-close" onClick={this.props.onClose}><i className="far fa-times-circle"></i></button>
      </div>

      <div className="content-body">
        <div className="content-body--top">
          {this.renderWeatherIcon()}
          <p>{this.props.weather ? this.props.weather.main.temp : null} °C</p>
        </div>
        <div className="content-body--bottom">
        <p>Max Temperature: {this.props.weather ? this.props.weather.main.temp_max : null} °C</p>
        <p>Min Temperature: {this.props.weather ? this.props.weather.main.temp_min : null} °C</p>
        <p>Wind Speed: {this.props.weather ? this.props.weather.wind.speed : null} m/s</p>
        <p>Humidity: {this.props.weather ? this.props.weather.main.humidity : null} mm</p>
        </div>
      </div>
      </ReactModal>
    )
  }
}

export default SecondView;
