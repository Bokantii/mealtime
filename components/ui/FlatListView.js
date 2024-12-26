import { FlatList, View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FlatListView = ({
  title,
  data,
  renderItem,
  keyExtractor,
  horizontal,
  screenName,
  navScreen
}) => {
  const navigation = useNavigation();
  function seeAll(navScreenName) {
    if (screenName) {
      navigation.navigate( navScreenName, {
        screen: screenName,
      });
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {screenName && navScreen && (
          <Pressable onPress={()=>seeAll(navScreen)}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        )}
      </View>
      {/* FlatList Section */}
      {data && data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
        />
      ) : (
        <Text>No Items available</Text>
      )}
    </View>
  );
};

//Default Props
FlatListView.defaultProps = {
  horizontal: false,
  data: [],
  renderItem: () => null,
  keyExtractor: (item, index) => index.toString(),
};

export default FlatListView;

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    seeAll: {
      fontSize: 14,
      color: "#f58700",
      textDecorationLine: "underline",
    },
    list: {
      paddingHorizontal: 10,
    },
    emptyMessage: {
      textAlign: "center",
      color: "gray",
      marginTop: 10,
      fontSize: 16,
    },
  });
