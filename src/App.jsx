import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Clock from "./Clock";
import "./App.css";

//Method
const logWhenClicked = () => {
  alert("❤🦉💕");
};

function App() {
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon
        pokemonNames={["Squirtle ", "Bulbasaur ", "Charmander ", "Pikachu "]}
      />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <Clock />
    </div>
  );
}

export default App;
