import React from "react";
import { View, StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { RECENTLY_CREATED_SNACKS } from "../../../../models/mealCategories/recentlyCreated/snackClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
const MostPopularBreakFastScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={RECENTLY_CREATED_SNACKS}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recently Created Snack Options"}
        numColumns={2}
      />
    </View>
  );
};

export default MostPopularBreakFastScreen;

const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})