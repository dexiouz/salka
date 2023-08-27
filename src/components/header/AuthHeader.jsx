import {StyleSheet, Image} from 'react-native';
import React from 'react';
import Box from '../Box';
import Title from '../AppText/Title';
import Subtitle from '../Subtitle/Subtitle';
import {SPACE_LARGE, SPACE_MEDIUM} from '../../constants/Layouts';

const AuthHeader = ({title, subtitle, image, ...restProps}) => {
  return (
    <Box mb={SPACE_LARGE} {...restProps}>
      <Title mt={SPACE_MEDIUM}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Box>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  logo: {
    height: 45,
    width: 45,
    borderRadius: 10,
  },
});
