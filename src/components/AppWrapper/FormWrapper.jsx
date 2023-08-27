import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Box from "../Box";
import { SPACE_XXLARGE } from "../../constants/Layouts";

const FormWrapper = ({ children, ...restprops }) => {
  return (
    <Box flex pb={SPACE_XXLARGE} spaceBetween {...restprops}>
      {children}
    </Box>
  );
};

export default FormWrapper;

const styles = StyleSheet.create({});
