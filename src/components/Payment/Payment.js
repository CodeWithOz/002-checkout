import React from 'react';
import { connect } from 'react-redux';
import { Breakdown, CardInfo } from '../../components';

export const Payment = props => (
  <>
    <Breakdown {...props} />
    <CardInfo />
  </>
);

const mapStateToProps = ({ price, discount, tax, form }) => {
  const stateAsProps = { price, discount, tax };

  const formReady =
    form && form.Slider && form.Slider.values && form.Slider.values.range;
  if (formReady) {
    stateAsProps.days = form.Slider.values.range;
  }

  return stateAsProps;
};

export default connect(mapStateToProps)(Payment);
