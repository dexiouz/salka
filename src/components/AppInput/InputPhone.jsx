import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import AppText from '../AppText/AppText';
import {SPACE_LARGE} from '../../constants/Layouts';
import Box from '../Box';

const InputPhone = ({
  phoneInputRef,
  value,
  onChangeText,
  countryAppCode,
  onChangeFormattedText,
  autoFocus,
  valid,
  setValid,
}) => {
  const {colors} = useTheme();

  useEffect(() => {
    const checkValid = phoneInputRef.current.isValidNumber(value);
    console.log(checkValid);
    setValid(checkValid ? checkValid : false);
  }, [value]);

  return (
    <Box mb={SPACE_LARGE}>
      <PhoneInput
        placeholder="Phone Number"
        ref={phoneInputRef}
        defaultValue={value}
        defaultCode={countryAppCode}
        layout="first"
        textInputProps={{
          color: colors.text,
        }}
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedText}
        // countryPickerProps={{
        //   withAlphaFilter: false,
        //   renderCountryFilter: ({renderCountryFilter}) => console.log(p, ';'),
        // }}
        // preferredCountries={['BH', 'BD']}
        containerStyle={[
          styles.containerStyle,
          {
            backgroundColor: colors.input,
            borderColor: colors.inputBorder,
          },
        ]}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={[styles.codeTextStyle, {color: colors.text}]}
        textContainerStyle={[
          styles.textContainerStyle,
          {backgroundColor: colors.input},
        ]}
        withDarkTheme
        autoFocus={autoFocus}
      />
      {value && !valid && (
        <AppText top={7} color={colors.red}>
          Enter valid number
        </AppText>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  textInputStyle: {
    fontSize: 14,
    padding: 0,
  },
  codeTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  textContainerStyle: {
    height: 67,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default InputPhone;
