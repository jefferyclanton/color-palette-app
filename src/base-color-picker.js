import React, { Component } from 'react';
import './App.css';
import chroma from 'chroma-js';


class BaseColor extends Component {
  constructor(props){
    super(props);
    this.state= {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  event.target.style.background = this.state.value;
  };


  handleSubmit(event) {
    alert('Making your palette using ' + this.state.value);
    event.preventDefault();
  };

  render() {
    const style = {
      root: {
          background: this.state.value,
          height: 115,
          paddingTop: 25,
          paddingLeft: 25
      }
  }

    return (
      <div className="baseColor" style={style.root}>
        <h3 style={{marginTop: 0, paddingTop: 25, fontSize: 20, fontWeight: 400, color: '#7b8186'}}>Enter your base color in degrees</h3>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
      </div>
    );
  }
}

export default BaseColor;
