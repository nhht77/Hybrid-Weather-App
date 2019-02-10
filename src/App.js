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
    if(fav){
      const newState = {...this.state};
      newState.favorite = [...newState.favorite, fav];
      this.setState(newState);
      console.log(this.state);
      console.log(fav);
    }
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
                    favorite={this.state.favorite}
          />
        <SecondView isOpen={this.state.isOpen}
                    onClose={this.onClose}
                    weather={this.state.weather}
                    addFavorite={this.addFavorite}
                    />
    </div>
    );
  }
}

export default App;