import React from "react";

export class Pet extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.animal}</h2>
        <h2>{this.props.breed}</h2>
      </div>
    );
  }
}
