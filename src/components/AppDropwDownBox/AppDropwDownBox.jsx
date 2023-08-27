import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";
import AppText from "../AppText/AppText";
import CustomIcon from "../CustomIcon";
import Touchable from "../Touchable";

const AppDropwDownBox = ({
  onPress,
  selected,
  label,
  mt,
  mb,
  mh,
  mv,
  ml,
  mr,
  backgroundColor,
  style,
  customTextStyle,
  ...restProps
}) => {
  const { colors } = useTheme();

  return (
    <Touchable
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor || colors.input,
          borderColor: colors.inputBorder,
          borderWidth: 1,
        },
        !!mt && { marginTop: mt },
        !!mb && { marginBottom: mb },
        !!ml && { marginLeft: ml },
        !!mr && { marginRight: mr },
        !!mh && { marginHorizontal: mh },
        !!mv && { marginVertical: mv },
        style,
      ]}
      onPress={onPress}
      {...restProps}
    >
      <View>
        <AppText customTextStyle={customTextStyle}>{label}</AppText>
        <AppText customTextStyle={styles.selectedText}>{selected}</AppText>
      </View>
      <CustomIcon iconFamily="AntDesign" name="down" size={18} />
    </Touchable>
  );
};

export default AppDropwDownBox;

const styles = StyleSheet.create({
  container: {
    height: 67,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    fontSize: 15,
    fontFamily: "Sora-Bold",
    marginTop: 5,
  },
});
