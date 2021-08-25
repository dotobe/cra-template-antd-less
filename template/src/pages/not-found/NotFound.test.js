import React from 'react';
import { render, screen } from '@testing-library/react';

import PagesNotFound from './NotFound';

test('renders without crashing', () => {
  render(<PagesNotFound />);
  expect(screen.getByTestId('404')).toBeInTheDocument();
});
