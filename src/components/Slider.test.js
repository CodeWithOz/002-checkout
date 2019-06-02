import { Field } from 'redux-form';
import { Slider } from './Slider';

const props = {};

describe('Slider renders', () => {
  test('a form', () => {
    const { shallowWrapper } = setup(Slider, props);
    expect(shallowWrapper.find('form').length).toEqual(1);
  });

  describe('a Field with', () => {
    test(`name of 'range'`, () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'range' }).is(Field)).toEqual(true);
    });
  });
});
