import SliderRange from './SliderRange';

const props = {
  type: 'test',
  max: '100'
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

  test(`its 'max' prop to its input element`, () => {
    const { shallowWrapper } = setup(SliderRange, props);
    expect(shallowWrapper.find('input').prop('max')).toEqual(props.max);
  });
});
