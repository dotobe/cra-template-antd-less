// import dependencies
// import React from 'react';

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// importing react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
// import '@testing-library/jest-dom';

// the component to test
import PagesDashboard from './Dashboard';

// declare which API requests to mock
const server = setupServer(
  rest.get('/meshAPI', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ success: true }));
  })
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test('renders without crashing', () => {
  render(<PagesDashboard />);
  expect(screen.getByTestId('dashboard')).toBeInTheDocument();
});

test('loads and displays results', async () => {
  // arrange - the `render` method renders a React element into the DOM
  // act - the `fireEvent` method allows you to fire events to simulate user actions
  // assert
});

test('handles 500 server error', async () => {
  server.use(
    rest.get('/meshAPI', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
});
