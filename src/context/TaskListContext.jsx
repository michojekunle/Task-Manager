import React,{ createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {task: "Read the book", id: 1},
        {task: "Write some Code!", id: 2},
        {task: "Write some stuffs", id: 3},
    ])
    return <TaskListContext.Provider value={tasks}>{props.children}</TaskListContext.Provider>
};

export default TaskListContextProvider;