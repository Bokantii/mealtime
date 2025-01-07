import React from "react";
import { View, Text, Image, Pressable, FlatList, Animated } from "react-native";
import { MealContext } from "../../store/meals-context";
import { StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const renderCookWare = ({ item }) => {
  return <Text style={styles.cookwareItem}>{item}</Text>;
};
//Cookware Screen
const CookwareScreen = ({ route }) => {
  const { cookware } = route.params;

  return (
    <View style={styles.tabContent}>
      {cookware && cookware.length > 0 ? (
        <FlatList
          data={cookware}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCookWare}
        />
      ) : (
        <Text>No Cookware Listed</Text>
      )}
    </View>
  );
};
//Ingredients Screen
const IngredientScreen = ({ route }) => {
  const { ingredientsId, ingredientQtyId } = route.params;
  return (
    <View style={styles.tabContent}>
      {ingredientsId && ingredientsId.length > 0 ? (
        ingredientsId.map((item, index) => (
          <View key={index} style={styles.ingredientRow}>
            <Text style={styles.ingredientName}>{item}</Text>
            <Text style={styles.ingredientQty}>{ingredientQtyId[index]}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>No Ingredient Listed</Text>
      )}
    </View>
  );
};
// Instruction Screen
const InstructionScreen = ({ route }) => {
  const { instructions, ingredientsId,ingredientQtyId } = route.params;
  console.log("Instructions:", instructions);
  console.log("Ingredients:", ingredientsId);

  return (
    <View style={styles.tabContent}>
      {instructions && instructions.length > 0 ? (
        instructions.map((step, index) => (
          <View key={index} style={styles.cookingSteps}>
            <View style={styles.cookingStepIndex}>
              <Text style={styles.cookingStepIndexText}>{index + 1}</Text>
            </View>
            <View style={styles.instructionStep}>
              <Text style={styles.instructionStepText}>{step}</Text>
              {ingredientsId && ingredientsId.length > 0 ? (
                ingredientsId.map((ingredient, i) => (
                  <Text key={i} style={styles.ingredientText}>
                    {ingredient}
                  </Text>
                ))
              ) : (
                <Text style={styles.emptyText}>No ingredient</Text>
              )}
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>No instruction listed</Text>
      )}
    </View>
  );
};


const Tab = createMaterialTopTabNavigator();
const MealDetail = ({ route, navigation }) => {
  const {
    id,
    title,
    imgUrl,
    duration,
    numOfServings,
    ingredientsId,
    ingredientQtyId,
    cookware,
    instructions,
    isPro,
    mealCategory,
    description,
    tags,
  } = route.params;

  function goBack() {
    navigation.goBack();
  }
  console.log("number of servings:" + numOfServings);
  console.log("cookware:" + cookware);
  console.log("Route Params:" + route.params);
  return (
    <View style={styles.container}>
      <View style={styles.cookedStatus}>
        <View style={styles.cookedStatusContent}>
          <Pressable style={[styles.cookedStatusBtn, styles.cooked]}>
            <Text style={styles.cooked_text}>Cooked?</Text>
          </Pressable>
          <Pressable style={[styles.cookedStatusBtn, styles.startCooking]}>
            <Text style={styles.startCooking_text}>Start Cooking</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.largeImg}>
        <Image source={{ uri: imgUrl }} style={styles.img} />
        <View style={styles.largeImgContent}>
          <Pressable style={styles.icon} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Pressable style={styles.icon}>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="black"
              style={styles.menu}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.content_header}>
          <Text style={styles.title}>{title}</Text>
          <Pressable>
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.meal_info}>
          <Text style={styles.duration}>{duration} minutes-</Text>
          <Text style={styles.numOfServings}>-{numOfServings} servings</Text>
        </View>
        {/* Tab Navigating */}
        <View style={styles.tabNavigator}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: "#666",
              tabBarIndicatorStyle: { backgroundColor: Colors.mealTimePrimary },
              tabBarLabelStyle: { fontWeight: "bold" },
            }}
          >
            <Tab.Screen
              name="Cookware"
              component={CookwareScreen}
              initialParams={{ cookware }}
            />
            <Tab.Screen
              name="Ingredients"
              component={IngredientScreen}
              initialParams={{ ingredientQtyId, ingredientsId }}
            />
            <Tab.Screen
              name="Instructions"
              component={InstructionScreen}
              initialParams={{ instructions }}
            />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  cookedStatus: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 40,
    paddingBottom: 30,
    paddingTop: 15,
    borderRadius: 14,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 500,
  },
  cookedStatusContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cookedStatusBtn: {
    textAlign: "center",
    borderWidth: 1,
    padding: 20,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  img: {
    width: "100%",
    // height: "70%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    width: "90%",
  },
  duration: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
  },
  largeImg: {
    position: "relative",
  },
  largeImgContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: 10,
  },

  numOfServings: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    width: "100%",
  },
  content_header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cookwareItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 10,
    marginVertical: 4,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  meal_info: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  startCooking: {
    backgroundColor: Colors.mealTimePrimary,
    borderWidth: 0,
    width: "55%",
  },
  startCooking_text: {
    color: "black",
    fontWeight: "bold",
  },
  cooked: {
    width: "40%",
    borderColor: "#666666",
  },
  cooked_text: {
    fontWeight: "bold",
  },
  tabContent: {
    flex: 1,
    padding: 0,
    width: "100%",
    backgroundColor: Colors.bodybgColor,
  },
  ingredientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  ingredientName: {
    fontSize: 18,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 10,
    marginVertical: 4,
  },
  ingredientQty: {
    fontSize: 15,
    color: "#666",
    paddingVertical: 10,
    marginVertical: 4,
    borderBottomColor: "#cccccc",
  },
  instructionStep: {
    // fontSize: 16,
    // marginBottom: 10,

    // paddingVertical: 10,
    // marginVertical: 4,
    marginTop: 0,
    // borderBottomColor: "#cccccc",
    // borderWidth: 1,
    // borderColor: "pink",
    width: "95%",
    flexWrap: "wrap",
  },
  instructionStepText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    width: "100%",
    padding: 0,
  },
  cookingStepIndex: {
    // borderColor: "red",
    width: "5%",
  },
  cookingStepIndexText: {
    fontSize: 20,
    color: "#999999",
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  cookingSteps: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: 15,
  },
  tabNavigator: {
    flex: 1,
    marginTop: 40,
  },
  ingredientText:{
    color:'red'
  }
});
