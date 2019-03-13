import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 25
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    colors: '',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = colors => event => {
    this.setState({ [colors]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

<FormControl variant="outlined" className={classes.formControl}>
<InputLabel
  ref={ref => {
    this.InputLabelRef = ref;
  }}
  htmlFor="colors"
>
  Number of Colors
</InputLabel>
<Select
  native
  value={this.state.paletteType}
  onChange={this.handleChange('colors')}
  input={
    <OutlinedInput
      colors="colors"
      labelWidth={this.state.labelWidth}
      id="colors"
    />
  }
>
  <option value="" />
  <option value={2}>Two</option>
  <option value={3}>Three</option>
  <option value={4}>Four</option>
  <option value={5}>Five</option>
</Select>
</FormControl>
   </div>
   );
 }
}

NativeSelects.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);