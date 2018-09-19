import React from "react";

export class Pet extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, this.props.name),
      React.createElement("h2", {}, this.props.animal),
      React.createElement("h2", {}, this.props.breed)
    ]);
  }
}
