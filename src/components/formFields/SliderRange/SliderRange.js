import React from 'react';
import { string, object } from 'prop-types';

export default function SliderRange({ meta, label, ...restProps }) {
  return (
    <div>
      <label htmlFor={restProps.id}>{label}</label>
      <input {...restProps} />
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
