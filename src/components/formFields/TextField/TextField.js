import React from 'react';
import { string, object } from 'prop-types';
import { ValidationError } from '../../../components';

import styles from './TextField.module.css';

export default function TextField({ label, meta, input, ...restProps }) {
  return (
    <div className={styles.root}>
      <div>
        <label className={styles.label} htmlFor={restProps.id}>
          {label}
        </label>
      </div>
      <div>
        <input className={styles.input} {...input} {...restProps} />
      </div>
      <div>
        <ValidationError meta={meta} />
      </div>
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
