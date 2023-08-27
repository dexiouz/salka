import React from 'react';
import CardBase from './CardBase';
import Box from '../Box';
import AppText from '../AppText/AppText';
import Touchable from '../Touchable';
import CustomIcon from '../CustomIcon/CustomIcon';
import {useTheme} from '@react-navigation/native';
import {SPACE_SMALL} from '../../constants/Layouts';
import useTasks from '../../hooks/useTasks';
import {date5} from '../../utils/dateFormat';
import {Alert} from 'react-native';

const TaskCard = ({item, refRBSheet}) => {
  const {colors} = useTheme();
  const {deleteTask, toggleTaskCompletion} = useTasks(refRBSheet);

  const showDeleteAlert = () => {
    Alert.alert('Delete', `Are you sure you want to delete this task?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => deleteTask(item.id),
      },
    ]);
  };
  return (
    <CardBase
      onPress={() => toggleTaskCompletion(item.id)}
      style={{
        borderColor: item.completed ? colors.primary : colors.bgColor,
        borderWidth: item.completed ? 2 : 0,
      }}>
      <Box row spaceBetween mb={SPACE_SMALL} vCenter>
        <Box flex pAll={SPACE_SMALL}>
          <AppText bold>{item.title}</AppText>
          <AppText mv={SPACE_SMALL}>{item.description}</AppText>
          <AppText size={12}>{date5(item.created)}</AppText>
        </Box>
        <Box>
          {/* <Touchable onPress={edit}>
            <CustomIcon
              iconFamily={'AntDesign'}
              name="edit"
              size={24}
              color={colors.primary}
            />
          </Touchable> */}
          <Touchable onPress={showDeleteAlert}>
            <CustomIcon
              iconFamily={'AntDesign'}
              name="delete"
              size={24}
              color={colors.danger}
            />
          </Touchable>
        </Box>
      </Box>
    </CardBase>
  );
};

export default TaskCard;
