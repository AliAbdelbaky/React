import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello"
        }
    }
    clickHandller = () => {
        this.setState((oldState) => ({ message: 'good bye !' }));
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandller()}>click</button>
            </div>
        )
    }
}

export default EventBind