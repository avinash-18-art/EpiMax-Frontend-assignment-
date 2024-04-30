import React from 'react'
import {PieChart} from 'react-minimal-pie-chart'

const TaskSummary = ({tasks}) => {
  const data = tasks.map(task => ({
    title: task.status,
    value: task.count,
    color: task.color,
  }))

  return (
    <div>
      <h1>Task Summary</h1>
      <PieChart data={data} />
    </div>
  )
}

export default TaskSummary
