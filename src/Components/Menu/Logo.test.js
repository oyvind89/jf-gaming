import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

test('renders learn react link', () => {
  const { getByAltText } = render(<Logo altText="logo" />);
  const imgElement = getByAltText('logo');
  expect(imgElement).toBeInTheDocument();
});