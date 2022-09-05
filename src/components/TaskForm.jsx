import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title)
        } else {
            setTitle('');
        }
    }, [editItem])
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
               {editItem === null ? 'Add Task': 'Edit Task'}
            </button>
            <button onClick={() => clearList()} className='btn clear-btn'>
                Clear
            </button>
         </div>
    </form>
  )
}

export default TaskForm