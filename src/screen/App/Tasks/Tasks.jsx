import React, {useRef} from 'react';
import {FlatList, Alert} from 'react-native';
import AppWrapper from '../../../components/AppWrapper/AppWrapper';
import Box from '../../../components/Box';
import AppText from '../../../components/AppText/AppText';
import AppBtn from '../../../components/AppBtn/AppBtn';
import {
  SCREEN_HEIGHT,
  SPACE_LARGE,
  SPACE_SMALL,
  SPACE_XXLARGE,
} from '../../../constants/Layouts';
import AddTasks from '../../../components/AppBottomSheet/AddTasks';
import Subtitle from '../../../components/Subtitle/Subtitle';
import useTasks from '../../../hooks/useTasks';
import TaskCard from '../../../components/Cards/TaskCard';
import Touchable from '../../../components/Touchable';
import useAuth from '../../../hooks/useAuth/useAuth';

// To do:
// - Ability to edit tasks
const TaskManager = () => {
  const refRBSheet = useRef();
  const {tasks, openSheet} = useTasks(refRBSheet);
  const {handleSignOut} = useAuth();
  const showAlert = () => {
    Alert.alert(
      'Log out',
      `Are you sure you want to log out? \n This will clear all your saved tasks.`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: handleSignOut,
        },
      ],
    );
  };
  return (
    <AppWrapper>
      <Box ph={SPACE_SMALL} mt={SPACE_XXLARGE}>
        <Box row spaceBetween center>
          <AppText size={24} bold mb={SPACE_LARGE}>
            Task Manager
          </AppText>
          <Touchable onPress={showAlert}>
            <AppText>Log out</AppText>
          </Touchable>
        </Box>
        <AppBtn title="Add Task" onPress={openSheet} />

        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <TaskCard item={item} refRBSheet={refRBSheet} />
          )}
          keyExtractor={item => item.id}
          style={{marginTop: SPACE_XXLARGE}}
          ListEmptyComponent={
            <Box flex center height={SCREEN_HEIGHT * 0.6}>
              <Subtitle>Sorry you have no tasks currently.</Subtitle>
            </Box>
          }
        />
      </Box>
      <AddTasks height={SCREEN_HEIGHT * 0.76} refRBSheet={refRBSheet} />
    </AppWrapper>
  );
};

export default TaskManager;
