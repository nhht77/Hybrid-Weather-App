import React, { Component } from 'react';
import { getWeather } from "../../actions/weatherAction";

export class Item extends Component {
  

  onClick = name => {
      console.log(name);
      getWeather(name).then( (data) => {
        console.log(data);
        this.props.onSave(data);
      });
  }
    
  render() {
      
    const {w} = this.props;
    
    return (
    <button onClick={this.onClick.bind(this, w.name)} className="item" key={w.id}>  
        <div className="item-name">{w.name}</div>
        <div className="item-temp">{w.main.temp} 'C</div>
    </button>
    )
  }
}

export default Item;
