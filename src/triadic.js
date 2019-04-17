import React from 'react';
import chroma from 'chroma-js';

function Triadic(props) {
const colors = props.colors;
const styles = {
    up: chroma(colors.h + 180 + 60, colors.s, colors.l, "hsl"),
    down: chroma(colors.h + 180 - 60, colors.s, colors.l, "hsl"),
}

function handleUp(){
if(styles.up > 360) {
    return styles.up -360;
    }
}

function handleDown() {
    if(styles.down < 0) {
        return styles.down + 360;
    }
}

if(props.choice === 'triadic') {
    return (
        <div>
    <div style={{background: styles.up, height:100, width:'50%', display:'inline-block'}} onChange={handleUp()}></div>
    <div style={{background: styles.down, height:100, width:'50%', display:'inline-block'}} onChange={handleDown()}></div>
    </div>
    )
} else {
    return null;
}
}

export default Triadic;