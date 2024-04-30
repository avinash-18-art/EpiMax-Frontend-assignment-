import React, {useState} from 'react'

const TaskCreationForm = () => {
  const [taskName, setTaskName] = useState('')
  const [error, setError] = useState('')

  const handleAddTask = () => {
    if (!taskName) {
      setError('Task name is required')
      return
    }

    addTask(taskName)
    setTaskName('')
    setError('')
  }

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskCreationForm
