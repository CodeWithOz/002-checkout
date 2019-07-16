import Breakdown from './Breakdown';
import { Slider } from '../../components';

const props = {};

describe('Breakdown renders', () => {
  test('a Slider', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).length).toEqual(1);
  });
});

describe('Breakdown correctly passes', () => {
  test('initial slider value of 50', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).prop('initialValues')).toEqual({
      range: '50'
    });
  });

  test('a slider label', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).prop('label')).toEqual(
      expect.any(String)
    );
    expect(shallowWrapper.find(Slider).prop('label').length).toBeGreaterThan(0);
  });
});
