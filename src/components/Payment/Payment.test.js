import Payment from './Payment';

const props = {};

describe('Payment renders', () => {
  test('something', () => {
    const { shallowWrapper } = setup(Payment, props);
    expect(shallowWrapper.children()).toBeDefined();
  });
});
