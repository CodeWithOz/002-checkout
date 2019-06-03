import App from './App';
import Slider from './Slider';
import BgImgContainer from './BgImgContainer';

const props = {};

describe('App renders', () => {
  test('a Slider', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(Slider).length).toEqual(1);
  });

  test('a BgImgContainer', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(BgImgContainer).length).toEqual(1);
  });
});
