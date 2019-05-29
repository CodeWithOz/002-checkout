import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup() {
  const props = {};
  const wrapper = shallow(<App {...props} />);

  return { props, wrapper };
}

describe('App renders', () => {
  test('anything', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toEqual(true);
  });
});
