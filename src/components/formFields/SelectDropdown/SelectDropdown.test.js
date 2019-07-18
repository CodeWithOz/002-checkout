import SelectDropdown from './SelectDropdown';

const props = {};

describe('SelectDropdown renders', () => {
  test('a select element', () => {
    const { shallowWrapper } = setup(SelectDropdown, props);
    expect(shallowWrapper.find('select').length).toEqual(1);
  });
});
