import App from './App';
import Slider from './Slider';
import ProductDisplay from './ProductDisplay';

const props = {};

describe('App renders', () => {
  test('a Slider', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(Slider).length).toEqual(1);
  });

  test('a ProductDisplay', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(ProductDisplay).length).toEqual(1);
  });
});
