import React from 'react';
import { PhotoshopPicker } from 'react-color';
import SimpleSelect from './drop-down-menu';
import chroma from 'chroma-js';
import ColorAmount from './color-amount';
import HueSeparation from './hue-separation';
import Monochromatic from './monochromatic';
import Complementary from './complementary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: {
          hsl: {
            h: 0,
            s: 1,
            l: 0.5,
            a: 1
          }
        },
        harmony: '',
        numberOfColors: '',
        hueSeparation: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.harmonyChange = this.harmonyChange.bind(this);
    this.numberOfColors = this.numberOfColors.bind(this);
    this.hueSeparation = this.hueSeparation.bind(this);
  }

  handleChange = (color) => {
    this.setState({
      background: color.hsl
    })
  };

  harmonyChange = (event) => {
    this.setState({harmony: event.target.value})
  }

  numberOfColors = (event) => {
    this.setState({numberOfColors: event.target.value})
  }

  hueSeparation = (event) => {
    this.setState({hueSeparation: event.target.value});
  }


  render() {
    const harmony = this.state.harmony;
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
      <SimpleSelect styling={this.state.background} onChange={this.harmonyChange} harmonyChange={harmony} />
      <ColorAmount value={this.state.harmony} amount={this.state.numberOfColors} style={this.state.background} colors={this.numberOfColors}/>
      <HueSeparation hueSeparation={this.state.hueSeparation} setSeparation={this.hueSeparation} selection={this.state.harmony} />
      <Monochromatic numberOfColors={this.state.numberOfColors} choice={this.state.harmony} colors={this.state.background} />
      <Complementary colors={this.state.background} choice={this.state.harmony} />
    </div>
    )
  }
}

  export default App;