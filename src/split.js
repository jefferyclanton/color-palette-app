import React from 'react';
import chroma from 'chroma-js';

function Split(props) {
    const separation = parseFloat(props.separation);
    const hue = parseFloat(props.colors.h);
    const huePlus = hue + 180 + separation;
    const hueMinus = hue + 180 - separation;
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

    if(props.choice === 'split' && props.separation <= 120 && props.separation >= 1) {
        return (
            <div>
                <div style={{background:styles.plus, height:100, width:'50%', display:'inline-block'}} onChange={handlePlus}></div>
                <div style={{background:styles.minus, height:100, width:'50%', display:'inline-block'}} onChange={handleMinus}></div>
            </div>
        )
    } else if(props.choice === 'split' && props.separation > 120) {
        return <h2 style={{textAlign:'center'}}>Please enter a value of 120 or less</h2>
    } else {
        return null;
    }
}    

export default Split;