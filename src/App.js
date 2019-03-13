import React, { Component } from 'react';
import './App.css';
import BaseColor from './base-color-picker';
import ColorHarmony from './color-harmonies';
import RadioButtonsGroup from'./monochromatic';
import OutlinedTextFields from './test';


class App extends Component {
  render() {
    const styles = {
      root: {
        height: 300
        
      }
    }
    return (
      <div>
      <div className="App">
        <header className="App-header" style={styles.root}>
        <h2>Enter A Color Name to Create Your Palette</h2>
        </header>
        </div>
        <div>
        <BaseColor />
        <ColorHarmony />
        <RadioButtonsGroup />
        <OutlinedTextFields />
        </div>
        </div>
    );
  }
}

export default App;
