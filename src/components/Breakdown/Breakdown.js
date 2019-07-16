import React from 'react';
import { Slider } from '../../components';

const breakdownConfig = {
  slider: {
    initialValues: {
      range: '50'
    },
    label: 'Days'
  }
};

export const BreakdownItem = ({ label, value }) => (
  <div>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

const Breakdown = () => {
  const { slider } = breakdownConfig;

  return (
    <div>
      <Slider {...slider} />
    </div>
  );
};

export default Breakdown;
