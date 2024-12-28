import React from "react";
import { View,StyleSheet } from "react-native";
import { MOST_POPULAR_LUNCH } from "../../../../models/mealCategories/mostPopular/lunchClass";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { Colors } from "../../../../util/Colors";
const MostPopularLunchScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_LUNCH}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular Lunch Options"}
        numColumns={2}
      />
    </View>
  );
};

export default MostPopularLunchScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})