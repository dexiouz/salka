import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {IS_DARK} from '../../constants/Layouts';

const AppStatusBar = ({
  backgroundColor,
  barStyle,
  barStyleLightContent,
  barStyleDarkContent,
}) => {
  const {colors} = useTheme();
  return (
    <StatusBar
      animated={true}
      backgroundColor={backgroundColor || colors.bgColor}
      barStyle={
        barStyle || IS_DARK
          ? barStyleLightContent || 'light-content'
          : barStyleDarkContent || 'dark-content'
      }
    />
  );
};

export default AppStatusBar;

const styles = StyleSheet.create({});
