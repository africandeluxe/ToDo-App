import {fireEvent, render, screen} from '@testing-library/react'
import NewTask from '.'

describe("New Task functionality works as expected", () => {
    test("Checks the input field and button are rendered", () => {
        render(<NewTask />)

        const userInput = screen.getByLabelText("Enter a new task below")

        const button = screen.getByRole('button');

        expect(userInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    test("user input is saved in state", () => {
        render(<NewTask />
    )
        const mockTask = "Feed the fish"
        let userInput = screen.getByLabelText("Enter a new task below")

        expect((userInput as HTMLInputElement).value).toBe('')

        fireEvent.change(userInput, {target: {value: mockTask}})

        userInput = screen.getByLabelText("Enter a new task below")
        expect((userInput as HTMLInputElement).value).toBe(mockTask)
    })
})