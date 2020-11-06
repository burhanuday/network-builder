import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export interface RowProps {
  style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = (props) => {
  return <View style={[styles.row, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

export default Row;
