import {render, screen} from "@testing-library/react"
import Subtitle from "."

test("The subtitle is rendered correctly", () => {
  const mockData:string = "Mock Subtitle Value"
  render(<Subtitle text={mockData} />)

  const subtitleText = screen.getByRole("heading", {level:3, name: mockData})
  expect(subtitleText).toBeInTheDocument();
})