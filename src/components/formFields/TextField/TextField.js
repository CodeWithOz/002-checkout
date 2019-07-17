import React from 'react';
import { string, object } from 'prop-types';
import { ValidationError } from '../../../components';

export default function TextField({ label, meta, ...restProps }) {
  return (
    <div>
      <label htmlFor={restProps.id}>{label}</label>
      <input {...restProps} />
      <p>
        <ValidationError meta={meta} />
      </p>
    </div>
  );
}

TextField.propTypes = {
  label: string,
  id: string,
  placeholder: string,
  type: string,

  // from redux form
  input: object,
  meta: object
};
