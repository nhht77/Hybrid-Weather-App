import React, { Component } from 'react';
import AutoComplete from "./component/AutoComplete";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weather: [],
      favorite: []
    }
  }
  

  addFavorite = fav => {
    const newState = {...this.state};
    newState.favorite = [...newState.favorite, fav];
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Weather App</h1>
        </header>

        <AutoComplete
          addFavorite={this.addFavorite}
        />

        <div className="container">
          {
            this.state.favorite.map( (fav, idx) => (
            <div className="fav" key={idx}>  
              <div className="fav-name">{fav.name}</div>
              <div className="fav-temp">{fav.main.temp} 'C</div>
            </div>
          ))}
        </div>



      </div>
    );
  }
}

export default App;
