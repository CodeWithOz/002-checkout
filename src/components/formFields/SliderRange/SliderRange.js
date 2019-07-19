import React from 'react';
import { string, object } from 'prop-types';

import styles from './SliderRange.module.css';

export default function SliderRange({ meta, label, ...restProps }) {
  return (
    <div className={styles.root}>
      <label htmlFor={restProps.id} className={styles.label}>
        {label}:
      </label>
      <input {...restProps} />
    </div>
  );
}

SliderRange.propTypes = {
  type: string.isRequired,
  max: string,
  min: string,

  // provided by Redux Form
  input: object,
  meta: object
};
