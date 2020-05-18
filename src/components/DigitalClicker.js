// @ts-check

import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
      otherThing: 0,
    };
  }

  handleClick = (event) => {
    let newState = this.state.timesClicked + 1;
    this.setState({ timesClicked: newState });
    this.setState({ otherThing: newState });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
