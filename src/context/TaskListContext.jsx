import React,{ createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: "Read the book", id: 1},
        {title: "Write some Code!", id: 2},
        {title: "Write some stuffs", id: 3},
    ])

    const addTask = (title) => {
        setTasks([...tasks, {title, id: 5}]);
        
    }
    return <TaskListContext.Provider value={{tasks,  addTask}}>{props.children}</TaskListContext.Provider>
};

export default TaskListContextProvider;