import React, { Component } from "react";

class BestPokemon extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.pokemonNames.map(name => {
            return <li>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// const BestPokemon = props => {
//   console.log(props);

//   return (
//     <ul>
//       {props.pokemonNames.map(name => {
//         return <li>{name}</li>;
//       })}
//     </ul>
//   );
// };

export default BestPokemon;
