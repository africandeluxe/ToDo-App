import { fireEvent, render, screen } from '@testing-library/react';
import Home from './page'

describe("test all functionality works", () => {
    test("Add new Tasks works correctly", () => {
        render(<Home />)
        const mockTask = "Study TypeScript"

        let userInput = screen.getByLabelText("Enter a new task below")
        const addTaskButton = screen.getByTestId("add-button")
        let taskItems = screen.queryAllByTestId("task-item")

        expect(taskItems.length).toBe(3)

        fireEvent.change(userInput, { target: { value: mockTask } })

        fireEvent.click(addTaskButton);

        taskItems = screen.queryAllByTestId("task-item")

        expect(taskItems.length).toBe(4)

        expect(taskItems[3]).toHaveTextContent("Study TypeScript")
    })
})