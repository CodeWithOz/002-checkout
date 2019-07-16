import React from 'react';
import { Slider } from '../../components';

const breakdownConfig = {
  slider: {
    initialValues: {
      range: '50'
    }
  }
};

const Breakdown = () => {
  const { slider } = breakdownConfig;

  return (
    <div>
      <Slider {...slider} />
    </div>
  );
};

export default Breakdown;
