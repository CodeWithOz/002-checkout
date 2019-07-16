import App from './App';
import { BgImgContainer, ProductDisplay } from '../../components';

const props = {};

describe('App renders', () => {
  test('a BgImgContainer', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(BgImgContainer).length).toEqual(1);
  });
});

describe('App correctly passes', () => {
  describe(`a 'bgImgUrl' prop to`, () => {
    test('BgImgContainer', () => {
      const { shallowWrapper } = setup(App, props);
      expect(shallowWrapper.find(BgImgContainer).prop('bgImgUrl')).toEqual(
        expect.any(String)
      );
      expect(
        shallowWrapper.find(BgImgContainer).prop('bgImgUrl').length
      ).toBeGreaterThan(0);
    });

    test('ProductDisplay', () => {
      const { shallowWrapper } = setup(App, props);
      expect(shallowWrapper.find(ProductDisplay).prop('bgImgUrl')).toEqual(
        expect.any(String)
      );
      expect(
        shallowWrapper.find(BgImgContainer).prop('bgImgUrl').length
      ).toBeGreaterThan(0);
    });
  });

  test('a ProductDisplay in the children of the BgImgContainer', () => {
    const { shallowWrapper } = setup(App, props);
    expect(
      shallowWrapper.find(BgImgContainer).find(ProductDisplay).length
    ).toEqual(1);
  });
});
