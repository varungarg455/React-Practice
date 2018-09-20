import React from "react";
import ReactDOM from "react-dom";
import { Pet } from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  //executed immediately after component is mounted
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        //this.setState is shallow merge
        this.setState({
          pets: pets
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <div>
          {this.state.pets.map(pet => {
            let breeds;
            if (Array.isArray(pet.breeds.breed)) {
              breeds = pet.breeds.breed.join(", ");
            } else {
              breeds = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breeds}
                media={pet.media}
                location={`${pet.contact.city}, ${pet.contact.state}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
