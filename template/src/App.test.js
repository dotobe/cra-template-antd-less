import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

beforeAll(() => {});
beforeEach(() => {});
afterEach(() => {});
afterAll(() => {});

test('renders app logo', async () => {
  /// Arrange
  render(<App />);

  /// Act
  await waitFor(() =>
    // throws an error if it cannot find an element
    screen.getByTestId('logo')
  );

  /// Assert
  expect(screen.getByTestId('logo')).toBeInTheDocument();
});
