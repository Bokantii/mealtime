import React from "react";
import { View,StyleSheet } from "react-native";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_DINNER } from "../../../../models/mealCategories/mostPopular/dinnerClass";
import { Colors } from "../../../../util/Colors";
const MostPopularDinnerScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_DINNER}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular Dinner Options"}
        numColumns={2}
      />
    </View>
  );
};

export default MostPopularDinnerScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})