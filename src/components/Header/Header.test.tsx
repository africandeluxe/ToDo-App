import {render, screen} from '@testing-library/react'
import Header from '.'

test("Renders the Page title", () => {
  render(<Header />)
  
  const headerText = screen.getByText("To Do List")
  
  expect(headerText).toBeInTheDocument()
})

test ("Renders the subtitle component", () => {
  render(<Header />)
  
  const subtitleText = screen.getByRole("heading", {level:3})

  expect(subtitleText).toHaveTextContent("Simplify Your Life");
})
