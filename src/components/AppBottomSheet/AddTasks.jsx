import React from 'react';
import AppBottomSheet from './AppBottomSheet';
import Box from '../Box';
import {SPACE_LARGE, SPACE_SMALL} from '../../constants/Layouts';
import AppInput from '../AppInput/AppInput';
import AppBtn from '../AppBtn/AppBtn';
import Title from '../AppText/Title';
import useTasks from '../../hooks/useTasks';

const AddTasks = ({refRBSheet, height}) => {
  const {
    addTask,
    newTaskTitle,
    newTaskDescription,
    setNewTaskTitle,
    setNewTaskDescription,
    editTask,
  } = useTasks(refRBSheet);

  return (
    <AppBottomSheet refRBSheet={refRBSheet} height={height}>
      <Box ph={SPACE_SMALL}>
        <Title center mv={SPACE_LARGE}>
          Add New Task
        </Title>
        <AppInput
          placeholder="Title"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
        />
        <AppInput
          placeholder="Description"
          value={newTaskDescription}
          onChangeText={setNewTaskDescription}
        />
        <AppBtn title="Add Task" onPress={addTask} />
      </Box>
    </AppBottomSheet>
  );
};

export default AddTasks;
