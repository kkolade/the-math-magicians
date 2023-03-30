import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('contains a headline', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
