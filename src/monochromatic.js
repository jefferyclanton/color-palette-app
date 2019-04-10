import React from 'react';
import chroma from 'chroma-js';


function Monochromatic(props) {
    const styles = 
        [
            chroma(props.colors.h, props.colors.s - 0.25, props.colors.l, "hsl"),
            chroma(props.colors.h, props.colors.s - 0.45, props.colors.l, "hsl"),
            chroma(props.colors.h, props.colors.s - 0.65, props.colors.l, "hsl"),
            chroma(props.colors.h, props.colors.s - 0.85, props.colors.l, "hsl"),
            chroma(props.colors.h, props.colors.s - 0.95, props.colors.l, "hsl"),
        ]

    if(props.choice === 'monochromatic' && props.numberOfColors) {
        for(let i = 0; i < props.numberOfColors; i++) {
        return <div>{styles.map((styles, number) => (<div style={{background: styles, height:100, width:200, display:'inline-block'}} key={number}></div>))}</div>
        }
     } else {
        return null;
    }
}

export default Monochromatic;