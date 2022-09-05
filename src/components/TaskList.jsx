import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
  return (
    <ul className='list'>
        {
            tasks?.map((task)  => {
                return <Task title={task.title} key={task.id}/>
            })
        }
    </ul>
  )
}

export default TaskList;