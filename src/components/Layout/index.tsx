import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const Layout: React.FC = (props: any) => {
  return (
    <View style={styles.layout}>
      {props.children}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    position: "relative",
  },
});

export default Layout;
