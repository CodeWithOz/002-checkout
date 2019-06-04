import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SliderRange } from '../../components';

const sliderConfig = {
  field: {
    component: SliderRange,
    name: 'range',
    type: 'range'
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
