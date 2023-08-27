import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../AppText/AppText";

const ReuseableSelectionBox = ({
  title,
  subTitle,
  onPress,
  mb,
  mh,
  mv,
  mt,
  ml,
  mr,
  flex,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        !!mb && { marginBottom: mb },
        !!flex && { flex: flex === true ? 1 : flex },
        !!mh && { marginHorizontal: mh },
        !!mv && { marginVertical: mv },
        !!mAll && { margin: mAll },
        !!mt && { marginTop: mt },
        !!mb && { marginBottom: mb },
        !!ml && { marginLeft: ml },
        !!mr && { marginRight: mr },
      ]}
    >
      <AppText title semiBold>
        {title}
      </AppText>
      <AppText customTextStyle={styles.customText}>{subTitle}</AppText>
    </TouchableOpacity>
  );
};

export default ReuseableSelectionBox;

const styles = StyleSheet.create({
  customText: {
    width: 230,
    fontSize: 11,
  },
});
