import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SliderRange from './formFields/SliderRange';

const sliderConfig = {
  field: {
    name: 'range',
    component: SliderRange
  }
};

export function Slider() {
  const { field } = sliderConfig;

  return (
    <form>
      <Field {...field} />
    </form>
  );
}

export default reduxForm({
  form: 'Slider'
})(Slider);
