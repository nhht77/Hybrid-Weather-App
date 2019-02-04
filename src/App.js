import React, { Component } from 'react';
import Example from './components/Example';


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
        console.log(this.state.weather);
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