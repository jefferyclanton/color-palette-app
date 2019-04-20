import React from 'react';
import chroma from 'chroma-js';

function Complementary(props) {
    const colors = props.colors;
    const hue = colors.h + 180;
    const styles = chroma(hue, colors.s, colors.l, "hsl");

    let hslPrint = styles.hsl().slice(0, 3);
    hslPrint = hslPrint.map(function(element) {
        return Number(element.toFixed(2));
    });
    const hslTry = hslPrint.join(', ');

    let hsvPrint = styles.hsv();
    hsvPrint = hsvPrint.map(function(element) {
        return Number(element.toFixed(2));
    });
    const hsvTry = hsvPrint.join(', ');

    if(props.choice === 'complementary') {
        return  (
        <div style={{background:styles, height:100, width:'100%'}}>
        <h4 style={{textAlign:'center', color:'white', margin:'auto'}}>
        Hex: {chroma(styles).hex()}<br/>
        RGB: {chroma(styles).rgb().join(', ')}<br />
        HSL: {hslTry}<br />
        HSV: {hsvTry}
        </h4>
        </div>
        )
    } else {
        return null;
    }
}

export default Complementary;