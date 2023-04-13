import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

afterEach(cleanup);

it("renders", () => {
    const {asFragment} = render(<Header text="Hello!" />);
    expect(asFragment()).toMatchSnapshot();
})

it("inserts text in h1", () => {
    render(<Header text="Hello!" />)

    expect(screen.getByTestId('h1tag')).toHaveTextContent("Hello!");
    expect(screen.getByText("Hello!")).toHaveClass("hello");
})





