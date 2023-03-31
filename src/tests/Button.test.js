import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from '../components/Button';

describe('Button', () => {
  test('renders button correctly', () => {
    const { container } = render(
      <Button className="test-class" onClick={() => {}}>
        Test Button
      </Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button className="test-class" onClick={onClickMock}>
        Test Button
      </Button>,
    );
    fireEvent.click(getByText('Test Button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
