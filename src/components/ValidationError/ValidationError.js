import React from 'react';

export default function ValidationError({ meta: { touched, error } }) {
  return touched && error ? <span>{error}</span> : null;
}
