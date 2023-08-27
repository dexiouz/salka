import {StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import theme from '../../constants/theme';
import {useTheme} from '@react-navigation/native';
import Loader from '../Loader';
import Touchable from '../Touchable';
import {SPACE_XXLARGE} from '../../constants/Layouts';

const AppBtn = ({
  title,
  onPress,
  titleColor,
  customStyle,
  textStyle,
  height,
  color,
  disabled,
  loading,
  absolute,
  top,
  bottom,
  left,
  right,
  width,
  center,
  zIndex,
  pAll,
  pv,
  ph,
  pl,
  pt,
  pr,
  pb,
  mt,
  mb,
  mh,
  mv,
  mAll,
  borderRadius,
  ...restProps
}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      style={[
        styles.btnContainer,
        {backgroundColor: color || colors.primary},
        center && styles.center,
        !!absolute && {position: 'absolute'},
        (!!top || top === 0) && {top},
        (!!bottom || bottom === 0) && {bottom},
        (!!left || left === 0) && {left},
        (!!right || right === 0) && {right},
        !!width && {width},
        (!!zIndex || zIndex === 0) && {zIndex},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        !!borderRadius && {borderRadius},
        customStyle,
        !!height && {height},
        !!disabled && {backgroundColor: colors.disabled},
        !!mt && {marginTop: mt},
        !!mb && {marginBottom: mb},
        !!mv && {marginvertical: mv},
        !!mh && {marginHoriaontal: mh},
        !!mAll && {margin: mAll},
      ]}
      onPress={onPress}
      disabled={disabled}
      {...restProps}>
      {loading ? (
        <Loader color={colors.white} size="small" />
      ) : (
        <AppText
          color={titleColor || theme.commonColors.colors.white}
          customTextStyle={[styles.btnText, textStyle]}>
          {title}
        </AppText>
      )}
    </Touchable>
  );
};

export default AppBtn;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 10,
    width: '100%',
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'Sora-Regular',
    fontWeight: '400',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
