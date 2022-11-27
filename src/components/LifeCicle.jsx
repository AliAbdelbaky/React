import React, { Component } from "react";

class LifeCicle extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("component Did mount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  log() {
    console.log('render method')
    return 'render method'
  }
  render() {
    return <div>LifeCicle {this.log()}</div>;
  }
}
export default LifeCicle;
