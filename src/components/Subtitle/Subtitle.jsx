import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {useTheme} from '@react-navigation/native';
import {SPACE_SMALL} from '../../constants/Layouts';

const Subtitle = ({children, style, ...restProps}) => {
  const {colors} = useTheme();
  return (
    <AppText
      size={15}
      color={colors.lightDark}
      customTextStyle={[style]}
      {...restProps}>
      {children}
    </AppText>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  detailsText: {
    fontSize: 15,
    marginBottom: 10,
  },
});
