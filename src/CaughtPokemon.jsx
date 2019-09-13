import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caughtPokemon: [],
      pokemonNameInput: ""
    };
  }

  componentDidUpdate() {
    console.log("componentDidMount");
  }

  catchPokemon = () => {
    if (this.state.pokemonNameInput !== "") {
      let newCaughtPokemon = this.state.caughtPokemon.push(
        this.state.pokemonNameInput
      );
      this.setState({ catchPokemon: newCaughtPokemon, pokemonNameInput: "" });
    }

    // this.setState(previousState => {
    //   return {
    //     caughtPokemon: previousState.caughtPokemon + 1
    //   };
    // });
  };

  handleInputChange = event => {
    this.setState({ pokemonNameInput: event.target.value });
  };

  render() {
    return (
      <div>
        <p>
          Caught: {this.state.caughtPokemon.length} Pokemon on {this.props.date}
        </p>
        <input
          type="text"
          value={this.state.pokemonNameInput}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.catchPokemon}>
          Catch Pokemon
        </button>
        <ul>
          {this.state.caughtPokemon.map((myPokemon, index) => (
            <li index={index}> {myPokemon} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CaughtPokemon;
