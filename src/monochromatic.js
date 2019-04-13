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
    const elements = [];

    if(props.choice === 'monochromatic' && props.numberOfColors) {
        for(let i = 0; i < props.numberOfColors; i++) {
            elements.push(<div style={{background: styles[i], height:100, width:'20%', display:'inline-block'}} key={[i]}></div>);
        } return <div>{elements}</div>
    } else {
        return null;
    }
}

export default Monochromatic;