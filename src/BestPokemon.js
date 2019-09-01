import React from "react";

const BestPokemon = props => {
  console.log(props);

  return (
    <ul>
      {props.pokemonNames.map(name => {
        return <li>{name}</li>;
      })}
    </ul>
  );
};

export default BestPokemon;
