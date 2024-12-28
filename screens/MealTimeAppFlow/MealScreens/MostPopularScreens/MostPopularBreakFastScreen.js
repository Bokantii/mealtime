import React from "react";
import { View,StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_BREAKFAST } from "../../../../models/mealCategories/mostPopular/breakfastClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
const MostPopularBreakFastScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_BREAKFAST}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular Breakfast Options"}
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