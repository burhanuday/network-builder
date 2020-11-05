import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, View } from "react-native";
import Layout from "../../components/Layout";
import NetworkList from "../../components/NetworkList";

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Layout>
      <NetworkList />
    </Layout>
  );
};

export default Home;
