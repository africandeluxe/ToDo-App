import { fireEvent, render, screen } from "@testing-library/react";
import USPS from ".";

describe("The USPs functions as intended", () => {
  test("There are 3 items under USPS", () => {
    render(<USPS />)

    const uspItems = screen.queryAllByRole("listitem")

    expect(uspItems.length).toBe(3)
  })


test("The button hides the USPs", () => {
    render(<USPS />)

    let uspItems = screen.queryAllByRole("listitem") // 3

    expect(uspItems.length).toEqual(3)

    const button = screen.getByRole("button");
      fireEvent.click(button)

      expect(uspItems).not.toEqual(0)
  })

})
