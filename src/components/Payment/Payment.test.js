import Payment from './Payment';
import Breakdown from '../Breakdown/Breakdown';

const props = {};

describe('Payment renders', () => {
  test('a Breakdown component', () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).length).toEqual(1);
  });
});
