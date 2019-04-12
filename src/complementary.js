import React from 'react';
import chroma from 'chroma-js';

function Complementary(props) {
    const colors = props.colors;
    const hue = colors.h + 180;
    const styles = chroma(hue, colors.s, colors.l, "hsl");
    const minusHue = chroma(colors.h + 180 - 360, colors.s, colors.l, "hsl");

    if(props.choice === 'complementary' && hue < 360) {
        return  <div style={{background:styles, height:100, width:'100%'}}></div>;
    } else if(props.choice === 'complementary' && hue > 360) {
        return <div style={{background:minusHue, height:100, width:'100%'}}></div>;
    } else {
        return null;
    }
}

export default Complementary;