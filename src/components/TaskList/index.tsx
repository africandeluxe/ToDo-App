import { TaskType } from "@/utils/types";
import Task from "../Task";

type TaskListProps = {
  taskItems: TaskType[] | null
}

const TaskList = ({taskItems}:TaskListProps) => {
    return (
      <div className="bg-green-700 p-6 my-4" data-testid="task-list"> 
        {taskItems && taskItems.map(item => <Task {...item}/> )}
      </div>
  )
}

export default TaskList;