import Breakdown, { BreakdownItem } from './Breakdown';
import { Slider } from '../../components';

const props = {};

describe('Breakdown renders', () => {
  test('a Slider', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).length).toEqual(1);
  });
});

describe('Breakdown correctly passes', () => {
  test('initial slider value of 50', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).prop('initialValues')).toEqual({
      range: '50'
    });
  });

  test('a slider label', () => {
    const { shallowWrapper } = setup(Breakdown, props);
    expect(shallowWrapper.find(Slider).prop('label')).toEqual(
      expect.any(String)
    );
    expect(shallowWrapper.find(Slider).prop('label').length).toBeGreaterThan(0);
  });
});

describe('BreakdownItem renders', () => {
  const breakdownItemProps = { label: 'testLabel', value: 'testValue' };

  test(`its 'label' prop`, () => {
    const { shallowWrapper } = setup(BreakdownItem, breakdownItemProps);
    expect(shallowWrapper.text()).toContain(breakdownItemProps.label);
  });

  test(`its 'value' prop`, () => {
    const { shallowWrapper } = setup(BreakdownItem, breakdownItemProps);
    expect(shallowWrapper.text()).toContain(breakdownItemProps.value);
  });
});
