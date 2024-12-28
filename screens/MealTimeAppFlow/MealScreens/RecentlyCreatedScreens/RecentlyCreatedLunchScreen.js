import React from "react";
import { View, StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { RECENTLY_CREATED_LUNCH } from "../../../../models/mealCategories/recentlyCreated/lunchClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
const RecentlyCreatedLunchScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={RECENTLY_CREATED_LUNCH}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recently Created Lunch Options"}
        numColumns={2}
      />
    </View>
  );
};

export default RecentlyCreatedLunchScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})