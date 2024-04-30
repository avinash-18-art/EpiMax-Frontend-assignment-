import React from 'react'

const TaskStatusUpdate = ({task}) => {
  const updateStatus = newStatus => {
    changeTaskStatus(task.id, newStatus)
  }

  return (
    <div>
      <button onClick={() => updateStatus('started')}>Start Task</button>
      <button onClick={() => updateStatus('ended')}>End Task</button>
      <button onClick={() => updateStatus('completed')}>Complete Task</button>
    </div>
  )
}

export default TaskStatusUpdate
