import { render, screen } from '@testing-library/react';
import App from './App';


// test is a function provided by Jest
// takes 2 arguments 
// 1) string that represents the name of the test
// 2) function which has the code of the test

test('render h1 element', () => {
  // render the component that we will be testing
  render(<App />);

  screen.debug();
  // screen is used to select elements in the document
  expect(screen.getByText('Hello World')).toBeInTheDocument();
})
