import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';


// test is a function provided by Jest
// takes 2 arguments 
// 1) string that represents the name of the test
// 2) function which has the code of the test

test('loading text is shown while API request is in progress', async() => {
  render(<App />)

  const loading = screen.getByText('Loading...');
  expect(loading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
})
