import { render, screen } from '@testing-library/react'
import TaskList from '.'
import { startTasks } from '@/utils/defaultTasks';

describe("The Task List is rendered correctly", () => {
  it("Checks the task list container is rendered", () => {
    render(<TaskList taskItems={startTasks} />)

    let taskList = screen.getByTestId("task-list")

    expect(taskList).toBeInTheDocument()
  })

  it("Checks that 3 default tasks are rendered", () => {
    render(<TaskList taskItems={startTasks} />)

    const defaultTasks = screen.queryAllByTestId("task-item")

    expect(defaultTasks.length).toBe(3)
  })

  it("Checks that the second default task has a specific title", () => {
    render(<TaskList taskItems={startTasks} />)

    const defaultTasks = screen.queryAllByTestId("task-item")

    expect(defaultTasks[1]).toHaveTextContent("Hand in assignments")
  })
})