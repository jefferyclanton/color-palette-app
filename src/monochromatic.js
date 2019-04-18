import React from 'react';
import chroma from 'chroma-js';

function Monochromatic(props) {
    const colors = props.colors;
    const hsvColors = props.hsv;
    const userInput = props.colors.l;

    const hslValues = [colors.h.toFixed(2), colors.s.toFixed(2), colors.l.toFixed(2)];
    var stringValues = hslValues.join(', '); 
    let hsl = [];
    function printValue() {
      hsl.push(stringValues)
    }

    //const hsv = [hsvColors.h.toFixed(2), hsvColors.s.toFixed(2), hsvColors.v.toFixed(2)];
    //const hsvStringValues = hsv.join(', '); 
    //let hsvArray = [];
    //function printHsvValue() {
      //hsvArray.push(hsvStringValues)
    //}

    let styles = [
        chroma(colors.h, colors.s, colors.l + 0.1, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.2, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.3, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.4, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.5, "hsl"),
    ]

    if(userInput > 0.5) {
    styles = [
        chroma(colors.h, colors.s, colors.l - 0.1, "hsl"),
        chroma(colors.h, colors.s, colors.l - 0.2, "hsl"),
        chroma(colors.h, colors.s, colors.l - 0.3, "hsl"),
        chroma(colors.h, colors.s, colors.l - 0.4, "hsl"),
        chroma(colors.h, colors.s, colors.l - 0.5, "hsl"),
    ]
} 

    const elements = [];

    if(props.choice === 'monochromatic' && props.numberOfColors) {
        for(let i = 0; i < props.numberOfColors; i++) {
            elements.push(<div style={{background: styles[i], height:100, width:'20%', display:'inline-block', color:'white'}} key={[i]} onChange={printValue()}>
            <h4 style={{color:'white', margin:'auto'}}>Hex: {chroma(styles[i]).hex()}<br/>
            RGB: {chroma(styles[i]).rgb().join(', ')}<br />
            HSL: {stringValues}<br />
            HSV: {chroma(styles[i]).hsl().join(', ')}
            </h4>
            </div>);
        } return <div>{elements}</div>
    } else {
        return null;
    }
}

export default Monochromatic;