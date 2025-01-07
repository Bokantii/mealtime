import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Modal, FlatList } from "react-native";
import { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../store/authContext";
import Button from "../../components/ui/Button";
import { Colors } from "../../util/Colors";
import { BlurView } from "expo-blur";
import Card from "../../components/ui/Card";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FlatListView from "../../components/ui/FlatListView";
import { MOST_POPULAR_DINNER } from "../../models/mealCategories/mostPopular/dinnerClass";
import { RECENTLY_CREATED_BREAKFAST } from "../../models/mealCategories/recentlyCreated/breakfastClass";
import { RECOMMENDED_PLAN_BREAKFAST } from "../../models/mealCategories/recommendedPlan/breakfastClass";
import { MOST_POPULAR_BREAKFAST } from "../../models/mealCategories/mostPopular/breakfastClass";
import { MOST_POPULAR_SNACKS } from "../../models/mealCategories/mostPopular/snackClass";
import ScrollViewUI from "../../components/ui/ScrollViewUI";
import { mealContext } from "../../store/meals-context";

const Meals = () => {
  const renderCard = ({ item }) => {
    return (
      <Card
        id={item.id}
        title={item.title}
        imgUrl={item.imgUrl}
        duration={item.duration}
        numOfServings={item.numOfServings}
        ingredientsId={item.ingredientsId}
        ingredientQtyId={item.ingredientQtyId}
        cookware={item.cookware}
        instructions={item.instructions}
        isPro={item.isPro}
        mealCategory={item.mealCategory}
        description={item.description}
        tags
        onPress={navToDetails}
      />
    );
  };

  const fadeAnim = useRef(new Animated.Value(0)).current; //Start opacity at 0
  const translateY = useRef(new Animated.Value(50)).current; //Start below screen

  const navigation = useNavigation();
  function navToDetails() {
    navigation.navigate("MealDetail");
  }
  const [isPopoverVisible, setIsPopoverVisible] = useState(true);
  const { hasMealPlan } = useContext(AuthContext);

  useEffect(() => {
    if (isPopoverVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1, //Fade in to full opacity
        duration: 500,
        useNativeDriver: true,
      }).start();

      Animated.timing(translateY, {
        toValue: 0, //Move to final position
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isPopoverVisible]);

  const showPopover = () => {
    setIsPopoverVisible(true);
  };
  const hidePopover = () => {
    setIsPopoverVisible(false);
  };
  const navigateHome = () => {
    setIsPopoverVisible(false);
    navigation.goBack();
    console.log("Navigating home...");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateHome} style={{ marginTop: 10 }}>
        <FontAwesome name="times" size={24} color="black" />
      </Pressable>
      <Text style={styles.title}>Build a meal plan</Text>
      <View style={styles.content}>
        <ScrollViewUI
          data1={MOST_POPULAR_BREAKFAST}
          data2={RECENTLY_CREATED_BREAKFAST}
          data3={RECOMMENDED_PLAN_BREAKFAST}
          title1="Most Popular"
          title2="Recently Created"
          title3="Recommended Plan"
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal={true}
          screenName="Breakfast"
          navScreen1={"MostPopularTabs"}
          navScreen2={"RecentlyCreatedMealsTabs"}
          navScreen3={"RecommendedPlanTabs"}
          mealTime="Meals"
        />
      </View>

      {/* Popover Content */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isPopoverVisible}
        onRequestClose={hidePopover}
      >
        <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill}>
          <View style={styles.modalOverlay}>
            <Animated.View
              style={[
                styles.popover,
                { opacity: fadeAnim, transform: [{ translateY }] },
              ]}
            >
              <Pressable onPress={hidePopover} style={styles.cancel}>
                <FontAwesome
                  name="times"
                  size={24}
                  color="#999999"
                  style={{ fontWeight: "100" }}
                />
              </Pressable>
              <Text style={styles.modalTitle}>Build your first meal plan</Text>
              <Text style={styles.modalsubTitle}>
                Add a few recipes to cook this week, and we'll build you an
                easy-to-shop grocery list.
              </Text>
              <Button onPress={hidePopover} isAlternateBtnStyle>
                <Text>Got it!</Text>
              </Button>
            </Animated.View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default Meals;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  content: {
    marginTop: 60,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  //Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  cancel: {
    position: "absolute",
    right: 12,
    top: 10,
  },
  popover: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    paddingVertical: 40,
    alignItems: "center",
    marginTop: 650,
    position: "absolute",
    bottom: -10,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  modalsubTitle: {
    marginBottom: 30,
    width: "80%",
    textAlign: "left",
    alignSelf: "flex-start",
    color: "#666666",
  },
  img: {
    width: 100,
    height: 100,
  },
});
