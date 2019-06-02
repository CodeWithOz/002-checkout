import React from 'react';
import PropTypes from 'prop-types';

export default function SliderRange({ type }) {
  return <input type={type} />;
}

SliderRange.propTypes = {
  type: PropTypes.string.isRequired
};
