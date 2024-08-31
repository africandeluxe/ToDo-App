import { render, screen } from '@testing-library/react'
import TaskList from '.'

describe("The Task List is rendered correctly", () => {
  it("Checks the task list container is rendered", () => {
    render(<TaskList />)

    let taskList = screen.getByTestId("task-list")

    expect(taskList).toBeInTheDocument()
  })

  it("Checks that 3 default tasks are rendered", () => {
    render(<TaskList />)

    const defaultTasks = screen.queryAllByTestId("task-item")

    expect(defaultTasks.length).toBe(3)
  })

  it("Checks that the second default task has a specifik title", () => {
    render(<TaskList />)

    const defaultTasks = screen.queryAllByTestId("task-item")

    expect(defaultTasks[1]).toHaveTextContent("Hand in assignments")
  })
})