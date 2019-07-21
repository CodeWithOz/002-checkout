import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { number, object, string } from 'prop-types';
import { Breakdown, CardInfo } from '../../components';

import styles from './Payment.module.css';

export const Payment = ({ rootClassName, ...restProps }) => (
  <div className={classnames(rootClassName, styles.root)}>
    <Breakdown rootClassName={styles.margin} {...restProps} />
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
  rootClassName: string,

  // from redux store
  price: number,
  discount: number,
  tax: number,
  form: object
};

export default connect(mapStateToProps)(Payment);
