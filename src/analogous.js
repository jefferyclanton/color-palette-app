import React from 'react';
import chroma from 'chroma-js';

function Analogous(props) {
    const hue = parseFloat(props.colors.h);
    const separation = parseFloat(props.separation);
    const huePlus = hue + separation + 30;
    const hueMinus = props.colors.h - props.separation - 30;

    const styles = {
        plus: chroma(huePlus, props.colors.s, props.colors.l, "hsl"),
        minus: chroma(hueMinus, props.colors.s, props.colors.l, "hsl"),
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

if(props.choice === 'analogous' && props.separation <= 120 && props.separation >= 1) {
    const hexUp = chroma(styles.plus).hex();
    const rgbUp = chroma(styles.plus).rgb().join(', ');
    const hexDown = chroma(styles.minus).hex();
    const rgbDown = chroma(styles.minus).rgb().join(', ');    

    return (
        <div>
            <div style={{background:styles.plus, height:100, width:'50%', display:'inline-block'}}  onChange={handlePlus}>
            <h4 style={{color:'white', margin:'auto'}}>
            Hex: {hexUp}<br/>
            RGB: {rgbUp}<br />
            </h4>
            </div>
            <div style={{background:styles.minus, height:100, width:'50%', display:'inline-block'}}  onChange={handleMinus}>
            <h4 style={{color:'white', margin:'auto'}}>
            Hex: {hexDown}<br/>
            RGB: {rgbDown}<br />
            </h4>
            </div>
        </div>
    )
} else if(props.choice === 'analogous' && props.separation > 120) {
    return <h2 style={{textAlign:'center'}}>Please enter a value of 120 or less</h2>
} else {
    return null;
    }
}

export default Analogous;