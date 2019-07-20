import TextField from './TextField';
import { ValidationError } from '../../../components';

const props = {
  id: 'testId',
  label: 'testLabel',
  type: 'testType',
  placeholder: 'testPlaceholder',
  meta: { touched: true, error: 'testError' }
};

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

  test('renders a ValidationError component', () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find(ValidationError).length).toEqual(1);
  });
});

describe('TextField correctly passes', () => {
  test(`its 'type' prop to the input element`, () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find('input').prop('type')).toEqual(props.type);
  });

  test(`its 'placeholder' prop to the input element`, () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find('input').prop('placeholder')).toEqual(
      props.placeholder
    );
  });

  test(`its 'meta' prop to the ValidationError component`, () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find(ValidationError).prop('meta')).toEqual(
      props.meta
    );
  });
});
