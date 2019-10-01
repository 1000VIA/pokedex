import React, { Component } from "react";

class BestPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemonNames: []
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          pokemonNames: [
            data.pokemon_entries[0].pokemon_species.name,
            data.pokemon_entries[3].pokemon_species.name,
            data.pokemon_entries[6].pokemon_species.name
          ]
        });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.isLoading ? (
            <span> Loading... 👽</span>
          ) : (
              this.state.pokemonNames.map(name => {
                return <li className='nameP'>{name}</li>;
              })
            )}
        </ul>
      </div>
    );
  }
}

export default BestPokemon;
