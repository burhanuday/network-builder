import * as React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { networkListItemsMockData } from "../../mock/networkListItems";
import { HomeScreenNavigationProp } from "../../screens/Home";
import NetworkListItem from "./NetworkListItem";

export interface NetworkListProps {
  navigation: HomeScreenNavigationProp;
}

const NetworkList: React.FC<NetworkListProps> = (props) => {
  return (
    <View>
      <FlatList
        data={networkListItemsMockData}
        renderItem={({ item }) => (
          <NetworkListItem item={item} navigation={props.navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NetworkList;
