import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Welcome to the {this.props.appName}</h1>
        <img
          onClick={this.props.handleClick}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        ></img>
      </header>
    );
  }
}
// const Logo = props => {
//   console.log(props);
//   return (
//     <header>
//       <h1>Welcome to the {props.appName}</h1>
//       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
//     </header>
//   );
// };

export default Logo;

// logWhenClicked = () => {
//   alert("❤🦉💕");
// };
