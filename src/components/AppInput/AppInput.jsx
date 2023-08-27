import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {useTheme} from '@react-navigation/native';
import Box from '../Box';
import CustomIcon from '../CustomIcon/CustomIcon';
import Touchable from '../Touchable';

const AppInput = ({
  label,
  onEndEndEditing,
  value,
  onChangeText,
  textInput,
  containerStyle,
  labelStyle,
  textInputColor,
  onPress,
  height,
  mt,
  secureTextEntry,
  showPhoneBox,
  dialCode,
  absolute,
  top,
  bottom,
  left,
  right,
  pAll,
  pv,
  ph,
  pl,
  pt,
  pr,
  pb,
  placeholder,
  backgroundColor,
  showPassword,
  editable,
  others,
}) => {
  const {colors} = useTheme();
  return (
    <Pressable
      style={[
        !!absolute && {position: 'absolute'},
        (!!top || top === 0) && {top},
        (!!bottom || bottom === 0) && {bottom},
        (!!left || left === 0) && {left},
        (!!right || right === 0) && {right},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        styles.inputContainer,
        {
          backgroundColor: backgroundColor || colors.input,
          borderWidth: 1,
          borderColor: colors.inputBorder,
        },
        !!height && {height},
        !!mt && {marginTop: mt},
        !!pv && {paddingVertical: pv},
        containerStyle,
      ]}
      onPress={onPress}>
      <Box row width={'100%'}>
        <TextInput
          color={textInputColor || colors.text}
          placeholder={placeholder}
          value={value}
          style={[
            styles.textInput,
            {width: onChangeText ? '85%' : '100%'},
            textInput,
          ]}
          onEndEndEditing={onEndEndEditing}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onPressIn={onPress}
          editable={editable}
          {...others}
        />
        {!!onChangeText && !!showPassword && (
          <Touchable onPress={showPassword} center width="15%">
            <CustomIcon
              iconFamily={'Feather'}
              name={secureTextEntry ? 'eye' : 'eye-off'}
              size={20}
              color={colors.label}
            />
          </Touchable>
        )}
      </Box>
    </Pressable>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 7,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 21,
  },
  textInput: {
    height: 65,
    padding: 0,
  },
});
