import React from 'react';
import {StyleSheet, Text, TextStyle, TextProps} from 'react-native';

import {hp} from '../../utils/getResponsiveSize';
import theme from '../../constants/theme';
import {useTheme} from '@react-navigation/native';

const AppText = ({
  bold2,
  mAll = 0,
  mt = 0,
  mb = 0,
  mh = 0,
  mv = 0,
  ml = 0,
  mr = 0,
  pAll = 0,
  pv = 0,
  ph = 0,
  pl = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  top,
  bottom,
  weight,
  white,
  light = false,
  medium = false,
  bold = false,
  bold6 = false,
  bold5 = false,
  title = false,
  caps = false,
  subTitle = false,
  small = false,
  green = false,
  semiBold = false,
  center = false,
  left = false,
  right = false,
  color = null,
  size = null,
  fontWeight,
  lineThrough = false,
  numberOfLines = 0,
  startCase = false,
  upperCase = false,
  capitalize = false,
  underline = false,
  allowFontScaling = true,
  italic = false,
  customTextStyle,
  style,
  adjustsFontSizeToFit = false,
  children = null,
  familyRegular = '',
  familyMedium = '',
  familyBold = '',
  onPress,
  flexWrap,
  ...restProps
}) => {
  const {colors} = useTheme();
  const textStyle = {};
  let content = children;
  return (
    <Text
      {...restProps}
      onPress={onPress}
      style={[
        {color: colors.text, fontFamily: 'Sora-Regular'},

        textStyle,
        !!weight && {fontWeight: weight},
        !!familyRegular && {fontFamily: 'Sora-Regular'},
        !!familyMedium && {fontFamily: 'Sora-Medium'},
        !!familyBold && {fontFamily: 'Sora-Bold'},
        !!white && {color: theme.commonColors.colors.white},
        !!mAll && {margin: mAll},
        !!top && {top},
        !!flexWrap && {flexWrap},
        !!bottom && {bottom},
        !!mt && {marginTop: mt},
        !!mb && {marginBottom: mb},
        !!ml && {marginLeft: ml},
        !!mr && {marginRight: mr},
        !!mh && {marginHorizontal: mh},
        !!mv && {marginVertical: mv},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        !!size && {fontSize: size},
        !!center && {textAlign: 'center'},
        !!left && {textAlign: 'left'},
        !!right && {textAlign: 'right'},
        !!capitalize && {textTransform: 'capitalize'},
        (caps || upperCase) && {textTransform: 'uppercase'},
        !!underline && {textDecorationLine: 'underline'},
        !!lineThrough && {
          textDecorationLine: 'line-through',
          textDecorationStyle: 'solid',
        },
        !!color && {color},
        !!title && {fontSize: hp(24), fontWeight: 'bold'},
        !!subTitle && {fontSize: hp(20)},
        !!small && {fontSize: hp(14)},
        !!bold && {fontWeight: 'bold'},
        !!bold2 && {fontWeight: '600'},
        !!bold6 && {fontWeight: '600'},
        !!bold5 && {fontWeight: '500'},
        !!semiBold && {fontWeight: '400'},
        !!italic && {fontStyle: 'italic'},
        !!fontWeight && {fontWeight},
        customTextStyle && customTextStyle,
        style && style,
        // font
      ]}
      numberOfLines={numberOfLines}
      allowFontScaling={numberOfLines === 1 ? true : allowFontScaling}
      adjustsFontSizeToFit={numberOfLines === 1 ? true : adjustsFontSizeToFit}>
      {content}
    </Text>
  );
};

AppText.defaultProps = {
  mAll: 0,
  mt: 0,
  mb: 0,
  mh: 0,
  mv: 0,
  ml: 0,
  mr: 0,
  pAll: 0,
  pv: 0,
  ph: 0,
  pl: 0,
  pt: 0,
  pr: 0,
  pb: 0,
  light: false,
  medium: false,
  bold: false,
  title: false,
  caps: false,
  subTitle: false,
  small: false,
  green: false,
  semiBold: false,
  center: false,
  left: false,
  right: false,
  color: null,
  size: null,
  lineThrough: false,
  numberOfLines: 0,
  startCase: false,
  upperCase: false,
  capitalize: false,
  underline: false,
  allowFontScaling: true,
  style: null,
  adjustsFontSizeToFit: false,
  children: null,
};

const styles = StyleSheet.create({
  default: {
    // fontSize: IS_SHORT_DEVICE ? hp(14) : hp(16),
    // color: "red",
  },
});

export default AppText;
