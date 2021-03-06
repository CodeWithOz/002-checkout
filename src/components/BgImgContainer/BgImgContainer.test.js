import BgImgContainer from './BgImgContainer';

const props = {
  children: 'test'
};

describe('BgImgContainer renders', () => {
  test('a div', () => {
    const { shallowWrapper } = setup(BgImgContainer, props);
    expect(shallowWrapper.find('div').length).toEqual(1);
  });

  test(`its 'children' prop`, () => {
    const { shallowWrapper } = setup(BgImgContainer, props);
    expect(shallowWrapper.text()).toContain(props.children);
  });
});
