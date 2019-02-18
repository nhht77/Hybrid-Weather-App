import React, { Component } from 'react';
import AutoComplete from "./AutoComplete";
import WeatherGroup  from './WeatherGroup';
import { getWeather } from '../../actions/weatherAction'
import FavoriteItem from './FavoriteItem';

let favItem, favoriteGroup; 

if(localStorage.weather){

  getWeather(localStorage.weather)
  .then( f => {
    favItem = <FavoriteItem f={f} />
  });
  
}

if(localStorage.favorite){
  const localFav = JSON.parse(localStorage.favorite);
  console.log(localFav);
  
  const favorite = [];
  localFav.map( f => getWeather(f).then( w => favorite.push(w)) );

  console.log(favorite);
  favoriteGroup = favorite.map( f => <FavoriteItem f={f} />)
}

class FirstView extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>Weather App</h1>
        </header>

        <AutoComplete addWeather={this.props.addWeather}/>

        <div className="container">
            {favItem ? favItem : null}
            {favoriteGroup}
            <WeatherGroup weathers={this.props.weathers} onSave={this.props.onSave} />
        </div>

      </div>
    )
  }
}

export default FirstView;
