import React from "react";
import { View,StyleSheet } from "react-native";
import { MOST_POPULAR_SNACKS } from "../../../../models/mealCategories/mostPopular/snackClass";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { Colors } from "../../../../util/Colors";
const MostPopularSnackScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_SNACKS}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular Snack Options"}
        numColumns={2}
      />
    </View>
  );
};

export default MostPopularSnackScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})