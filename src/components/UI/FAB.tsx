import * as React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Button from "./Button";

export interface FABProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

const FAB: React.FC<FABProps> = (props) => {
  return (
    <View style={styles.container}>
      <Button style={[styles.fab, props.style]} onPress={props.onPress}>
        {props.children}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    minHeight: 48,
    minWidth: 84,
    borderRadius: 30,
    backgroundColor: "#3498db",
    elevation: 8,
  },
  container: {
    zIndex: 90,
    position: "absolute",
    bottom: 24,
    right: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FAB;
