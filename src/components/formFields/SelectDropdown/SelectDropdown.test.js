import SelectDropdown from './SelectDropdown';

const props = {
  id: 'testId'
};

describe('SelectDropdown renders', () => {
  test('a select element', () => {
    const { shallowWrapper } = setup(SelectDropdown, props);
    expect(shallowWrapper.find('select').length).toEqual(1);
  });

  test('a label element', () => {
    const { shallowWrapper } = setup(SelectDropdown, props);
    expect(shallowWrapper.find('label').length).toEqual(1);
  });
});

describe('SelectDropdown correctly passes', () => {
  describe(`its 'id' prop to`, () => {
    test(`its label element as the 'htmlFor' attribute`, () => {
      const { shallowWrapper } = setup(SelectDropdown, props);
      expect(shallowWrapper.find('label').prop('htmlFor')).toEqual(props.id);
    });

    test(`its select element as the 'id' attribute`, () => {
      const { shallowWrapper } = setup(SelectDropdown, props);
      expect(shallowWrapper.find('select').prop('id')).toEqual(props.id);
    });
  });
});
