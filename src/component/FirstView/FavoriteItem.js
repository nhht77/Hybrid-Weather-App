import React, { Component } from 'react';
import { getWeather } from "../../actions/weatherAction";

export class FavoriteItem extends Component {
  

  onClick = name => {
      getWeather(name).then( (data) => {
        this.props.onSave(data);
      });
  }
    
  render() {
      
    const {f} = this.props;
    
    return (
    <button onClick={this.onClick.bind(this, f.name)} className="item" key={f.id}>  
        <div className="item-name">{f.name}</div>
        <div className="item-temp">{f.main.temp} °C</div>
    </button>
    )
  }
}

export default FavoriteItem;
