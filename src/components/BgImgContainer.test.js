import BgImgContainer from './BgImgContainer';

const props = {};

describe('BgImgContainer renders', () => {
  test('a div', () => {
    const { shallowWrapper } = setup(BgImgContainer, props);
    expect(shallowWrapper.find('div').length).toEqual(1);
  });
});
