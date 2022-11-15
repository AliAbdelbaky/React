import React, { Component } from "react";

class StateComp extends Component {
    constructor() {
        super();
        this.state = {
            msg: "Welcome from state component",
            newMsg:"thkx ♥"
        };
    }
    changeMsg = () => {
        this.setState((oldState)=>({ msg: oldState.newMsg }));
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
