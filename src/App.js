  import React from 'react';
  import './App.css';
  import chroma from 'chroma-js';


  class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      hue: '',
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      const color = chroma.valid(e.target.value)
      ? chroma(e.target.value)
        .saturate()
        .alpha(1)
        : chroma('white');
      this.setState({
        hue: e.target.value, color
      })
    }

    render() {
      const style = {
        background: this.state.color,
        height: 200
      }
      return (
        <div style={style}>
          <input value={this.state.hue} onChange={this.handleChange}></input>
        </div>
      );
    }
  }

  export default App;