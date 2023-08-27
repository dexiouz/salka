import React from 'react';
import Box from '../Box';
import {IS_ANDROID, SPACE_LARGE, SPACE_SMALL} from '../../constants/Layouts';
import {useNavigation, useTheme} from '@react-navigation/native';
import CustomIcon from '../CustomIcon/CustomIcon';
import Subtitle from '../Subtitle/Subtitle';
import Touchable from '../Touchable';
import {ROUTES} from '../../constants';
import {Image, StyleSheet} from 'react-native';
import images from '../../assets/images';

const SearchPlaceHolder = ({
  width,
  text,
  borderRadius,
  isLocation,
  ...restProps
}) => {
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  return (
    <Touchable
      height={60}
      width={width || '100%'}
      selfCenter
      mt={SPACE_SMALL}
      mb={SPACE_LARGE}
      onPress={() => navigate(ROUTES.YOUR_SERVICE)}
      row
      vCenter
      ph={10}
      borderColor={colors.inputBorder}
      borderWidth={0.5}
      borderRadius={borderRadius || 8}
      backgroundColor={colors.input}
      {...restProps}>
      {isLocation ? (
        <Image
          source={images.locationIcon}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <CustomIcon
          iconFamily="AntDesign"
          name="search1"
          size={20}
          color={colors.lightDark}
        />
      )}
      <Subtitle color={isLocation ? colors.primary : colors.label} ml={10}>
        {text || 'Search...'}
      </Subtitle>
    </Touchable>
  );
};

export default SearchPlaceHolder;
const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    bottom: IS_ANDROID ? -2 : 0,
  },
});
