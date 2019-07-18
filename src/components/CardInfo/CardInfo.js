import React from 'react';
import { reduxForm, Field } from 'redux-form';
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
    component: SelectDropdown
  }
};

export function CardInfo() {
  const { ccName, ccNumber, expiryMonth } = cardInfoConfig;

  return (
    <div>
      <h3>Payment Information</h3>
      <form>
        <Field {...ccName} />
        <Field {...ccNumber} />
        <Field {...expiryMonth} />
      </form>
    </div>
  );
}

export default reduxForm({ form: 'CardInfo' })(CardInfo);
