import { Payment } from './Payment';
import { Breakdown } from '../../components';

const props = { discount: 9 };

describe('Payment renders', () => {
  test('a Breakdown component', () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).length).toEqual(1);
  });
});

describe('Payment correctly passes', () => {
  test(`its 'discount' prop to Breakdown`, () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).prop('discount')).toEqual(
      props.discount
    );
  });
});
