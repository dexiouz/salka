import { StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

const Subtitle2 = ({ children, style, ...restProps }) => {
  return (
    <AppText
      size={19}
      fontWeight="600"
      flexWrap={"wrap"}
      customTextStyle={style}
      {...restProps}
    >
      {children}
    </AppText>
  );
};

export default Subtitle2;

const styles = StyleSheet.create({});
