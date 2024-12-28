import React from "react";
import { View,StyleSheet } from "react-native";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_DESSERTS } from "../../../../models/mealCategories/mostPopular/dessertClass";
import { Colors } from "../../../../util/Colors";
const MostPopularDessertScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_DESSERTS}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular Dessert Options"}
        numColumns={2}
      />
    </View>
  );
};

export default MostPopularDessertScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})