import { Field } from 'redux-form';
import { Slider } from './Slider';

const props = {};

describe('Slider renders', () => {
  test('a form', () => {
    const { shallowWrapper } = setup(Slider, props);
    expect(shallowWrapper.find('form').length).toEqual(1);
  });

  test('a Field', () => {
    const { shallowWrapper } = setup(Slider, props);
    expect(shallowWrapper.find(Field).length).toEqual(1);
  });
});
