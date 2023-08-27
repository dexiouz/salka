import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTheme} from '@react-navigation/native';
import AppText from '../AppText/AppText';
import CustomIcon from '../CustomIcon/CustomIcon';

const AppDatePicker = ({
  onPress,
  selected,
  label,
  visible,
  setVisibile,
  dateFunction,
  birth,
}) => {
  const {colors} = useTheme();
  const [date, setDate] = useState(birth);

  const hideDatePicker = () => {
    setVisibile(false);
  };

  const handleConfirm = date => {
    // setUserData({
    //   ...userData,
    //   birthDate: date,
    // });
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 101).toString().substring(1);
    let day = (date.getDate() + 100).toString().substring(1);
    setDate(day + '-' + month + '-' + year);
    dateFunction(date);
    // setActiveDate((new Date(year + "-" + month + "-" + day)).toISOString())
    hideDatePicker();
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: colors.input,
            borderColor: colors.inputBorder,
            borderWidth: 1,
          },
        ]}
        onPress={onPress}>
        <View>
          <AppText>{label}</AppText>
          <AppText customTextStyle={styles.selectedText}>{date}</AppText>
        </View>
        <CustomIcon iconFamily="AntDesign" name="down" size={18} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default AppDatePicker;

const styles = StyleSheet.create({
  container: {
    height: 67,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 15,
    fontFamily: 'Sora-Bold',
    marginTop: 5,
  },
});
