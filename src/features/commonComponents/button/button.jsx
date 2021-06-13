import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';


const Button = ({
  disabled, onClick, children, red
}) => (
  <button
    className={red ? "button-container button-container-red" : "button-container"}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    <div className="button-content"
    >
      {children}
    </div>
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  red: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  disabled: null,
  onClick: () => { },
  red: false,
};

export default Button;
