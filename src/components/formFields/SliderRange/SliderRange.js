import React from 'react';
import PropTypes from 'prop-types';

export default function SliderRange({ type, input }) {
  return <input type={type} {...input} />;
}

SliderRange.propTypes = {
  type: PropTypes.string.isRequired
};
