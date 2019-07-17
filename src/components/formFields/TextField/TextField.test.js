import TextField from './TextField';

const props = { id: 'testId', label: 'testLabel', type: 'testType' };

describe('TextField renders', () => {
  test('renders an input element', () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find('input').length).toEqual(1);
  });

  test('renders a label for the input element', () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find('label').length).toEqual(1);
    expect(shallowWrapper.find('label').prop('htmlFor')).toEqual(props.id);
    expect(shallowWrapper.find('label').text()).toContain(props.label);
  });
});

describe('TextField correctly passes', () => {
  test(`its 'type' prop to the input element`, () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find('input').prop('type')).toEqual(props.type);
  });
});
