import React, { Component } from 'react';
import Home from './components/Home/Home';
import Info from './components/Info';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    
    render () {
        return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/info" component={Info}/>
            </div>
        </Router>
        )
    }
}

export default App