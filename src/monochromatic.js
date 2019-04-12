import React from 'react';
import chroma from 'chroma-js';

function Monochromatic(props) {
    const colors = props.colors;
    const styles = [
        chroma(colors.h, colors.s, colors.l + 0.1, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.2, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.3, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.4, "hsl"),
        chroma(colors.h, colors.s, colors.l + 0.5, "hsl"),
    ]

    if(props.choice === 'monochromatic' && props.numberOfColors) {
        return<div>{styles.map((styles, number) => (<div style={{background:styles, height:100, width:'20%', display:'inline-block'}} key={number}></div>))} </div>
    } 
    else {
        return null;
    }
}

export default Monochromatic;