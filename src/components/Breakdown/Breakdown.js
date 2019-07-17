import React from 'react';
import { number } from 'prop-types';
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

const Breakdown = ({ days, price, discount, tax }) => {
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
    <div>
      <Slider {...slider} />
      <ul>
        {breakdownItems.map((itemProps, idx) => (
          <li key={idx}>
            <BreakdownItem {...itemProps} />
          </li>
        ))}
        <li>
          <BreakdownItem label={totalLabel} value={totalValue} />
        </li>
      </ul>
    </div>
  );
};

Breakdown.propTypes = {
  days: number,
  price: number,
  discount: number,
  tax: number
};

export default Breakdown;
