import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders hobby input element', () => {
  const { getByLabelText } = render(<App />)
  const labelElement = getByLabelText(/hobby/i)
  expect(labelElement).toBeInTheDocument()
})

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(<App />)
  const inputElement = getByPlaceholderText('JavaScript')
  expect (inputElement).toBeInTheDocument()
})
