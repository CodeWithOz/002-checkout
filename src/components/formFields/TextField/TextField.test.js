import TextField from './TextField';

const props = { id: 'testId', label: 'testLabel' };

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
