import { TaskType } from "@/utils/types";

const Task = ({ id, description }: TaskType) => {
  return (
    <div className="flex gap-4 my-2" key={id} data-testid="task-item">
      <div className="basis-4/5 p-4 bg-white">{description}</div>
      <button className="basis-1/5 p-4 bg-white text-red-800 text-2xl font-bold" data-testid="delete-task">X</button>
    </div>
  )
}

export default Task;