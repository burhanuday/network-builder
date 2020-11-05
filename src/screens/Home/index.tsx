import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, View } from "react-native";
import Layout from "../../components/Layout";
import NetworkList from "../../components/NetworkList";
import { RootStackParamList } from "../../navigation/RootNavigator";

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <NetworkList navigation={props.navigation} />
    </Layout>
  );
};

export default Home;
