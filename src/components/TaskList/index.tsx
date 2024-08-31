'use client'

import { TaskType } from "@/utils/types";
import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import Task from "../Task";


const defaultTasks:TaskType[] = [
    {
      id: uuid(),
      description: "Go to the gym"
    },
    {
      id: uuid(),
      description: "Hand in assignments"
    },
    {
      id: uuid(),
      description: "Water the plants"
    }
]

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskType[] | null>(null)
  
  useEffect(() => {
    setTasks(defaultTasks)
  }, [])

    return (
      <div className="bg-green-700 p-6 my-4" data-testid="task-list"> 
        {tasks && tasks.map(item => <div key={item.id} data-testid="task-item">{item.description}</div>)}
      </div>
  )
}

export default TaskList;