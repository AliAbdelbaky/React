import React, { Component } from "react";

class LifeCicle extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  handellChange = ({target}) => {
    console.log(target.value);
    console.log("change", this.state?.name);
  };
  handellSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.name.value,
    });
    console.log("submited", e.target.name.value);
  };

  render() {
    return (
      <form onSubmit={(e) => this.handellSubmit(e)}>
        <input id="name" type="text" onChange={(e) => this.handellChange(e)} />
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default LifeCicle;
