'use client'

import { useState, useEffect } from 'react'
import Header from "@/components/Header";
import NewTask from "@/components/NewTask";
import TaskList from "@/components/TaskList";
import USPs from "@/components/USPs";
import { startTasks } from '@/utils/defaultTasks'
import { TaskType } from '@/utils/types';

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[] | null>(null)

  const addTask = (newTask: TaskType) => {
    if (tasks)
      setTasks([...tasks, newTask])
  }

  useEffect(() => {
    setTasks(startTasks)
  }, [])

  return (
    <>
      <Header />
      <USPs />
      <TaskList taskItems={tasks} />
      <NewTask updateFunction={addTask} />
    </>
  );
}