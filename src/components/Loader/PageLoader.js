import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Loader from './index';
import {useTheme} from '@react-navigation/native';

const PageLoader = ({style, color, ...restprops}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[styles.loader, {backgroundColor: colors.bgColor}, style]}>
      <Loader color={color} {...restprops} />
    </SafeAreaView>
  );
};

export default PageLoader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
