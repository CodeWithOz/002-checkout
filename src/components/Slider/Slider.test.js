import { Field } from 'redux-form';
import { Slider } from './Slider';
import { SliderRange } from '../../components';

const props = { label: 'test' };

describe('Slider renders', () => {
  test('a form', () => {
    const { shallowWrapper } = setup(Slider, props);
    expect(shallowWrapper.find('form').length).toEqual(1);
  });

  describe('a slider Field with', () => {
    test(`name set to 'range'`, () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).length).toEqual(1);
      expect(shallowWrapper.find({ name: 'range' }).is(Field)).toEqual(true);
    });

    test('component set to SliderRange', () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).prop('component')).toEqual(
        SliderRange
      );
    });

    test(`type set to 'range'`, () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).prop('type')).toEqual(
        'range'
      );
    });

    test(`'max' set to '100'`, () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).prop('max')).toEqual('100');
    });

    test(`'min' set to '1'`, () => {
      const { shallowWrapper } = setup(Slider, props);
      expect(shallowWrapper.find({ name: 'range' }).prop('min')).toEqual('1');
    });
  });
});

describe('Slider correctly passes', () => {
  test(`its 'label' prop to the slider Field`, () => {
    const { shallowWrapper } = setup(Slider, props);
    expect(shallowWrapper.find({ name: 'range' }).prop('label')).toEqual(
      props.label
    );
  });
});
