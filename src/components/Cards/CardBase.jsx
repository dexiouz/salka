import React from 'react';
import Touchable from '../Touchable';
import {SPACE_LARGE, SPACE_MEDIUM, SPACE_SMALL} from '../../constants/Layouts';
import SHADOW from '../SHADOW/SHADOW';

const CardBase = ({
  children,
  width,
  backgroundColor,
  onPress,
  style,
  ...restProps
}) => {
  return (
    <Touchable
      onPress={onPress}
      width={width || '100%'}
      selfCenter
      mb={SPACE_LARGE}
      borderRadius={SPACE_MEDIUM}
      style={[SHADOW.card, {padding: SPACE_SMALL}, style]}
      {...restProps}>
      {children}
    </Touchable>
  );
};

export default CardBase;
