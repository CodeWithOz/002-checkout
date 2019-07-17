import React from 'react';

export default function TextField({ label, meta, ...restProps }) {
  return (
    <div>
      <label htmlFor={restProps.id}>{label}</label>
      <input {...restProps} />
    </div>
  );
}
