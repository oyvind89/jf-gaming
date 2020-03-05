import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

test('renders navigation with players element', () => {
  const { getByText } = render(<Navigation 
    elements={['Home', 'Players', 'Games']}
  />);
  const playersElement = getByText('Players');
  expect(playersElement).toBeInTheDocument();
});