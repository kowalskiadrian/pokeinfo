import React, { Component } from 'react';

export default class Search extends Component{
  constructor({handleSubmit}){
    super();
    this.submit = handleSubmit;
    this.state = {userInput:''}
  }

  onClick = () => {
    this.submit(this.state.userInput);
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value.toLowerCase()})
  }

  render(){
    return(
        <div className="search-bar">
          <div className="head">
            <h1>Get info about Your favorite <span>Pokemon</span></h1>
            <h2>Just type its name below and press search button!</h2>
          </div>
          <div className="search-wrapper">
            <input
                type="text"
                onChange={this.handleChange}
                placeholder="Enter Pokemon name"
            />
            <button onClick={this.onClick}>SEARCH</button>
          </div>

        </div>
    );
  }
}
