import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Loader from '../Loader';
import AppText from '../AppText/AppText';
import Box from '../Box';
import CustomIcon from '../CustomIcon/CustomIcon';

const AppSearchInput = ({
  width,
  loading,
  editable,
  clicked,
  value,
  onChangeText,
  setCLicked,
  onPress,
  style,
  searchText,
  label,
  labelStyle,
  placeholder,
  searchStyle,
  onFocus,
  borderRadius,
  textInputProps,
  textInputStyles,
  ...restprops
}) => {
  const {colors} = useTheme();
  return (
    <Box
      pt={4}
      center
      borderRadius={borderRadius || 8}
      style={[
        styles.container,
        {backgroundColor: colors.input, borderColor: colors.inputBorder},
        style,
      ]}
      {...restprops}>
      <Box
        row
        width={'100%'}
        justifyContent={'space-between'}
        height={55}
        alignItems={'center'}
        alignSelf="center">
        <TextInput
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholder={placeholder || 'Search...'}
          style={[styles.inputContainer, textInputStyles, {color: colors.text}]}
          {...textInputProps}
        />
        {loading ? (
          <Loader size={'small'} />
        ) : (
          <TouchableOpacity
            onPress={onPress}
            style={{width: searchText ? '22%' : '8%'}}>
            {searchText ? (
              <Box
                pAll={5}
                ph={10}
                borderRadius={4}
                backgroundColor={colors.primary}
                style={[searchStyle]}>
                <AppText white Bold>
                  {searchText || 'Search'}
                </AppText>
              </Box>
            ) : (
              <>
                {loading ? (
                  <Loader />
                ) : (
                  <CustomIcon
                    iconFamily="AntDesign"
                    name="search1"
                    size={20}
                    color={colors.lightDark}
                  />
                )}
              </>
            )}
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  );
};

export default AppSearchInput;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
  inputContainer: {
    width: '90%',
    height: '100%',
    fontWeight: 'bold',

    // backgroundColor: 'red',
  },
  searchIcon: {},
  labelText: {
    fontSize: 12,
    fontFamily: 'Satoshi-Medium',
  },
});
