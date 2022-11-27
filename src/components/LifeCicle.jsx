import React, { Component } from "react";

class LifeCicle extends Component {
  constructor() {
    super();
  }
  arr = [
    { id: 1, text: "ali" },
    { id: 14, text: "ali2" },
    { id: 13, text: "ali3" },
    { id: 12, text: "ali4" },
  ];
  renderingList = () => {
    return this.arr.map((x,index) => {
      return <div className={x.id} key={index}>{x.text}</div>;
    });
  };
  render() {
    return <div>LifeCicle {this.renderingList()}</div>;
  }
}
export default LifeCicle;
