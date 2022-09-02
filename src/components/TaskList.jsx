import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    alert(tasks);
  return (
    <ul className='lists'>
        {
            tasks?.map((task)  => {
                return <Task />
            })
        }
    </ul>
  )
}

export default TaskList