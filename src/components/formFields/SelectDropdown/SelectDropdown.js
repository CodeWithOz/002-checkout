import React from 'react';
import { string, object } from 'prop-types';

export default function SelectDropdown({
  input,
  meta,
  placeholder,
  label,
  ...restProps
}) {
  return (
    <div>
      <label htmlFor={restProps.id}>{label}</label>
      <select {...input} {...restProps}>
        <option value="">{placeholder}</option>
      </select>
    </div>
  );
}

SelectDropdown.propTypes = {
  id: string,
  placeholder: string,

  // from redux form
  input: object,
  meta: object
};
