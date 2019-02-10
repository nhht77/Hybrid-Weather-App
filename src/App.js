import React, { Component } from 'react';

import FirstView from "./component/FirstView/FirstView";
import SecondView from "./component/SecondView/SecondView";

class App extends Component {
  constructor(){
    super();
    this.state = {
      weathers: [],
      weather: null,
      favorite: []
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
    newState.favorite = [...newState.weathers, fav];
    this.setState(newState);
    console.log(this.state);
  }

  onSave = weather => {
    this.setState({weather})
  }

  render() {

    
    
    let Second = () => 
    <SecondView onBack={this.onBack} 
                addFavorite={this.addFavorite} 
                weather={this.state.weather}/>

    return (
    <div>
        <FirstView onSave={this.onSave} 
                    addWeather={this.addWeather} 
                    weathers={this.state.weathers}
          />
    </div>
    );
  }
}

export default App;
