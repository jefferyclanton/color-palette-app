import React from 'react';
import chroma from 'chroma-js';

function Triadic(props) {
const colors = props.colors;
const styles = {
    up: chroma(colors.h + 60, colors.s, colors.l, "hsl"),
    down: chroma(colors.h - 60, colors.s, colors.l, "hsl"),
}
if(props.choice === 'triadic') {
    return (
        <div>
    <div style={{background: styles.up, height:100, width:'50%', display:'inline-block'}}></div>
    <div style={{background: styles.down, height:100, width:'50%', display:'inline-block'}}></div>
    </div>
    )
} else {
    return null;
}
}

export default Triadic;