import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonInfo from "./PokemonInfo"
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
          <nav>
            <ul className='poke'>
              <li className='myList'>
                <Link to="/best-pokemon">Best Pokemon</Link>
              </li>
              <li className='myList'>
                <Link to="/caugh-pokemon">Caught Pokemon</Link>
              </li>
              <li className='myList'>
                <Link to="/pokemon/:name">Pokemon Info</Link>
              </li>
            </ul>
          </nav>
          <Logo appName="Pokedex" handleClick={logWhenClicked} />
          <Clock />
          <Route path="/best-pokemon" render={() => <BestPokemon
            pokemonNames={["Squirtle ", "Bulbasaur ", "Charmander ", "Pikachu "]}
          />} />
          <Route path="/caugh-pokemon" component={CaughtPokemon} />
          <Route path="/pokemon/:id" component={PokemonInfo} />
        </div>
      </BrowserRouter >

    )
  }

}

export default App;

{/* <Route path="/caugh-pokemon" render={() => <CaughtPokemon date={new Date().toLocaleDateString()} />} /> */ }
