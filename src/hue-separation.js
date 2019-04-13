import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class HueSeparation extends React.Component {

  render() {
    const selection = this.props.selection;
    const { classes } = this.props;
    if(selection === 'split' || selection === 'analogous') {
    return (
        <form className={classes.container} noValidate autoComplete="off">
                <TextField
          id="standard-helperText"
          label="Choose Hue Separation"
          defaultValue={this.props.hueSeparation}
          className={classes.textField}
          helperText="0 - 120 Degrees"
          margin="normal"
          onChange={this.props.setSeparation}
        />
        </form>
    );
    } else {
      return null;
    }
  }
}

HueSeparation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HueSeparation);