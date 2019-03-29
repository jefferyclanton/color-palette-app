import React from 'react';
import { PhotoshopPicker } from 'react-color';
import chroma from 'chroma-js';

class App extends React.Component {
 state = {
    background: {
        hsl: {
          h: 0,
          s: 0,
          l: .20,
          a: 1
        }
      }
  };

  handleChange = (color) => {
    this.setState({
      background: color.hsl
    })
  }

  render() {
    const style = {
      height: 250,
      width: 250,
      backgroundColor: chroma(this.state.background.h, this.state.background.s, this.state.background.l, "hsl")
    }
    return (
      <div>
        <div>
    <PhotoshopPicker header="Choose Your Base Color" color={this.state.background} onChange={this.handleChange} />;
    </div>
    <div style={style}></div>
    </div>
    )
  }
}

  export default App;