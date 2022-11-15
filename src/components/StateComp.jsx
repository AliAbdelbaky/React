import React, { Component } from "react";

class StateComp extends Component {
    constructor() {
        super();
        this.state = {
            msg: "Welcome from state component",
        };
    }
    changeMsg = () => {
        this.setState({ msg: "thk u ♥" });
    };
    render() {
        return (
            <div>
                <h2> msg is: {this.state.msg}</h2>
                <button onClick={() => this.changeMsg()}>Change msg</button>
            </div>
        );
    }
}
export default StateComp;
