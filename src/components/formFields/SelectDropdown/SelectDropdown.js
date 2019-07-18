import React from 'react';
import { string, object } from 'prop-types';

export default function SelectDropdown({
  input,
  meta,
  placeholder,
  ...restProps
}) {
  return (
    <div>
      <label htmlFor={restProps.id} />
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
