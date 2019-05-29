import { createElement } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup(component, props, renderMethod = 'shallow') {
  let shallowWrapper,
    mountWrapper,
    wrappers = {};
  const element = createElement(component, props);

  switch (renderMethod) {
    case 'all':
      shallowWrapper = shallow(element);
      mountWrapper = mount(element);
      wrappers = { ...wrappers, mountWrapper, shallowWrapper };
      break;

    case 'mount':
      mountWrapper = mount(element);
      wrappers = { ...wrappers, mountWrapper };
      break;

    default:
      shallowWrapper = shallow(element);
      wrappers = { ...wrappers, shallowWrapper };
  }

  return { ...wrappers, props };
}

global.setup = setup;
