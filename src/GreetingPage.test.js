import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {GreetingPage} from './GreetingPage';
import userEvent from '@testing-library/user-event'

test("renders title", () => {
  render(<GreetingPage />);
  const titleElement = screen.getByText(/Get Me Out Of Here!/i);
  expect(titleElement).toBeInTheDocument();
})

test("button works", () => {
  const mockFn = jest.fn()
  render(<GreetingPage greetingFn={mockFn} />)
  const submitBtnElement = screen.getByRole("button", {
    name: /Time To Escape!/i
  })
  userEvent.click(submitBtnElement)
  expect(mockFn).toHaveBeenCalled()
})