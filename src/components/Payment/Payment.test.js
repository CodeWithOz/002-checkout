import Payment from './Payment';
import { Breakdown } from '../../components';

const props = {};

describe('Payment renders', () => {
  test('a Breakdown component', () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.find(Breakdown).length).toEqual(1);
  });
});
