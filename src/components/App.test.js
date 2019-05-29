import App from './App';
import Slider from './Slider';

const props = {};

describe('App renders', () => {
  test('a Slider', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(Slider).length).toEqual(1);
  });
});
