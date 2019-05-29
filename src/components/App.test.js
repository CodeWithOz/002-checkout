import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Slider from './Slider';

function setup() {
  const props = {};
  const wrapper = shallow(<App {...props} />);

  return { props, wrapper };
}

describe('App renders', () => {
  test('a Slider', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Slider).length).toEqual(1);
  });
});
