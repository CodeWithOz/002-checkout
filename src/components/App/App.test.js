import App from './App';
import { BgImgContainer, ProductDisplay, Payment } from '../../components';

const props = {};

describe('App renders', () => {
  test('a BgImgContainer', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(BgImgContainer).length).toEqual(1);
  });
});

describe('App correctly passes', () => {
  describe(`a 'bgImgUrl' prop to`, () => {
    test('ProductDisplay', () => {
      const { shallowWrapper } = setup(App, props);
      expect(shallowWrapper.find(ProductDisplay).prop('bgImgUrl')).toEqual(
        expect.any(String)
      );
      expect(
        shallowWrapper.find(ProductDisplay).prop('bgImgUrl').length
      ).toBeGreaterThan(0);
    });
  });
});

describe(`App's BgImgContainer contains`, () => {
  test('ProductDisplay', () => {
    const { shallowWrapper } = setup(App, props);
    expect(
      shallowWrapper.find(BgImgContainer).find(ProductDisplay).length
    ).toEqual(1);
  });

  test('Payment', () => {
    const { shallowWrapper } = setup(App, props);
    expect(shallowWrapper.find(BgImgContainer).find(Payment).length).toEqual(1);
  });
});
