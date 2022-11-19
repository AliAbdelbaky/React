import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandeller={this.greetParent} />
        <div>hello from parent component</div>
      </div>
    );
  }
}
export default ParentComponent;
