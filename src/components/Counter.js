import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
    }

    increment(){
        this.setState(prevState => {
            return {counter: this.state.counter+1};
        });
    }

    decrement(){
        this.setState(prevState => {
            return {counter: this.state.counter-1};
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.increment.bind(this)}>+</button>
                <output>{this.state.counter}</output>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}