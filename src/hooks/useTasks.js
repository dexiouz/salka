import React, {useContext, useEffect, useState} from 'react';
import showMessage, {type} from '../utils/showMessage';
import {TaskContext} from '../context/TaskContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from './useAuth/useAuth';

/** 
This hook handles every thing about tasks
**/
const useTasks = refRBSheet => {
  const {signIn, signOut} = useAuth();
  const {tasks, setTasks} = useContext(TaskContext);
  const [editTask, setEditTask] = useState({});
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const openSheet = () => refRBSheet.current.open();
  const closeSheet = () => refRBSheet.current.close();

  useEffect(() => {
    // Fetch tasks from AsyncStorage and set in state
    const fetchData = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks !== null) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    !!refRBSheet && fetchData();
  }, []);

  const persistTasks = async updatedTasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error persisting data:', error);
    }
  };

  const addTask = () => {
    if (!newTaskTitle || !newTaskTitle) {
      showMessage(type.ERROR, 'Please add both task title and description.');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: newTaskDescription,
      created: Date.now(),
      completed: false,
    };

    if (editTask.id) {
      // Editing existing task
      const updatedTasks = tasks.map(task =>
        task.id === editTask.id
          ? {...task, title: newTaskTitle, description: newTaskDescription}
          : task,
      );
      setTasks(updatedTasks);
      persistTasks(updatedTasks);
      setEditTask({});
    } else {
      if (newTaskTitle.trim() !== '') {
        persistTasks([...tasks, newTask]);
        setTasks([newTask, ...tasks]);
        setNewTaskTitle('');
        setNewTaskDescription('');
        closeSheet();
      }
    }
  };

  const toggleTaskCompletion = taskId => {
    const updatedTasks = tasks?.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    );

    setTasks(updatedTasks);
    persistTasks(updatedTasks);
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    persistTasks(updatedTasks);
  };

  const handleEdit = task => {
    setEditTask(task);
    setNewTaskTitle(task.title);
    setNewTaskDescription(task.description);
    openSheet();
  };

  return {
    addTask,
    newTaskTitle,
    newTaskDescription,
    setNewTaskTitle,
    setNewTaskDescription,
    openSheet,
    closeSheet,
    tasks,
    toggleTaskCompletion,
    deleteTask,
    editTask,
    handleEdit,
  };
};

export default useTasks;
