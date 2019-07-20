import ValidationError from './ValidationError';

const getProps = (touched, error) => ({
  meta: {
    touched,
    error
  }
});

describe('ValidationError renders', () => {
  test('nothing when at least one of meta.touched and meta.error is falsy', () => {
    const error = 'testError';
    let { shallowWrapper } = setup(ValidationError, getProps(true, undefined));
    expect(shallowWrapper.children().exists()).toEqual(false);
    ({ shallowWrapper } = setup(ValidationError, getProps(false, error)));
    expect(shallowWrapper.children().exists()).toEqual(false);
    ({ shallowWrapper } = setup(ValidationError, getProps(false, undefined)));
    expect(shallowWrapper.children().exists()).toEqual(false);
  });

  test('meta.error when both meta.touched and meta.error are truthy', () => {
    const error = 'testError';
    const { shallowWrapper } = setup(ValidationError, getProps(true, error));
    expect(shallowWrapper.children().exists()).toEqual(true);
    expect(shallowWrapper.text()).toContain(error);
  });
});
