import * as React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export type RowProps = ViewProps;

const Row: React.FC<RowProps> = (props) => {
  return <View style={[styles.row, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

export default Row;
