import React from "react";
import { View, Text } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_BREAKFAST } from "../../../../models/mealCategories/mostPopular/breakfastClass";
import Card from "../../../../components/ui/Card";
const MostPopularBreakFastScreen = () => {
  function renderCard({ item }) {
    return <Card title={item.title} imgUrl={item.imgUrl} />;
  }
  return (
    <View>
      <FlatListVertical
        data={MOST_POPULAR_BREAKFAST}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular"}
        numColumns={2}
      />
    </View>
  );
};

export default MostPopularBreakFastScreen;
