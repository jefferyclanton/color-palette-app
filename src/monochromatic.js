import React from 'react';
import chroma from 'chroma-js';

function Monochromatic(props) {
    const colors = props.colors;
    let userInput = props.colors.l;

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
            const hex = chroma(styles[i]).hex();
            const rgb = chroma(styles[i]).rgb().join(', ');

            let hslPrint = styles[i].hsl().slice(0, 3);
            hslPrint = hslPrint.map(function(element) {
                return Number(element.toFixed(2));
            });
            const hslTry = hslPrint.join(', ');

            let hsvPrint = styles[i].hsv();
            hsvPrint = hsvPrint.map(function(element) {
                return Number(element.toFixed(2));
            });
            const hsvTry = hsvPrint.join(', ');

            elements.push(<div style={{background: styles[i], height:100, width:'20%', display:'inline-block', color:'white'}} key={[i]}>
            <h4 style={{color:'white', margin:'auto'}}>
            Hex: {hex}<br/>
            RGB: {rgb}<br />
            HSL: {hslTry}<br />
            HSV: {hsvTry}
            </h4>
            </div>);
        } return <div>{elements}</div>
    } else {
        return null;
    } 
}

export default Monochromatic;