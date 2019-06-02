import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function Slider() {
  return (
    <form>
      <Field name="test" component={() => <div>Test</div>} />
    </form>
  );
}

export default reduxForm({
  form: 'Slider'
})(Slider);
