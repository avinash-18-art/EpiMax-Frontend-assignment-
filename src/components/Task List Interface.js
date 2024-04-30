import React, {useState} from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
      <button
        onClick={() => {
          /* logic to add new task */
        }}
      >
        Add New Task
      </button>
    </div>
  )
}

export default TaskList
