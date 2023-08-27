import {SafeAreaView, ScrollView, StyleSheet, scroll} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Box from '../Box';
import {SPACE_LARGE, SPACE_SMALL} from '../../constants/Layouts';
import AppStatusBar from '../AppStatusBar/AppStatusBar';

const AppWrapper = ({children, style, childStyle, ...restProps}) => {
  const {colors} = useTheme();
  const Component = scroll ? ScrollView : Box;
  return (
    <SafeAreaView
      style={[styles.container, style, {backgroundColor: colors.bgColor}]}>
      <AppStatusBar />

      <Component
        showsVerticalScrollIndicator={false}
        {...restProps}
        style={[styles.wrapper, childStyle]}>
        {children}
      </Component>
    </SafeAreaView>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: SPACE_LARGE,
    marginVertical: SPACE_SMALL,
  },
});
