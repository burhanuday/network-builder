import * as React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface ButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: props.backgroundColor },
        props.style,
      ]}
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
