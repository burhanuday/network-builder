import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import NetworkList from "../../components/NetworkList";
import FAB from "../../components/UI/FAB";
import Row from "../../components/UI/Row";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { Ionicons } from "@expo/vector-icons";

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = (props) => {
  const handleFabPressed = () => {
    props.navigation.push("SubmitNew");
  };

  return (
    <Layout>
      <NetworkList navigation={props.navigation} />

      <FAB onPress={handleFabPressed}>
        <Row style={styles.row}>
          <Ionicons name="ios-add" size={32} color="white" />
          <Text style={styles.fabText}>Submit</Text>
        </Row>
      </FAB>
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "center",
    alignItems: "center",
  },
  fabText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default Home;
