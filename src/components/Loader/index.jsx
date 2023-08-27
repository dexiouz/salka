import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Box from '../Box';
import {useTheme} from '@react-navigation/native';

const Loader = ({color, size, style, ...restProps}) => {
  const {colors} = useTheme();
  return (
    <Box style={[style]} {...restProps}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || colors.primary}
      />
    </Box>
  );
};
export default Loader;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
