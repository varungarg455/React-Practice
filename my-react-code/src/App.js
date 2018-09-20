import React from "react";
import ReactDOM from "react-dom";
import { Pet } from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
