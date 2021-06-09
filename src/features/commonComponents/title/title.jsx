import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({
  title
}) => (
  <div className="title">
    {title}
  </div>
);

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: "",
};

export default Title;
