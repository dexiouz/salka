import {StyleSheet} from 'react-native';
import React from 'react';
import Touchable from '../Touchable';
import {useNavigation, useTheme} from '@react-navigation/native';
import Box from '../Box';
import CustomIcon from '../CustomIcon/CustomIcon';

const CustomHeaderLeft = ({onPress, style, ...restProps}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const goback = () => navigation.goBack();
  return (
    <Touchable
      style={[styles.button_icon, {borderColor: colors.inputBorder}, style]}
      left={3}
      onPress={onPress || goback}
      {...restProps}>
      <Box row center>
        <CustomIcon
          iconFamily={'Ionicons'}
          name="arrow-back"
          size={20}
          color={colors.primary}
        />
      </Box>
    </Touchable>
  );
};

export default CustomHeaderLeft;
const styles = StyleSheet.create({
  button_icon: {
    height: 40,
    width: 70,
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
