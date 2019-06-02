import { Field } from 'redux-form';
import { Slider } from './Slider';
import SliderRange from './formFields/SliderRange';

const props = {};

describe('Slider renders', () => {
  test('a form', () => {
    const { shallowWrapper } = setup(Slider, props);
    expect(shallowWrapper.find('form').length).toEqual(1);
  });

  describe('a Field with', () => {
    test(`name set to 'range'`, () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'range' }).is(Field)).toEqual(true);
    });

    test('component set to SliderRange', () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ component: SliderRange }).length).toEqual(1);
      expect(shallowWrapper.find({ component: SliderRange }).is(Field)).toEqual(
        true
      );
    });
  });
});
