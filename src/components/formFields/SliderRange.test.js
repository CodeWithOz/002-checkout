import SliderRange from './SliderRange';

const props = {
  type: 'test'
};

describe('SliderRange renders', () => {
  test('an input element', () => {
    const { shallowWrapper } = setup(SliderRange, props);
    expect(shallowWrapper.find('input').length).toEqual(1);
  });
});

describe('SliderRange correctly passes', () => {
  test(`its 'type' prop to its input element`, () => {
    const { shallowWrapper } = setup(SliderRange, props);
    expect(shallowWrapper.find('input').prop('type')).toEqual(props.type);
  });
});
