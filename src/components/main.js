import React, { Component } from 'react';
import axios from 'axios';
import Card from './card';
import Search from './search';
import Ball from '../pokeball.svg';

export default class Main extends Component{
  constructor(){
    super();
    this.cardElement = React.createRef();
    this.state = {pokemonName: "bulbasaur",
                  isLoaded: false
    }
    this.getData("bulbasaur");
  }

  handleSubmit = (name) => {
    this.setState({pokemonName: name});
    this.getData(name);
  }

  getData = async(name) => {
    try{
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      this.cardElement.current.update(data);
    }catch(e){
      console.log("ERROR");
    }
  }

  render(){
    return(
      <div className="wrapper">
        <Search handleSubmit={this.handleSubmit}/>
        {this.state.pokemonName ? <Card ref={this.cardElement}/> : null}
        <img src={Ball} className="background" alt="pokeball"/>
      </div>
    );
  }
}
