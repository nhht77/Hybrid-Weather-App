import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather:null,
            temperature:null,
            fav:[]
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        let city = this.state.weather;

        console.log(city);
        getWeather(city);
    }

    getWeather(city){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c9ca3fdada77609e76fec6e849b11dd1`)
        .then( function(res){ 

            // console.log(res.data);
            // this.setState({temperature:res.data.main.temp});
            return res.data;
        })
        .catch( function(err){ 
            console.log(err);
            return err;
        })
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

                <div className="weatherBox">
                    <p>{this.state.weather}</p>
                    <p>{this.state.temperature ? `${this.state.temperature} 'C` : null}</p>
                </div>

            </div>
        )
    }
}

export default Home