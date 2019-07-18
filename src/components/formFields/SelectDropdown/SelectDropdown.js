import React from 'react';
import { string } from 'prop-types';

export default function SelectDropdown({ id }) {
  return (
    <div>
      <label htmlFor={id} />
      <select id={id}>SelectDropdown</select>
    </div>
  );
}

SelectDropdown.propTypes = {
  id: string
};
