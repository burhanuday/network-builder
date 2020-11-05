import * as React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface ButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 7,
  },
});

export default Button;
