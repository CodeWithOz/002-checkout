import React from 'react';
import { reduxForm, Field } from 'redux-form';

const cardInfoConfig = {
  ccName: {
    name: 'cc-name'
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
