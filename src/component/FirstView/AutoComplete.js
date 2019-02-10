import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {getWeather} from '../../actions/weatherAction';

const cityList = require('../../cityList/current.city.list.json'); 

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cityList.filter(city =>
    city.name.toLowerCase().slice(0, inputLength) === inputValue
  ).slice(0, 6);
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className="suggestion">
    {suggestion.name}, {suggestion.country}
  </div>
);

class AutoComplete extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSubmit = e => {
      e.preventDefault();
      let value = this.state.value;

      getWeather(value).then(current => {
          this.props.addWeather(current)
        });
      
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a city',
      value,
      onChange: this.onChange
    };

    return (
    <form onSubmit={this.onSubmit}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        
      />
        <button className="search-btn"><i className="fas fa-search"></i></button>
      </form>
    );
  }
}

export default AutoComplete;
