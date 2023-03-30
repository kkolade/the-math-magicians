import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('testing Button', () => {
  test('Button snapshot renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Button component renders correctly', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
