import React from "react";
import { Component } from "react";
//import List from "./List";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number
    };
    console.log("Number:" ,this.state);
  }

  render() {
    return <p>Here {this.state.number} articles </p>;
  }
}

export default Count;
