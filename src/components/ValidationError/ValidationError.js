import React from 'react';
import { shape, bool, string } from 'prop-types';

export default function ValidationError({ meta: { touched, error } }) {
  return touched && error ? <span>{error}</span> : null;
}

ValidationError.propTypes = {
  meta: shape({ touched: bool, error: string }).isRequired
};
