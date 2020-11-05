import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Row from "../../components/UI/Row";
import TypeIcon from "../../components/NetworkList/TypeIcon";

type CommunityDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CommunityDetail"
>;

type CommunityDetailRouteProp = RouteProp<
  RootStackParamList,
  "CommunityDetail"
>;

type Props = {
  navigation: CommunityDetailNavigationProp;
  route: CommunityDetailRouteProp;
};

const CommunityDetail: React.FC<Props> = ({ navigation, route }) => {
  const networkItem = route.params.networkItem;

  return (
    <Layout>
      <View style={styles.layout}>
        <Text style={styles.communityName}>{networkItem.communityTitle}</Text>
        <Text style={styles.category}>{networkItem.category}</Text>
        <Text style={styles.description}>
          {networkItem.communityDescription}
        </Text>

        <View style={styles.bottom}>
          <Button>
            <Row>
              <TypeIcon type={networkItem.type} />
              <Text>Join</Text>
            </Row>
          </Button>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
    flex: 1,
    padding: 12,
  },
  communityName: {
    color: "rgba(0, 0, 0, 0.8)",
    fontWeight: "bold",
    fontSize: 22,
  },
  description: {
    marginTop: 8,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 16,
  },
  category: {
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default CommunityDetail;
