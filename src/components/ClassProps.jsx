import React, { Component } from "react";
class ClassProps extends Component {
  render() {
    const props = this.props;
    return (
      <h1>
        {" "}
        hEllo from class props hii my name is {props.name} my age is {props.age}
      </h1>
    );
  }
}
export default ClassProps;
