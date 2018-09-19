class Pet extends React.Component {
    render() {
        React.createElement("div", {}, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed)
        ]);
    }
}

class App extends React.Component {
    render() {
        React.createElement("div", {}, [
            React.createElement("h1", null, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Havanese"
            }),
            React.createElement(Pet, {
                name: "Pepper",
                animal: "Bird",
                breed: "Cockatiel"
            }),
            React.createElement(Pet, {
                name: "Doink",
                animal: "Cat",
                breed: "Mixed"
            })
        ]);
    };
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

