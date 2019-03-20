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
      this.setState({
        hue: e.target.value,
        color: chroma(e.target.value, 1, 0.5, "hsl")
      })
    }

    render() {
      const style = {
        background: this.state.color,
        height: 200
      }
      return (
        <div style={style}>
        <h2 style={{marginTop:0}}>Enter Hue In Degrees</h2>
          <input value={this.state.hue} onChange={this.handleChange}></input>
        </div>
      );
    }
  }

  export default App;