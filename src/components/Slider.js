import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function Slider() {
  return (
    <form>
      <Field />
    </form>
  );
}

export default reduxForm({
  form: 'Slider'
})(Slider);
