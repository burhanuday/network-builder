import * as React from "react";
import { Picker } from "@react-native-community/picker";
import { PickerProps } from "@react-native-community/picker/typings/Picker";

export type PickerItem = {
  label: string;
  value: any;
  key: any;
};

export interface SelectProps extends PickerProps {
  options: PickerItem[];
}

const Select: React.FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <Picker {...rest}>
      {options.map((item) => (
        <Picker.Item key={item.key} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default Select;
