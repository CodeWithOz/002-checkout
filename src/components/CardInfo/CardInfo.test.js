import { Field } from 'redux-form';
import { CardInfo } from './CardInfo';
import { TextField, SelectDropdown } from '../../components';

const props = { handleSubmit: jest.fn(), pristine: true, submitting: false };

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

    test(`'label' set to 'EXP. MONTH'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('label')
      ).toEqual('EXP. MONTH');
    });

    test(`'component' set to SelectDropdown`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('component')
      ).toEqual(SelectDropdown);
    });

    test(`'placeholder' set to 'Choose month'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('placeholder')
      ).toEqual('Choose month');
    });

    test(`'options' set to a non-empty array`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('options')
      ).toEqual(expect.any(Array));
      expect(
        shallowWrapper.find({ name: 'expiry-month' }).prop('options').length
      ).toBeGreaterThan(0);
    });
  });

  describe('an expiry year Field with', () => {
    test(`'name' set to 'expiry-year'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'expiry-year' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'expiry-year' }).is(Field)).toEqual(
        true
      );
    });

    test(`'label' set to 'EXP. YEAR'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-year' }).prop('label')
      ).toEqual('EXP. YEAR');
    });

    test(`'component' set to SelectDropdown`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-year' }).prop('component')
      ).toEqual(SelectDropdown);
    });

    test(`'placeholder' set to 'Choose year'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-year' }).prop('placeholder')
      ).toEqual('Choose year');
    });

    test(`'options' set to a non-empty array`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'expiry-year' }).prop('options')
      ).toEqual(expect.any(Array));
      expect(
        shallowWrapper.find({ name: 'expiry-year' }).prop('options').length
      ).toBeGreaterThan(0);
    });
  });

  describe('a credit card number Field with', () => {
    test(`'name' set to 'cc-cvc'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-cvc' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'cc-cvc' }).is(Field)).toEqual(true);
    });

    test(`'label' set to 'CVC'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-cvc' }).prop('label')).toEqual(
        'CVC'
      );
    });

    test(`'component' set to TextField`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-cvc' }).prop('component')).toEqual(
        TextField
      );
    });

    test(`'placeholder' set to '000'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(
        shallowWrapper.find({ name: 'cc-cvc' }).prop('placeholder')
      ).toEqual('000');
    });

    test(`'type' set to 'number'`, () => {
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find({ name: 'cc-cvc' }).prop('type')).toEqual(
        'number'
      );
    });
  });

  test('a button', () => {
    const { shallowWrapper } = setup(CardInfo, props);
    expect(shallowWrapper.find('button').length).toEqual(1);
  });

  describe('a button which is', () => {
    afterEach(() => {
      props.pristine = true;
      props.submitting = false;
    });

    test('disabled when form is pristine or submitting', () => {
      props.pristine = true;
      props.submitting = true;
      const { shallowWrapper } = setup(CardInfo, props);
      expect(shallowWrapper.find('button').prop('disabled')).toEqual(true);
      props.pristine = false;
      props.submitting = true;
      expect(shallowWrapper.find('button').prop('disabled')).toEqual(true);
      props.pristine = true;
      props.submitting = false;
      expect(shallowWrapper.find('button').prop('disabled')).toEqual(true);
    });
  });
});

describe('CardInfo correctly passes', () => {
  test(`its 'handleSubmit' prop to its form element's onSubmit prop`, () => {
    const { shallowWrapper } = setup(CardInfo, props);
    expect(shallowWrapper.find('form').prop('onSubmit')).toEqual(
      props.handleSubmit
    );
  });
});
