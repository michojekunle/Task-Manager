import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const tasks = useContext(TaskListContext);
  return (
    <ul className='lists'>
        {
            tasks?.map((task)  => {
                return <Task title={task.task} key={task.id}/>
            })
        }
    </ul>
  )
}

export default TaskList;