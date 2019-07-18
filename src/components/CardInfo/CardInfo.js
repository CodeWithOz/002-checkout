import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { func, bool } from 'prop-types';
import { TextField, SelectDropdown } from '../../components';

const cardInfoConfig = {
  ccName: {
    name: 'cc-name',
    id: 'cc-name',
    label: 'NAME ON CREDIT CARD',
    component: TextField,
    placeholder: 'John Smith',
    type: 'text'
  },
  ccNumber: {
    name: 'cc-number',
    id: 'cc-number',
    label: 'CREDIT CARD NUMBER',
    component: TextField,
    placeholder: '0000 0000 0000 0000',

    // 'number' type is normally not a good fit for credit card numbers
    // using it because that's what React Daily UI originally used
    type: 'number'
  },
  expiryMonth: {
    name: 'expiry-month',
    id: 'expiry-month',
    label: 'EXPIRY MONTH',
    component: SelectDropdown,
    placeholder: 'Choose a month',
    options: [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ]
  },
  expiryYear: {
    name: 'expiry-year',
    id: 'expiry-year',
    label: 'EXPIRY YEAR',
    component: SelectDropdown,
    placeholder: 'Choose a year',
    options: ['2016', '2017', '2018', '2019', '2020', '2021']
  },
  ccCVC: {
    name: 'cc-cvc',
    id: 'cc-cvc',
    label: 'CVC',
    component: TextField,
    placeholder: '000',

    // 'number' type is normally not a good fit for CVC numbers
    // using it because that's what React Daily UI originally used
    type: 'number'
  }
};

export function CardInfo({ handleSubmit, pristine, submitting }) {
  const { ccName, ccNumber, expiryMonth, expiryYear, ccCVC } = cardInfoConfig;

  return (
    <div>
      <h3>Payment Information</h3>
      <form onSubmit={handleSubmit}>
        <Field {...ccName} />
        <Field {...ccNumber} />
        <Field {...expiryMonth} />
        <Field {...expiryYear} />
        <Field {...ccCVC} />
        <button disabled={pristine || submitting ? true : false}>
          BOOK SECURELY
        </button>
      </form>
    </div>
  );
}

CardInfo.propTypes = {
  handleSubmit: func,
  pristine: bool,
  submitting: bool
};

export default reduxForm({ form: 'CardInfo' })(CardInfo);
