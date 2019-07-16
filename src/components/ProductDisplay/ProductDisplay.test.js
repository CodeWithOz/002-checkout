import { ProductDisplay } from './ProductDisplay';

const props = {
  bgImgUrl: 'test'
};

describe('ProductDisplay renders', () => {
  describe('a div with', () => {
    test('background image set to the bgImgUrl prop', () => {
      const { shallowWrapper } = setup(ProductDisplay, props);
      expect(
        shallowWrapper
          .find('div')
          .at(0)
          .prop('style').backgroundImage
      ).toContain(props.bgImgUrl);
    });
  });
});
