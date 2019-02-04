import React, { Component } from 'react';
import Example from './components/Example';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather:null,
            temperature:null,
            weathers:[]
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
        let weather = this.state.weather;


        console.log(weather);

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&APPID=c9ca3fdada77609e76fec6e849b11dd1`)
        .then( function(res){ 
            // this.setState({temperature:res.data.main.temp});
            console.log(res.data);
        })
        .catch( function(err){ console.log(err)})
    }
    

    onClick(e){
        console.log(e.target.value)
    }

    render () {
        return (
            <div>
                <h1>Weather App</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="weather"
                        value={this.weather}
                        onChange={this.onChange}
                    />
                    <button>Click me</button>
                </form>
                <div onClick={this.onClick}>
                    <p>{this.state.weather}</p>
                    <span></span>
                </div>
                <p>{this.state.temperature}</p>
            </div>
        )
    }
}

export default App