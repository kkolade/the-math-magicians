import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe ('testing Calculator', ()=> {
  test ( 'Calculator snapshot renders correctly', ()=> {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  test ('Calculator component renders correctly', ()=> {
    render (<Calculator />);
    expect (screen.getByRole('heading')).toBeInTheDocument();
    expect (screen.getByText('AC')).toBeInTheDocument();
  })
})