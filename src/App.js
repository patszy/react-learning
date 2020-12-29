import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      name: "",
      color: "",
      content: "",
      license: false,
      input: null
    };
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  }

  handleColor = event => {
    this.setState({ color: event.target.value });
  }

  handleContent = event => {
    this.setState({ content: event.target.value });
  }

  handleLicense = event => {
    this.setState({ license: event.target.checked });
  }

  render() {
    return(
      <div className="App">
        <main>
          {/* Controlled forms */}
          <input type="text" value={this.state.name} onChange={this.handleName}/>
          <select value={this.state.color} onChange={this.handleColor}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <textarea value={this.state.content} onChange={this.handleContent}/>
          <input type="checkbox" checked={this.state.license} onChange={this.handleLicense}/>
          {/* Uncontrolled forms */}
          <input ref={input => this.input = input} defaultValue="Address"/>
          {/* Always uncotrolled */}
          <input type="file"/>
        </main>
    </div>
    )
  };
}

export default App;
