import React from 'react';
import { connect } from 'react-redux';
import { number, object } from 'prop-types';
import { Breakdown, CardInfo } from '../../components';

import styles from './Payment.module.css';

export const Payment = props => (
  <div className={styles.root}>
    <Breakdown rootClassName={styles.margin} {...props} />
    <hr className={styles.hr} />
    <CardInfo onSubmit={() => null} rootClassName={styles.margin} />
  </div>
);

const mapStateToProps = ({ price, discount, tax, form }) => {
  const stateAsProps = { price, discount, tax };

  const formReady =
    form && form.Slider && form.Slider.values && form.Slider.values.range;
  if (formReady) {
    stateAsProps.days = Number(form.Slider.values.range);
  }

  return stateAsProps;
};

Payment.propTypes = {
  // from redux store
  price: number,
  discount: number,
  tax: number,
  form: object
};

export default connect(mapStateToProps)(Payment);
