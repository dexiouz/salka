import React, { useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import { SPACE_LARGE } from "../../constants/Layouts";
import { wp } from "../../utils/getResponsiveSize";

const Touchable = ({
  animated,
  shadow,
  lightShadow,
  darkShadow,
  children,
  center,
  vCenter,
  hCenter,
  selfCenter,
  spaceBetween,
  spaceEven,
  flex,
  flexGrow,
  flexWrap,
  row,
  column,
  flexEnd,
  mAll,
  mt,
  mb,
  mh,
  mv,
  ml,
  mr,
  pAll,
  pv,
  ph,
  pl,
  pt,
  pr,
  pb,
  width,
  minWidth,
  minHeight,
  height,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomColor,
  borderBottomWidth,
  justifyContent,
  alignItems,
  backgroundColor,
  aspectRatio,
  borderWidth,
  borderColor,
  absolute,
  top,
  bottom,
  left,
  right,
  opacity,
  zIndex,
  style,
  onPress,
  activeOpacity,
  scroll,
  hGradient,
  vGradient,
  gradientColors,
  gradientStartBalance,
  gradientEndBalance,
  disabled,
  overflow,
  fadeIn,
  fadeInTime,
  fadeInDelay,
  slideIn,
  slideInTime,
  slideInDelay,
  restProps,
}) => {
  const fadeOpacity = useRef(new Animated.Value(0)).current;
  const slideValue = useRef(
    new Animated.ValueXY({ x: slideIn ? wp(SPACE_LARGE) : 0, y: 0 })
  ).current;

  useEffect(() => {
    if (fadeIn) {
      setTimeout(() => {
        Animated.timing(fadeOpacity, {
          toValue: opacity || opacity === 0 ? opacity : 1,
          duration: ((fadeInTime || fadeInTime === 0) && fadeInTime) || 750,
          useNativeDriver: true,
        }).start();
      }, fadeInDelay || 0);
    }
  }, [opacity]);

  useEffect(() => {
    if (slideIn) {
      setTimeout(() => {
        Animated.timing(slideValue, {
          toValue: { x: 0, y: 0 },
          duration: ((slideInTime || slideInTime === 0) && slideInTime) || 500,
          useNativeDriver: true,
        }).start();
      }, slideInDelay || 0);
    }
  }, []);

  return (
    <TouchableOpacity
      style={[
        !!flex && { flex: flex === true ? 1 : flex },
        !!flexGrow && { flexGrow: flexGrow === true ? 1 : flexGrow },
        !!flexWrap && { flexWrap },
        center && styles.center,
        hCenter && styles.hCenter,
        vCenter && styles.vCenter,
        selfCenter && styles.selfCenter,
        spaceBetween && styles.spaceBetween,
        spaceEven && styles.spaceEven,
        row && styles.row,
        column && styles.column,
        flexEnd && { flexEnd },
        !!mAll && { margin: mAll },
        !!mt && { marginTop: mt },
        !!mb && { marginBottom: mb },
        !!ml && { marginLeft: ml },
        !!mr && { marginRight: mr },
        !!slideIn && {
          transform: [
            { translateX: slideValue.x },
            { translateY: slideValue.y },
          ],
        },
        !!mh && { marginHorizontal: mh },
        !!mv && { marginVertical: mv },
        !!width && { width },
        !!minWidth && { minWidth },
        !!minHeight && { minHeight },
        !!height && { height },
        !!pAll && { padding: pAll },
        !!ph && { paddingHorizontal: ph },
        !!pv && { paddingVertical: pv },
        !!pl && { paddingLeft: pl },
        !!pt && { paddingTop: pt },
        !!pr && { paddingRight: pr },
        !!pb && { paddingBottom: pb },
        !!justifyContent && { justifyContent },
        !!alignItems && { alignItems },
        !!backgroundColor && { backgroundColor },
        !!aspectRatio && { aspectRatio },
        !!overflow && { overflow },
        !!borderWidth && { borderWidth },
        !!borderBottomWidth && { borderBottomWidth },
        !!borderColor && { borderColor },
        !!borderBottomColor && { borderBottomColor },
        !!borderRadius && { borderRadius },
        !!borderBottomLeftRadius && { borderBottomLeftRadius },
        !!borderBottomRightRadius && { borderBottomRightRadius },
        !!borderTopLeftRadius && { borderTopLeftRadius },
        !!borderTopRightRadius && { borderTopRightRadius },
        !fadeIn && (!!opacity || opacity === 0) && { opacity },
        !!fadeIn && { opacity: fadeOpacity },
        (!!zIndex || zIndex === 0) && { zIndex },
        !!absolute && { position: "absolute" },
        (!!top || top === 0) && { top },
        (!!bottom || bottom === 0) && { bottom },
        (!!left || left === 0) && { left },
        (!!right || right === 0) && { right },
        !!disabled && { opacity: 0.5 },
        // IS_ANDROID &&
        //   (shadow || lightShadow) &&
        //   !animated &&
        //   SHADOW('android', backgroundColor, {}),
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  center: { justifyContent: "center", alignItems: "center" },
  hCenter: { justifyContent: "center" },
  vCenter: { alignItems: "center" },
  selfCenter: { alignSelf: "center" },
  spaceBetween: { justifyContent: "space-between" },
  spaceEven: { justifyContent: "space-evenly" },
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});

export default Touchable;
