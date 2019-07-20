import SelectDropdown from './SelectDropdown';

const props = {
  id: 'testId',
  placeholder: 'testPlaceholder',
  label: 'testLabel',
  options: ['test1', 'test2', 'test3']
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

  test(`its 'placeholder' prop as the child of the first option element`, () => {
    const { shallowWrapper } = setup(SelectDropdown, props);
    expect(
      shallowWrapper
        .find('option')
        .at(0)
        .text()
    ).toEqual(props.placeholder);
  });

  test(`its 'label' prop as the child of the label element`, () => {
    const { shallowWrapper } = setup(SelectDropdown, props);
    expect(shallowWrapper.find('label').text()).toEqual(props.label);
  });

  test(`every member of its 'options' prop as an option element`, () => {
    const { shallowWrapper } = setup(SelectDropdown, props);
    props.options.forEach((value, idx) => {
      // placeholder option is at 0-position, so indexes are incremented for checking
      expect(
        shallowWrapper
          .find('option')
          .at(idx + 1)
          .text()
      ).toEqual(value);
      expect(
        shallowWrapper
          .find('option')
          .at(idx + 1)
          .prop('value')
      ).toEqual(value);
    });
  });
});
