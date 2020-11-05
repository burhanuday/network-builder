import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

export interface CardProps {
  style?: StyleProp<ViewStyle>;
}

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
