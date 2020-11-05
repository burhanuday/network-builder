import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const Layout: React.FC = (props: any) => {
  return (
    <View>
      {props.children}
      <StatusBar style="auto" />
    </View>
  );
};

export default Layout;
