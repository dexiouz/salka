/* eslint-disable prettier/prettier */
import React, {useState, createContext} from 'react';
export const TaskContext = createContext(null);
const {Provider} = TaskContext;

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  return <Provider value={{tasks, setTasks}}>{children}</Provider>;
};

export default TaskProvider;
