import { Field } from 'redux-form';
import { CardInfo } from './CardInfo';
import { TextField } from '../../components';

const props = {};

describe('CardInfo renders', () => {
  test('a form', () => {
    const { shallowWrapper } = setup(CardInfo, props);
    expect(shallowWrapper.find('form').length).toEqual(1);
  });

  describe('a name Field with', () => {
    test(`'name' set to 'cc-name'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-name' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'cc-name' }).is(Field)).toEqual(true);
    });

    test(`'label' set to 'NAME ON CREDIT CARD'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-name' }).prop('label')).toEqual(
        'NAME ON CREDIT CARD'
      );
    });

    test(`'component' set to TextField`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'cc-name' }).prop('component')
      ).toEqual(TextField);
    });

    test(`'placeholder' set to 'John Smith'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'cc-name' }).prop('placeholder')
      ).toEqual('John Smith');
    });

    test(`'type' set to 'text'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-name' }).prop('type')).toEqual(
        'text'
      );
    });
  });

  describe('a credit card number Field with', () => {
    test(`'name' set to 'cc-number'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-number' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'cc-number' }).is(Field)).toEqual(
        true
      );
    });
  });
});
