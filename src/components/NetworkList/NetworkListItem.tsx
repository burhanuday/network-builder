import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../UI/Card";
import Row from "../UI/Row";

import { NetworkItem } from "../../interfaces/NetworkItem";
import TypeIcon from "./TypeIcon";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../screens/Home";

export interface NetworkListItemProps {
  item: NetworkItem;
  navigation: HomeScreenNavigationProp;
}

const NetworkListItem: React.FC<NetworkListItemProps> = ({
  item,
  navigation,
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.push("CommunityDetail", { networkItem: item });
      }}
    >
      <Card style={styles.card}>
        <Row>
          <View style={styles.votesContainer}>
            <Text
              style={{
                color: item.votes >= 0 ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {item.votes}
            </Text>
          </View>
          <View style={styles.metadataContainer}>
            <Row>
              <Text style={styles.communityTitle}>{item.communityTitle}</Text>
              <TypeIcon type={item.type} />
            </Row>
            <Text style={styles.communityDescription}>
              {item.communityDescription}
            </Text>
          </View>
        </Row>
      </Card>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  votesContainer: {
    flex: 0.14,
    justifyContent: "center",
    alignItems: "center",
  },
  metadataContainer: {
    flex: 1,
    paddingRight: 10,
  },
  communityTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.8)",
  },
  communityDescription: {
    fontWeight: "200",
    color: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default NetworkListItem;
