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


class Values extends React.Component {
    render() {
        const { classes } = this.props;
        if(this.props.numberOfColors || this.props.harmony === 'complementary' || this.props.hueSeparation || this.props.harmony === 'triadic') {
        return(
    <div>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={this.props.value}
            onChange={this.props.onChange}
            displayEmpty
            name="value"
            className={classes.selectEmpty}
            onSubmit={this.props.onSubmit}
          >
            <MenuItem value="">
              <em>Need HSL or HSV?</em>
            </MenuItem>
            <MenuItem value={'hsl'}>HSL</MenuItem>
            <MenuItem value={'hsv'}>HSV</MenuItem>
          </Select>
          <FormHelperText>Get Value</FormHelperText>
        </FormControl>
      </form> 
      </div>
        );
        } else {
            return null;
        }
    }
}

Values.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Values);