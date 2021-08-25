import React from 'react';
import { render, screen } from '@testing-library/react';

import PagesHelp from './Help';

test('renders without crashing', () => {
  render(<PagesHelp />);
  expect(screen.getByTestId('help')).toBeInTheDocument();
});
