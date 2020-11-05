import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NetworkItem } from "../interfaces/NetworkItem";
import CommunityDetail from "../screens/CommunityDetail";
import Home from "../screens/Home";

export type RootStackParamList = {
  Home: undefined;
  CommunityDetail: { networkItem: NetworkItem };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Network Builder" }}
        />
        <Stack.Screen
          name="CommunityDetail"
          component={CommunityDetail}
          options={{ title: "Community Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
