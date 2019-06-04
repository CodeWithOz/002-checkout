import App from './App';
import { BgImgContainer, ProductDisplay, Slider } from '../../components';

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

describe('App correctly passes', () => {
  test(`a 'bgImgUrl' prop to BgImgContainer`, () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(BgImgContainer).prop('bgImgUrl')).toEqual(
      expect.any(String)
    );
    expect(
      shallowWrapper.find(BgImgContainer).prop('bgImgUrl').length
    ).toBeGreaterThan(0);
  });

  test('a ProductDisplay as the a of the BgImgContainer', () => {
    const { shallowWrapper } = setup(App, props);
    expect(
      shallowWrapper.find(BgImgContainer).find(ProductDisplay).length
    ).toEqual(1);
  });
});
