import React from 'react';
import PropTypes from 'prop-types';

export default function SliderRange({ input, meta, ...restProps }) {
  return <input {...restProps} {...input} />;
}

SliderRange.propTypes = {
  type: PropTypes.string.isRequired
};
