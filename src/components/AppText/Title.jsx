import {StyleSheet} from 'react-native';
import React from 'react';
import AppText from './AppText';

const Title = ({children, style, ...restProps}) => {
  return (
    <AppText
      size={30}
      fontWeight="600"
      flexWrap={'wrap'}
      customTextStyle={style}
      {...restProps}>
      {children}
    </AppText>
  );
};

export default Title;
