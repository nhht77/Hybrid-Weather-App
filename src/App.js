import React, { Component } from 'react';
// import ReactModal from 'react-modal';

import FirstView from "./component/FirstView/FirstView";
import SecondView from "./component/SecondView/SecondView";



class App extends Component {
  constructor(){
    super();
    this.state = {
      weathers: [],
      weather: null,
      favorite: [],
      isOpen: false
    }
  }
  

  addWeather = weather => {
    const newState = {...this.state};
    newState.weathers = [...newState.weathers, weather];
    this.setState(newState);
    console.log(this.state);
  }
  
  addFavorite = fav => {
    const newState = {...this.state};
    newState.favorite = [...newState.fav, fav];
    this.setState(newState);
    console.log(this.state);
  }

  onSave = weather => {
    this.setState({weather, isOpen:true })
  }

  onClose = () => {
    this.setState({isOpen: false, weather:null});
  }

  render() {
    
    

    return (
    <div>
        <FirstView onSave={this.onSave} 
                    addWeather={this.addWeather} 
                    weathers={this.state.weathers}
          />
        <SecondView isOpen={this.state.isOpen}
                    onClose={this.onClose}
                    weather={this.state.weather}
                    />
    </div>
    );
  }
}

export default App;

// <ReactModal style={customStyles} isOpen={this.state.isOpen}>
      // <h1>Weather Info</h1>
    // </ReactModal>