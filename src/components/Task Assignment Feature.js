import React, {useState} from 'react'

const TaskAssignment = ({task, users}) => {
  const [selectedUser, setSelectedUser] = useState('')

  const handleAssignTask = () => {
    assignTaskToUser(task.id, selectedUser)
  }

  return (
    <div>
      <select
        value={selectedUser}
        onChange={e => setSelectedUser(e.target.value)}
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssignTask}>Assign Task</button>
    </div>
  )
}

export default TaskAssignment
