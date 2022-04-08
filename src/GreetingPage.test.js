import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import GreetingPage from './GreetingPage';


test('button starts game', () => {
  render(<GreetingPage/>)
  fireEvent.click(screen.getByText('Time To Escape!'))
  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
})