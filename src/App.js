import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon
        pokemonNames={["Squirtle ", "Bulbasaur ", "Charmander ", "Pikachu "]}
      />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
