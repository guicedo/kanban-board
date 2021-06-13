import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';


const Button = ({
  disabled, onClick, children
}) => (
  <button
    className="button-container"
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
};

Button.defaultProps = {
  children: null,
  disabled: null,
  onClick: () => {},
};

export default Button;
