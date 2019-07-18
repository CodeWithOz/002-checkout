import React from 'react';

export default function SelectDropdown({ id }) {
  return (
    <div>
      <label htmlFor={id} />
      <select id={id}>SelectDropdown</select>
    </div>
  );
}
