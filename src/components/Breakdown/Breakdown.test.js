import Breakdown from './Breakdown';
import Slider from '../Slider/Slider';

const props = {};

describe('Breakdown renders', () => {
  test('a Slider', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).length).toEqual(1);
  });

  test('a Slider with the initial slider value set to 50', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).prop('initialValues')).toEqual({
      range: '50'
    });
  });
});
