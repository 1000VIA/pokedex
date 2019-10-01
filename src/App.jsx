import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Clock from "./Clock";
import "./App.css";


//Method

class App extends Component {
  render() {
    const logWhenClicked = () => {
      alert("❤🦉💕");
    };
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/best-pokemon">Best Pokemon</Link>
            </li>
            <li>
              <Link to="/caugh-pokemon">Caught Pokemon</Link>
            </li>
          </ul>
          <Logo appName="Pokedex" handleClick={logWhenClicked} />
          <Clock />
          <Route path="/best-pokemon" render={() => <BestPokemon
            pokemonNames={["Squirtle ", "Bulbasaur ", "Charmander ", "Pikachu "]}
          />} />
          <Route path="/caugh-pokemon" component={CaughtPokemon} />
        </div>
      </BrowserRouter >

    )
  }

}

export default App;

{/* <Route path="/caugh-pokemon" render={() => <CaughtPokemon date={new Date().toLocaleDateString()} />} /> */ }
