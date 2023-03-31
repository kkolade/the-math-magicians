import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Quote />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
