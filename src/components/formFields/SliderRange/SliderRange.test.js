import SliderRange from './SliderRange';

const props = {
  type: 'test',
  max: '100',
  min: '1',
  label: 'testLabel',
  input: { name: 'testName' }
};

describe('SliderRange renders', () => {
  test('an input element', () => {
    const { shallowWrapper } = setup(SliderRange, props);
    expect(shallowWrapper.find('input').length).toEqual(1);
  });

  test('a label for the input element', () => {
    const { shallowWrapper } = setup(SliderRange, props);
    expect(shallowWrapper.find('label').length).toEqual(1);
    expect(shallowWrapper.find('label').prop('htmlFor')).toEqual(
      props.input.name
    );
    expect(shallowWrapper.find('label').text()).toEqual(props.label);
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

  test(`its 'min' prop to its input element`, () => {
    const { shallowWrapper } = setup(SliderRange, props);
    expect(shallowWrapper.find('input').prop('min')).toEqual(props.min);
  });
});
