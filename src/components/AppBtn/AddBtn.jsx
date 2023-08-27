import React from 'react';
import Touchable from '../Touchable';
import CustomIcon from '../CustomIcon/CustomIcon';
import {useTheme} from '@react-navigation/native';

const AddBtn = ({
  onPress,
  iconSize,
  backgroundColor,
  size = 40,
  borderRadius,
  style,
  iconColor,
  ...restprops
}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      backgroundColor={backgroundColor || colors.primary}
      height={size}
      width={size}
      borderRadius={borderRadius || 5}
      onPress={onPress}
      center
      style={style}
      {...restprops}>
      <CustomIcon
        iconFamily={'AntDesign'}
        name="plus"
        size={iconSize || 24}
        color={iconColor || colors.white}
      />
    </Touchable>
  );
};

export default AddBtn;
