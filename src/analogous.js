import React from 'react';
import chroma from 'chroma-js';
import hueSeparation from './hue-separation';

function Analogous(props) {
    const colors = props.colors;
    const huePlus = colors.h + hueSeparation;
    const hueMinus = colors.h - hueSeparation;

    const styles = {
        plus: chroma(huePlus, colors.s, colors.l, "hsl"),
        minus: chroma(hueMinus, colors.s, colors.l, "hsl"),
    }

function handlePlus() {
    if(huePlus > 360) {
        return huePlus - 360;
    }
}

function handleMinus() {
    if(hueMinus < 360) {
        return hueMinus + 360;
    }
}

if(props.choice === 'analogous' && props.Separation) {
    return (
        <div>
            <div style={{background:styles.plus, height:100, width:'50%', display:'inline-block'}} onChange={handlePlus()}></div>
            <div style={{background:styles.minus, height:100, width:'50%', display:'inline-block'}} onChange={handleMinus()}></div>
        </div>
    )
} else {
    return null;
    }
}

export default Analogous;