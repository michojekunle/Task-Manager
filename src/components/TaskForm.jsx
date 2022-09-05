import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input type="text"
            className='task-input'
            placeholder='Add Task'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
         />
         <div className="buttons">
            <button type="submit" className='btn add-task-btn'>
                Add Task
            </button>
            <button className='btn clear-btn'>
                Clear
            </button>
         </div>
    </form>
  )
}

export default TaskForm