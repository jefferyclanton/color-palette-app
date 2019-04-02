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
  state = {
    harmony: '',
    background: chroma(this.props.h, this.props.s, this.props.l, "hsl"),
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const style = {
        background: chroma(this.props.styling.h + 180, this.props.styling.s, this.props.styling.l, "hsl"),
        borderRadius: 500, 
        height: 275, 
        width: 275,
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
            <MenuItem value={1}>Monochromatic</MenuItem>
            <MenuItem value={2}>Complementary</MenuItem>
            <MenuItem value={3}>Analogous</MenuItem>
            <MenuItem value={4}>Split Complementary</MenuItem>
            <MenuItem value={5}>Triad</MenuItem>
          </Select>
          <FormHelperText>Choose Desired Color Harmony</FormHelperText>
        </FormControl>
      </form>
      <div style={style}></div>
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);