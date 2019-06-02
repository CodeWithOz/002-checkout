import React from 'react';
import { Field, reduxForm } from 'redux-form';

const sliderConfig = {
  field: {
    name: 'range'
  }
};

export function Slider() {
  const { field } = sliderConfig;

  return (
    <form>
      <Field {...field} component={() => <div>Test</div>} />
    </form>
  );
}

export default reduxForm({
  form: 'Slider'
})(Slider);
