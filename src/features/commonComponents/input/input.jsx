import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-root': {
      color: 'black',
      backgroundColor: '#FFF',
      fontSize: '12px', 
      padding: 8,
      width: '100%',
    },
    '& label.Mui-focused': {
      color: 'transparent',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'transparent',
    },
    '& ::placeholder':{
      color: ' #585858',
      marginLeft: '8px',
      opacity: 1,
    },
  },
}));

const Input = ({placeholder, value, setValue, ...props}) => {
  const classes = useStyles();
  return (
    <TextField
      id={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      fullWidth
      classes={{root:classes.root}}
      {...props}
    />
  );
};

Input.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  setValue: () => {},
  value: '',
  placeholder: '',
};

export default Input;
