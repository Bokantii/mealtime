import React from "react";
import { View, Text } from "react-native";
import FlatListView from "../../../components/ui/FlatListView";
import ScrollViewUI from "../../../components/ui/ScrollViewUI";
const DessertsMainScreen = () => {
  return (
    <View>
      <Text>DessertsMainScreen Page</Text>
      <FlatListView />
      <FlatListView />
      <FlatListView />
    </View>
  );
};

export default DessertsMainScreen;
