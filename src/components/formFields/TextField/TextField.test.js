import TextField from './TextField';

const props = {};

describe('TextField renders', () => {
  test('renders an input element', () => {
    const { shallowWrapper } = setup(TextField, props);
    expect(shallowWrapper.find('input').length).toEqual(1);
  });
});
