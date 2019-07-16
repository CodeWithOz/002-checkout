import React from 'react';
import { string, object } from 'prop-types';

export default function SliderRange({ input, meta, label, ...restProps }) {
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input {...restProps} {...input} />
    </div>
  );
}

SliderRange.propTypes = {
  type: string.isRequired,
  max: string,
  min: string,

  // provided by Redux Form
  input: object,
  meta: object
};
