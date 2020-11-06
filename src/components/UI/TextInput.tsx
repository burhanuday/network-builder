import * as React from "react";
import { StyleSheet, TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({
  onChangeText,
  value,
  style,
  numberOfLines,
  multiline,
  placeholder,
}) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      onChangeText={onChangeText}
      value={value}
      numberOfLines={numberOfLines}
      multiline={multiline}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#eee",
    fontSize: 16,
  },
});

export default Input;
