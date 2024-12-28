import React from "react";
import { View, StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
import { RECENTLY_CREATED_DINNER } from "../../../../models/mealCategories/recentlyCreated/dinnerClass";
const RecentlyCreatedDinnerScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={RECENTLY_CREATED_DINNER}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recently Created Dinner Options"}
        numColumns={2}
      />
    </View>
  );
};

export default RecentlyCreatedDinnerScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})