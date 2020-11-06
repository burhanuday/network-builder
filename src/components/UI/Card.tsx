import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

export type CardProps = ViewProps;

const Card: React.FC<CardProps> = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    flex: 0,
    backgroundColor: "white",
  },
});

export default Card;
