import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {GreetingPage} from './GreetingPage';


test('renders title', () => {
  render(<GreetingPage />);
  const titleElement = screen.getByText(/Get Me Out Of Here!/i);
  expect(titleElement).toBeInTheDocument();
})