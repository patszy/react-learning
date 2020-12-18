import React from 'react';

export default class InputName extends React.Component{
    constructor() {
        super();
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({name: event.target.value});
      }

      render() {
        return (
          <form>
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </form>
        );
      }
    }