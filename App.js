import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/AuthScreens/SignUp";
import Login from "./screens/AuthScreens/Login";
import { Colors } from "./util/Colors";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./store/authContext";
import MealPlan from "./screens/MealTimeAppFlow/MealPlan";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import AuthContextProvider from "./store/authContext";
import IconButton from "./components/ui/IconButton";
import Favourite from "./screens/MealTimeAppFlow/Favourite";
import Groceries from "./screens/MealTimeAppFlow/Groceries";
import Meals from "./screens/MealTimeAppFlow/Meals";
import Settings from "./screens/MealTimeAppFlow/Settings";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BreakfastMainScreen from "./screens/MealTimeAppFlow/MealScreens/BreakfastMainScreen";
import DessertsMainScreen from "./screens/MealTimeAppFlow/MealScreens/DessertsMainScreen";
import DinnerMainScreen from "./screens/MealTimeAppFlow/MealScreens/DinnerMainScreen";
import LunchMainScreen from "./screens/MealTimeAppFlow/MealScreens/LunchMainScreen";
import SnacksMainScreen from "./screens/MealTimeAppFlow/MealScreens/SnacksMainScreen";
import MostPopularBreakFastScreen from "./screens/MealTimeAppFlow/MealScreens/MostPopularScreens/MostPopularBreakFastScreen";
import MostPopularLunchScreen from "./screens/MealTimeAppFlow/MealScreens/MostPopularScreens/MostPopularLunchScreen";
import MostPopularDinnerScreen from "./screens/MealTimeAppFlow/MealScreens/MostPopularScreens/MostPopularDinnerScreen";
import MostPopularSnackScreen from "./screens/MealTimeAppFlow/MealScreens/MostPopularScreens/MostPopularSnackScreen";
import MostPopularDessertScreen from "./screens/MealTimeAppFlow/MealScreens/MostPopularScreens/MostPopularDessertScreen";
import RecentlyCreatedBreakFastScreen from "./screens/MealTimeAppFlow/MealScreens/RecentlyCreatedScreens/RecentlyCreatedBreakFastScreen";
import RecentlyCreatedDessertScreen from "./screens/MealTimeAppFlow/MealScreens/RecentlyCreatedScreens/RecentlyCreatedDessertScreen";
import RecentlyCreatedDinnerScreen from "./screens/MealTimeAppFlow/MealScreens/RecentlyCreatedScreens/RecentlyCreatedDinnerScreen";
import RecentlyCreatedLunchScreen from "./screens/MealTimeAppFlow/MealScreens/RecentlyCreatedScreens/RecentlyCreatedLunchScreen";
import RecentlyCreatedSnackScreen from "./screens/MealTimeAppFlow/MealScreens/RecentlyCreatedScreens/RecentlyCreatedSnackScreen";
import RecommendedPlanBreakFastScreen from "./screens/MealTimeAppFlow/MealScreens/RecommendedPlanScreens/RecommendedPlanBreakFastScreen";
import RecommendedPlanLunchScreen from "./screens/MealTimeAppFlow/MealScreens/RecommendedPlanScreens/RecommendedPlanLunchScreen";
import RecommendedPlanDinnerScreen from "./screens/MealTimeAppFlow/MealScreens/RecommendedPlanScreens/RecommendedPlanDinnerScreen";
import RecommendedPlanDessertScreen from "./screens/MealTimeAppFlow/MealScreens/RecommendedPlanScreens/RecommendedPlanDessertScreen";
import RecommendedPlanSnackScreen from "./screens/MealTimeAppFlow/MealScreens/RecommendedPlanScreens/RecommendedPlanSnackScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: Colors.mealTimePrimary },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.mealTimePrimary },
        headerTintColor: "black",
        contentStyle: { backgroundColor: Colors.primary100 },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          // headerRight: ({ tintColor }) => (
          //   <IconButton
          //     icon={"log-out-outline"}
          //     color={"black"}
          //     size={24}
          //     onPress={authCtx.logout}
          //   />
          // ),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MealPlan"
        component={MealPlan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MostPopularTabs"
        component={MostPopularTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecentlyCreatedMealsTabs"
        component={RecentlyCreatedMealsTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecommendedPlanTabs"
        component={RecommendedPlanTabs}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer style={styles.container}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}
const TabNavigator = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.mealTimePrimary },
        headerTintColor: "black",
        contentStyle: { backgroundColor: Colors.mealTimePrimary },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"log-out-outline"}
            color={"black"}
            size={24}
            onPress={authCtx.logout}
          />
        ),
      }}
    >
      <Tab.Screen
        name="MealPlan"
        component={MealPlan}
        options={{
          title: "Meal Plan",
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="food-bank"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          title: "Groceries",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="storefront-outline"
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
        name="Favourites"
        component={Favourite}
        options={{
          title: "Favourites",
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="favorite"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          // headerShown:false
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
function MyTabs({ route }) {
  const initialRouteName = route?.params?.initialRouteName || "Breakfast";
  return (
    <Tab.Navigator initialRouteName={initialRouteName}>
      <Tab.Screen name="Breakfast" component={BreakfastMainScreen} />
      <Tab.Screen name="Lunch" component={LunchMainScreen} />
      <Tab.Screen name="Dinner" component={DinnerMainScreen} />
      <Tab.Screen name="Snacks" component={SnacksMainScreen} />
      <Tab.Screen name="Desserts" component={DessertsMainScreen} />
    </Tab.Navigator>
  );
}
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
// RECENTLY CREATED
function RecentlyCreatedMealsTabs({ route, navigation }) {
  function navBack() {
    navigation.goBack();
    console.log("navigating back...");
  }
  const initialRouteName = route?.params?.initialRouteName || "Breakfast";
  return (
    <View style={styles.recentlyCreatedMealsTabscontainer}>
      <Pressable onPress={navBack} style={styles.goBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown:false}}
      >
        <Tab.Screen
          name="Breakfast"
          component={RecentlyCreatedBreakFastScreen}
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
          component={RecentlyCreatedLunchScreen}
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
          component={RecentlyCreatedDinnerScreen}
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
          component={RecentlyCreatedSnackScreen}
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
          component={RecentlyCreatedDessertScreen}
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
//RECOMMENDED PLAN
function RecommendedPlanTabs({ route, navigation }) {
  function navBack() {
    navigation.goBack();
    console.log("navigating back...");
  }
  const initialRouteName = route?.params?.initialRouteName || "Breakfast";
  return (
    <Tab.Navigator initialRouteName={initialRouteName}>
      <Tab.Screen name="Breakfast" component={RecommendedPlanBreakFastScreen} />
      <Tab.Screen name="Lunch" component={RecommendedPlanLunchScreen} />
      <Tab.Screen name="Dinner " component={RecommendedPlanDinnerScreen} />
      <Tab.Screen name="Snacks" component={RecommendedPlanSnackScreen} />
      <Tab.Screen name="Desserts" component={RecommendedPlanDessertScreen} />
    </Tab.Navigator>
  );
}
function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        if (typeof authCtx.authenticate === "function") {
          authCtx.authenticate(storedToken);
        } else {
          console.error(
            "authCtx.authenticate is not a function:",
            authCtx.authenticate
          );
        }
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);
  if (isTryingLogin) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary500} />
      </View>
    );
  }
  return <Navigation />;
}

export default function App() {
  return (
    <View style={styles.container}>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  goBack: {
    marginTop: 30,
    padding: 30,
    alignSelf: "flex-start", // Aligns the arrow to the start
  },
  mostPopularTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  recentlyCreatedMealsTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  recommendedMealPlanTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
});
