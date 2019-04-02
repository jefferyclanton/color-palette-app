import React from 'react';
import { PhotoshopPicker } from 'react-color';
import SimpleSelect from './drop-down-menu';
import chroma from 'chroma-js';

class App extends React.Component {
 state = {
    background: {
        hsl: {
          h: 0,
          s: 0,
          l: 0.2,
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
      height: 275,
      width: 275,
      backgroundColor: chroma(this.state.background.h, this.state.background.s, this.state.background.l, "hsl"),
      borderRadius: 500,
      margin: 'auto',
    }
    return (
      <div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25}}>
        <div>
    <PhotoshopPicker header="Choose Your Base Color" color={this.state.background} onChange={this.handleChange}  />;
    </div>
    <div style={style}></div>
      </div>
      <SimpleSelect styling={this.state.background} />
    </div>
    )
  }
}

  export default App;