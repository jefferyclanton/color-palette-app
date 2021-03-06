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

class ColorAmount extends React.Component {
    render() {
      const monochromatic = this.props.value;
        const { classes } = this.props;
        if(monochromatic === 'monochromatic') {
        return(
    <div>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={this.props.amount}
            onChange={this.props.colors}
            displayEmpty
            name="color-amount"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>Number of Colors</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
          <FormHelperText>Choose Number of Colors</FormHelperText>
        </FormControl>
      </form> 
      </div>
        );
        } else {
          return null;
        }
    }
}

ColorAmount.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ColorAmount);