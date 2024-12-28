import React from "react";
import { View, StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { RECENTLY_CREATED_BREAKFAST } from "../../../../models/mealCategories/recentlyCreated/breakfastClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
const RecentlyCreatedBreakFastScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={RECENTLY_CREATED_BREAKFAST}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recently Created Breakfast Options"}
        numColumns={2}
      />
    </View>
  );
};

export default RecentlyCreatedBreakFastScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})