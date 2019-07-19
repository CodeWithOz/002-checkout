import React from 'react';
import { number, string } from 'prop-types';
import { Slider } from '../../components';

import styles from './Breakdown.module.css';

const breakdownConfig = {
  slider: {
    initialValues: {
      range: '50'
    },
    label: 'Days'
  }
};

export const BreakdownItem = ({ label, value, labelClass, valueClass }) => (
  <div className={styles.lineItem}>
    <span className={labelClass}>{label}</span>
    <span className={valueClass}>{value}</span>
  </div>
);

const Breakdown = ({ days, price, discount, tax, rootClassName }) => {
  const breakdownItems = [];
  const daysLabel = `${price} GBP x ${days} days`;
  const daysPrice = price * days;
  const daysValue = `${daysPrice} GBP`;
  breakdownItems.push({ label: daysLabel, value: daysValue });

  const discountLabel = 'Discount';
  const discountPrice = discount * days;
  const discountValue = `${discountPrice} GBP`;
  breakdownItems.push({ label: discountLabel, value: discountValue });

  const subtotalLabel = 'Subtotal';
  const subtotalPrice = daysPrice - discountPrice;
  const subtotalValue = `${subtotalPrice} GBP`;
  breakdownItems.push({ label: subtotalLabel, value: subtotalValue });

  const taxLabel = 'Tax';
  const taxPrice = tax * days;
  const taxValue = `${taxPrice} GBP`;
  breakdownItems.push({ label: taxLabel, value: taxValue });

  const totalLabel = 'TOTAL';
  const totalPrice = subtotalPrice + taxPrice;
  const totalValue = `${totalPrice} GBP`;

  const { slider } = breakdownConfig;

  return (
    <div className={rootClassName}>
      <Slider {...slider} />
      <ul className={styles.list}>
        {breakdownItems.map((itemProps, idx) => (
          <li className={styles.subItem} key={idx}>
            <BreakdownItem {...itemProps} />
          </li>
        ))}
        <li className={styles.totalLine}>
          <BreakdownItem
            label={totalLabel}
            value={totalValue}
            labelClass={styles.totalLabel}
            valueClass={styles.totalValue}
          />
        </li>
      </ul>
    </div>
  );
};

Breakdown.propTypes = {
  rootClassName: string,
  days: number,
  price: number,
  discount: number,
  tax: number
};

export default Breakdown;
