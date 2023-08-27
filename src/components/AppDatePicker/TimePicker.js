import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import AppText from '../AppText/AppText';
import Touchable from '../Touchable';
import {date11} from '../../utils/dateFormat';

const TimePicker = ({value, onPress}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Touchable onPress={() => setOpen(true)} style={{flex: 1}}>
        <AppText>{date11(value)}</AppText>
      </Touchable>
      <DatePicker
        modal
        open={open}
        date={value}
        mode="time"
        onConfirm={date => {
          setOpen(false);
          onPress(date);
        }}
        textColor="#000000"
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default TimePicker;
