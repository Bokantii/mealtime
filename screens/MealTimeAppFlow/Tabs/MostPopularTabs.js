import React from 'react'
import { Pressable,View ,StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MostPopularBreakFastScreen from '../MealScreens/MostPopularScreens/MostPopularBreakFastScreen';
import MostPopularLunchScreen from '../MealScreens/MostPopularScreens/MostPopularLunchScreen';
import MostPopularDinnerScreen from '../MealScreens/MostPopularScreens/MostPopularDinnerScreen';
import MostPopularDessertScreen from '../MealScreens/MostPopularScreens/MostPopularDessertScreen';
import MostPopularSnackScreen from '../MealScreens/MostPopularScreens/MostPopularSnackScreen';
import { Colors } from '../../../util/Colors';
const Tab = createBottomTabNavigator();
//MOST POPULAR
function MostPopularTabs({ route, navigation }) {
    
    const initialRouteName = route?.params?.initialRouteName || "Breakfast";
    function navBack() {
      navigation.goBack();
      console.log("navigating back...");
    }
    return (
      <View style={styles.mostPopularTabscontainer}>
        <Pressable onPress={navBack} style={styles.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
  
        <Tab.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen
            name="Breakfast"
            component={MostPopularBreakFastScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <MaterialIcons
                    name="free-breakfast"
                    size={24}
                    color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                  />
                );
              },
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: Colors.unfocused,
            }}
          />
          <Tab.Screen
            name="Lunch"
            component={MostPopularLunchScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <MaterialIcons
                    name="lunch-dining"
                    size={24}
                    color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                  />
                );
              },
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: Colors.unfocused,
            }}
          />
          <Tab.Screen
            name="Dinner "
            component={MostPopularDinnerScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <MaterialIcons
                    name="dinner-dining"
                    size={24}
                    color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                  />
                );
              },
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: Colors.unfocused,
            }}
          />
          <Tab.Screen
            name="Snacks"
            component={MostPopularSnackScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <MaterialCommunityIcons
                    name="food-hot-dog"
                    size={24}
                    color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                  />
                );
              },
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: Colors.unfocused,
            }}
          />
          <Tab.Screen
            name="Desserts"
            component={MostPopularDessertScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <MaterialIcons
                    name="cake"
                    size={24}
                    color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                  />
                );
              },
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: Colors.unfocused,
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }

export default MostPopularTabs

const styles=StyleSheet.create({
    mostPopularTabscontainer: {
        flex: 1,
        backgroundColor: Colors.bodybgColor,
      },
      container: {
        flex: 1,
        backgroundColor: Colors.bodybgColor,
      },
      goBack: {
        marginTop: 30,
        padding: 30,
        alignSelf: "flex-start", // Aligns the arrow to the start
      },
      
      recentlyCreatedMealsTabscontainer: {
        flex: 1,
        backgroundColor: Colors.bodybgColor,
      },
      recommendedMealPlanTabscontainer: {
        flex: 1,
        backgroundColor: Colors.bodybgColor,
      },
})