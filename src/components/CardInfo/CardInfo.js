import React from 'react';
import { reduxForm } from 'redux-form';

export function CardInfo() {
  return (
    <div>
      <h3>Payment Information</h3>
      <form>CardInfo</form>
    </div>
  );
}

export default reduxForm({ form: 'CardInfo' })(CardInfo);
