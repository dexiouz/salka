import {StyleSheet, Image} from 'react-native';
import React from 'react';
import Touchable from '../Touchable';
import images from '../../assets/images';
import {useNavigation, useTheme} from '@react-navigation/native';
import Box from '../Box';

const CustomDrawerNavigationIcon = ({bgColor}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <Touchable
      onPress={() => navigation.openDrawer()}
      width={60}
      height={50}
      hCenter
      backgroundColor={colors.bgColor}>
      <Box width={26} height={2.5} backgroundColor={bgColor || colors.text} />
      <Box
        width={15}
        height={2.5}
        mt={5}
        backgroundColor={bgColor || colors.text}
      />
    </Touchable>
  );
};

export default CustomDrawerNavigationIcon;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
