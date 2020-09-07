import React, { Component } from 'react';

class Card extends Component{
  constructor(props){
    super();
    this.state = {pokeData: null,
                  image: null
      };
  }

  update = (data) => {
    this.setState({pokeData: data})
    this.setState({image: data.sprites.front_default})
}


  render(){
    return this.state.pokeData ?
      (<div className="card">

        <div className="content">
          <div className="image">
            <img src={this.state.image} alt="pokemon"/>
          </div>
          <div className="card-wrapper">
            <div className="basic-info">
              <p>{"name: " + this.state.pokeData.name}</p>
              <p>{"type: " + this.state.pokeData.types.map(p => p.type.name) + " "}</p>
              <p>{"height: " + this.state.pokeData.height + " "}</p>
              <p>{"weight: " + this.state.pokeData.weight + " "}</p>
            </div>
            <div className="stats-info">
              {this.state.pokeData.stats.map(p => <p key={p.stat.name}>{p.stat.name + ": " + p.base_stat + ","}</p>)}
            </div>
          </div>
        </div>
        <div className="abilities">
          abilities: {this.state.pokeData.abilities.map(p => p.ability.name + ",")}
        </div>
      </div>): null
  }
}

export default Card;
