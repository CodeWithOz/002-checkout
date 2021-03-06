import { Payment } from './Payment';
import { Breakdown, CardInfo } from '../../components';

const props = { discount: 9, price: 100, tax: 10 };

describe('Payment renders', () => {
  test('a Breakdown component', () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).length).toEqual(1);
  });

  test('a CardInfo component', () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(CardInfo).length).toEqual(1);
  });
});

describe('Payment correctly passes', () => {
  test(`its 'discount' prop to Breakdown`, () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).prop('discount')).toEqual(
      props.discount
    );
  });

  test(`its 'price' prop to Breakdown`, () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).prop('price')).toEqual(props.price);
  });

  test(`its 'tax' prop to Breakdown`, () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).prop('tax')).toEqual(props.tax);
  });

  test(`a submit handler to CardInfo`, () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(CardInfo).prop('onSubmit')).toEqual(
      expect.any(Function)
    );
  });
});
