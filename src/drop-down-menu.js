import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import chroma from 'chroma-js';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    harmony: '',
    firstBackground: 'white',
  };
  this.handleChange = this.handleChange.bind(this);
}

  handleChange = (event) => {
    this.setState({harmony: event.target.value});
  };

  render() {
    const hue = this.props.styling.h;
    const saturation = this.props.styling.s;
    const light = this.props.styling.l;
  
    const { classes } = this.props;
    const harmony = this.state.harmony;

    const monochromatic = {
     one: chroma(hue, saturation - .1, light, "hsl"),
     two: chroma(hue, saturation - .3, light, "hsl"),
     three: chroma(hue, saturation - .5, light, "hsl"),
     four: chroma(hue, saturation - .7, light, "hsl"),
     five: chroma(hue, saturation - .9, light, "hsl"),
    }
    const complementary = {
      up: chroma(hue + 180, saturation, light, "hsl")
    }
    
    const style = {
      background: monochromatic.four,
      borderRadius: 500, 
      height: 275, 
      width: 275,
  };
    const renderHarmony = function() {
      switch(harmony) {
        case 'monochromatic':
        return <div style={style}></div>;
        case 'analogous':
        return <div><div style={{background:chroma(hue + 60, saturation, light, "hsl"), height: 200, width: 200}}></div><div style={{background:chroma(hue - 60, saturation, light, "hsl"), height: 200, width: 200}}></div></div>;
        default:
        return <div style={{background:'gray', height: 100, width: 100}}></div>
      }
    }

    return (
        <div>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.harmony}
            onChange={this.handleChange}
            displayEmpty
            name="harmony"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>Color Harmony</em>
            </MenuItem>
            <MenuItem value={'monochromatic'}>Monochromatic</MenuItem>
            <MenuItem value={'complementary'}>Complementary</MenuItem>
            <MenuItem value={'analogous'}>Analogous</MenuItem>
            <MenuItem value={'split'}>Split Complementary</MenuItem>
            <MenuItem value={'triad'}>Triad</MenuItem>
          </Select>
          <FormHelperText>Choose Desired Color Harmony</FormHelperText>
        </FormControl>
      </form> 
      <div>{renderHarmony()}</div>
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);