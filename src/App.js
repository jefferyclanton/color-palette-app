import React from 'react';
import { SketchPicker } from 'react-color';
import SimpleSelect from './drop-down-menu';
import chroma from 'chroma-js';
import ColorAmount from './color-amount';
import HueSeparation from './hue-separation';
import Monochromatic from './monochromatic';
import Complementary from './complementary';
import Triadic from './triadic';
import Split from './split';
import Analogous from './analogous';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: {
          hsl: {
            h: 0,
            s: 0,
            l: 1.0,
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
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleChange = (color) => {
    this.setState({
      background: color.hsl,
    })
  };

  handleAccept = () => {
    
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

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const harmony = this.state.harmony;
    const style = {
      height: 100,
      width: '100%',
      backgroundColor: chroma(this.state.background.h, this.state.background.s, this.state.background.l, "hsl"),
      marginTop: '2%',
    }

    return (
      <div>
        <h1 style={{textAlign:'center'}}>Choose Your Base Color</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <SketchPicker color={this.state.background} onChange={this.handleChange} width={350} disableAlpha={true} />
      <SimpleSelect styling={this.state.background} onChange={this.harmonyChange} harmonyChange={harmony} />
      <ColorAmount value={this.state.harmony} amount={this.state.numberOfColors} style={this.state.background} colors={this.numberOfColors}/>
      <HueSeparation hueSeparation={this.state.hueSeparation} setSeparation={this.hueSeparation} selection={this.state.harmony} onSubmit={this.handleSubmit} />    
      </div>
      <div style={style}></div>
      <div>
      <Monochromatic numberOfColors={this.state.numberOfColors} choice={this.state.harmony} colors={this.state.background} />
      <Complementary colors={this.state.background} choice={this.state.harmony} />
      <Triadic choice={this.state.harmony} colors={this.state.background} />
      <Split choice={this.state.harmony} colors={this.state.background} separation={this.state.hueSeparation} />
      <Analogous choice={this.state.harmony} colors={this.state.background} separation={this.state.hueSeparation} />
      </div>
    </div>
    )
  }
}

  export default App;