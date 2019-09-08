import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  catchPokemon = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  };
  render() {
    return (
      <div>
        <p>
          Caught: {this.state.count} Pokemon on {this.props.date}
        </p>
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
      </div>
    );
  }
}
// import React from "react";

// const CaughtPokemon = props => {
//   return <p>Caught 0 Pokemon on {props.date}</p>;
// };

export default CaughtPokemon;
