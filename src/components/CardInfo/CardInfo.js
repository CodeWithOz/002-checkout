import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from '../../components';

const cardInfoConfig = {
  ccName: {
    name: 'cc-name',
    id: 'cc-name',
    label: 'NAME ON CREDIT CARD',
    component: TextField,
    placeholder: 'John Smith',
    type: 'text'
  }
};

export function CardInfo() {
  const { ccName } = cardInfoConfig;

  return (
    <div>
      <h3>Payment Information</h3>
      <form>
        <Field {...ccName} />
      </form>
    </div>
  );
}

export default reduxForm({ form: 'CardInfo' })(CardInfo);
