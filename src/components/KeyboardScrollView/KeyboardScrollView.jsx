import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SPACE_LARGE, SPACE_MEDIUM} from '../../constants/Layouts';

const KeyboardScrollView = ({
  children,
  contentContainer,
  style,
  refreshControl,
  ...restProps
}) => {
  return (
    <KeyboardAwareScrollView
      refreshControl={refreshControl}
      style={[styles.wrapper, style]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.contentContainer, contentContainer]}
      enableOnAndroid
      {...restProps}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardScrollView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // height: "90%",
  },
});
