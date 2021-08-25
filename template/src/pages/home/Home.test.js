import React from 'react';
import { render, screen } from '@testing-library/react';

import PagesHome from './home';

test('renders without crashing', () => {
  render(<PagesHome />);
  expect(screen.getByTestId('home')).toBeInTheDocument();
});
