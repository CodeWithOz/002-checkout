import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SliderRange } from '../../components';

const sliderConfig = {
  field: {
    component: SliderRange,
    name: 'range',
    type: 'range',
    max: '100',
    min: '1'
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
