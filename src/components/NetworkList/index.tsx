import * as React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { networkListItemsMockData } from "../../mock/networkListItems";
import NetworkListItem from "./NetworkListItem";

export interface NetworkListProps {}

const NetworkList: React.FC<NetworkListProps> = (props) => {
  return (
    <View>
      <FlatList
        data={networkListItemsMockData}
        renderItem={NetworkListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NetworkList;
