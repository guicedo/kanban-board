import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    width: "100%",
  },
  select: {
    '&:before': {
      borderBottomColor: 'transparent',
    },
    '&:after': {
      backgroundColor: '#FFF',
      borderBottomColor: 'transparent',
    }
  }
}));

const SelectCustom = ({placeholder, value, setValue, options, ...props}) => {
  const classes = useStyles();
  return (
  <FormControl className={classes.formControl}>
    <InputLabel>{value !==null ? null: placeholder}</InputLabel>
      <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      classes= {{root:classes.root}}
      className={classes.select}
      fullWidth
      {...props}
    >
      <MenuItem value={null} disabled>{placeholder}</MenuItem>
      {(options || []).map((option) => (
      <MenuItem value={option.value}>{option.text}</MenuItem>
      ))}
    </Select>
  </FormControl>
  );
};

SelectCustom.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

SelectCustom.defaultProps = {
  setValue: () => {},
  value: '',
  placeholder: '',
};

export default SelectCustom;
