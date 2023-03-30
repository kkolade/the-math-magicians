import { render } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';

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
