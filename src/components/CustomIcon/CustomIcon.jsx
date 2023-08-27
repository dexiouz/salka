import React from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AppText from "../AppText/AppText";
import { useTheme } from "@react-navigation/native";

const renderIcon = (
  iconFamily,
  name,
  size,
  color,
  label,
  onPress,
  iconStyle,
  containerStyle
) => {
  const { colors } = useTheme();
  if (iconFamily === "Entypo") {
    return (
      <View style={[styles.iconBox, containerStyle]}>
        <Entypo
          name={name}
          size={size}
          color={color || colors?.text}
          style={[iconStyle]}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "FontAwesome") {
    return (
      <View style={[styles.iconBox, containerStyle]}>
        <FontAwesome
          name={name}
          size={size}
          color={color || colors?.text}
          style={[iconStyle]}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "FontAwesome5") {
    return (
      <View style={[styles.iconBox, containerStyle]}>
        <FontAwesome5
          name={name}
          size={size}
          color={color || colors?.text}
          style={[iconStyle]}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "AntDesign") {
    return (
      <View style={styles.iconBox}>
        <AntDesign
          name={name}
          size={size}
          color={color || colors?.text}
          style={iconStyle}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "MaterialIcons") {
    return (
      <View style={styles.iconBox}>
        <MaterialIcons name={name} size={size} color={color || colors?.text} />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "SimpleLineIcons") {
    return (
      <View style={styles.iconBox}>
        <SimpleLineIcons
          name={name}
          size={size}
          color={color || colors?.text}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "MaterialCommunityIcons") {
    return (
      <View style={styles.iconBox}>
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color || colors?.text}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "FontAwesome5Pro") {
    return (
      <View style={styles.iconBox}>
        <FontAwesome5Pro
          name={name}
          size={size}
          color={color || colors?.text}
        />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "Feather") {
    return (
      <View style={styles.iconBox}>
        <Feather name={name} size={size} color={color || colors?.text} />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </View>
    );
  }
  if (iconFamily === "Fontisto") {
    return (
      <>
        <Fontisto name={name} size={size} color={color || colors?.text} />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </>
    );
  }
  if (iconFamily === "EvilIcons") {
    return (
      <>
        <EvilIcons name={name} size={size} color={color || colors?.text} />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </>
    );
  }
  if (iconFamily === "Ionicons") {
    return (
      <>
        <Ionicons name={name} size={size} color={color || colors?.text} />
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </>
    );
  }
};

const CustomIcon = ({
  iconFamily,
  name,
  size,
  color,
  label,
  onPress,
  containerStyle = {},
  padding,
  style,
  iconStyle,
}) => {
  return (
    <View style={{ paddingHorizontal: padding ? 5 : 0, ...style }}>
      {renderIcon(
        iconFamily,
        name,
        size,
        color,
        label,
        onPress,
        containerStyle,
        iconStyle
      )}
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
  },
  container: {
    position: "absolute",
    zIndex: 1,
  },
});
