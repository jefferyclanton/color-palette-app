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
import Values from './values';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          hsl: {
            h: 0,
            s: 0,
            l: 1,
            //a: 1
        },
          hsv: {
            h: 0,
            S:  0,
            v: 1,
          },
        harmony: '',
        numberOfColors: '',
        hueSeparation: '',
        value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.harmonyChange = this.harmonyChange.bind(this);
    this.numberOfColors = this.numberOfColors.bind(this);
    this.hueSeparation = this.hueSeparation.bind(this);
    this.valueChange = this.valueChange.bind(this);
  }

  handleChange = (color) => {
    this.setState({
      hsl: color.hsl,
      hsv: color.hsv,
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

  handleSubmit = (event) => {
    event.preventDefault();
  }

  valueChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    const harmony = this.state.harmony;
    //const values = [this.state.hsl.h.toFixed(2), this.state.hsl.s.toFixed(2), this.state.hsl.l.toFixed(2)];
    //var stringValues = values.join(', '); 
    //let hsl = [];
    //function printValue() {
      //hsl.push(stringValues)
    //}
    let style = {
      height: 100,
      width: '100%',
      backgroundColor: chroma(this.state.hsl.h, this.state.hsl.s, this.state.hsl.l, "hsl"),
      marginTop: '2%',
    } 

    return (
      <div>

        <h1 style={{textAlign:'center'}}>Choose Your Base Color</h1>
        
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap:'wrap'}}>
        <SketchPicker color={this.state.hsl} onChange={this.handleChange} width={350} disableAlpha={true} />
        <SimpleSelect styling={this.state.hsl} onChange={this.harmonyChange} harmonyChange={harmony} />
        <ColorAmount value={this.state.harmony} amount={this.state.numberOfColors} style={this.state.hsl} colors={this.numberOfColors}/>
        <HueSeparation hueSeparation={this.state.hueSeparation} setSeparation={this.hueSeparation} selection={this.state.harmony} onSubmit={this.handleSubmit} />
        <Values color={this.state.hsl} onChange={this.valueChange} harmony={this.state.harmony} numberOfColors={this.state.numberOfColors} hueSeparation={this.state.hueSeparation} value={this.state.value} />/
      </div>
      
      <div style={style}></div>

      <div>
        <Monochromatic numberOfColors={this.state.numberOfColors} choice={this.state.harmony} colors={this.state.hsl} hsv={this.state.hsv} />
        <Complementary colors={this.state.hsl} choice={this.state.harmony} />
        <Triadic choice={this.state.harmony} colors={this.state.hsl} />
        <Split choice={this.state.harmony} colors={this.state.hsl} separation={this.state.hueSeparation} />
        <Analogous choice={this.state.harmony} colors={this.state.hsl} separation={this.state.hueSeparation} />
      </div>

    </div>
    )
  }
}

  export default App;