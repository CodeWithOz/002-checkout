import { Field } from 'redux-form';
import { CardInfo } from './CardInfo';
import { TextField, SelectDropdown } from '../../components';

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

    test(`'label' set to 'CREDIT CARD NUMBER'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-number' }).prop('label')).toEqual(
        'CREDIT CARD NUMBER'
      );
    });

    test(`'component' set to TextField`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'cc-number' }).prop('component')
      ).toEqual(TextField);
    });

    test(`'placeholder' set to '0000 0000 0000 0000'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'cc-number' }).prop('placeholder')
      ).toEqual('0000 0000 0000 0000');
    });

    test(`'type' set to 'number'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-number' }).prop('type')).toEqual(
        'number'
      );
    });
  });

  describe('an expiry month Field with', () => {
    test(`'name' set to 'expiry-month'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'expiry-month' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'expiry-month' }).is(Field)).toEqual(
        true
      );
    });

    test(`'label' set to 'EXPIRY MONTH'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('label')
      ).toEqual('EXPIRY MONTH');
    });

    test(`'component' set to SelectDropdown`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('component')
      ).toEqual(SelectDropdown);
    });

    test(`'placeholder' set to 'Month'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('placeholder')
      ).toEqual('Month');
    });
  });
});
