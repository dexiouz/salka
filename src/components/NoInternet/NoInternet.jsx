import {StyleSheet} from 'react-native';
import React from 'react';
import Box from '../Box';
import AppText from '../AppText/AppText';
import Subtitle from '../Subtitle/Subtitle';
import AppWrapper from '../AppWrapper/AppWrapper';

const NoInternet = () => {
  return (
    <AppWrapper style={styles.container}>
      <Box flex center>
        <Subtitle size={26}>No Internet</Subtitle>
        <AppText bold size={48} top={-18}>
          Connection
        </AppText>
        <Subtitle size={15} center top={-16}>
          Please check your internet connection and try again
        </Subtitle>
      </Box>
    </AppWrapper>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
  },
});
