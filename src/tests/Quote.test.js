import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';

test('renders a quote', async () => {
  const mockData = {
    quote: 'To be or not to be, that is the question.',
    author: 'William Shakespeare',
  };
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([mockData]),
  });

  const { getByText } = render(<Quote />);

  expect(getByText('Loading a quote...')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByText(`"${mockData.quote}"`)).toBeInTheDocument();
    expect(getByText(mockData.author)).toBeInTheDocument();
  });
});

test('renders an error message if the API call fails', async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

  const { getByText } = render(<Quote />);

  expect(getByText('Loading a quote...')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByText('Error getting quote!!!')).toBeInTheDocument();
  });
});
