import Breakdown from './Breakdown';

const props = {};

describe('Breakdown renders', () => {
  test('something', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.children()).toBeDefined();
  });
});
