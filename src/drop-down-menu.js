import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

  render() {
    const { classes } = this.props;
    const harmonyChange = this.props.harmonyChange;

    return (
        <div>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={harmonyChange}
            onChange={this.props.onChange}
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
            <MenuItem value={'triadic'}>Triadic</MenuItem>
          </Select>
          <FormHelperText>Choose Desired Color Harmony</FormHelperText>
        </FormControl>
      </form> 
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);