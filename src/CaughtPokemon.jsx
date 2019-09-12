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
    let newCaughtPokemon = [].push(this.pokemonNameInput);
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
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
      </div>
    );
  }
}

export default CaughtPokemon;
