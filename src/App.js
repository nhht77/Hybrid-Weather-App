import React, { Component } from 'react';
import Example from './components/Example';
import axios from 'axios';

let API = "c9ca3fdada77609e76fec6e849b11dd1";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather:null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        let weather = this.state.weather
        
        console.log(weather);

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${weather}&APPID=c9ca3fdada77609e76fec6e849b11dd1`)
        .then( function(res){ console.log(res.data)})
        .catch( function(err){ console.log(err)})
    }

    onClick(){
        console.log(this.state.weather)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="weather"
                        value={this.weather}
                        onChange={this.onChange}
                    />
                    <button>Click me</button>
                </form>
                <p onClick={this.onClick}>{this.state.weather}</p>
            </div>
        )
    }
}

export default App