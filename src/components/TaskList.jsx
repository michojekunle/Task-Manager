import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
  return (
    <ul className='list'>
        { tasks.length ?
            (
              tasks?.map((task)  => {
                return <Task task={task} key={task.id}/>
              })
            ):
            (
              <div className='no-tasks'>
                No Tasks
              </div>
            )
        }
    </ul>
  )
}

export default TaskList;