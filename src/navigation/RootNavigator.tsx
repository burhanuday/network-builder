import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CommunityDetail from "../screens/CommunityDetail";
import Home from "../screens/Home";
import SubmitNew from "../screens/SubmitNew/SubmitNew";

import { NetworkItem } from "../interfaces/NetworkItem";

export type RootStackParamList = {
  Home: undefined;
  CommunityDetail: { networkItem: NetworkItem };
  SubmitNew: undefined;
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
        <Stack.Screen
          name="SubmitNew"
          component={SubmitNew}
          options={{ title: "Submit Community" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
