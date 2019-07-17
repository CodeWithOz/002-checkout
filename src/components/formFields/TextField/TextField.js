import React from 'react';
import { ValidationError } from '../../../components';

export default function TextField({ label, meta, ...restProps }) {
  return (
    <div>
      <label htmlFor={restProps.id}>{label}</label>
      <input {...restProps} />
      <p>
        <ValidationError />
      </p>
    </div>
  );
}
