import React from 'react';
import { string, object, array } from 'prop-types';

import styles from './SelectDropdown.module.css';

export default function SelectDropdown({
  input,
  meta,
  placeholder,
  label,
  options,
  ...restProps
}) {
  return (
    <div className={styles.root}>
      <div>
        <label htmlFor={restProps.id} className={styles.label}>
          {label}
        </label>
      </div>
      <div>
        <select className={styles.select} {...input} {...restProps}>
          <option value="">{placeholder}</option>
          {options.map((value, idx) => (
            <option className={styles.option} value={value} key={idx}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

SelectDropdown.propTypes = {
  id: string,
  placeholder: string,
  options: array,
  label: string,

  // from redux form
  input: object,
  meta: object
};
