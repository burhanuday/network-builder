import * as React from "react";
import { StyleSheet, View } from "react-native";

export interface RowProps {}

const Row: React.FC<RowProps> = (props) => {
  return <View style={styles.row}>{props.children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

export default Row;
