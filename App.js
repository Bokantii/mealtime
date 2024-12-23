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
import { Ionicons } from "@expo/vector-icons";
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
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon={"log-out-outline"}
              color={"black"}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MealPlan"
        component={MealPlan}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon={"log-out-outline"}
              color={"black"}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Meals"
        component={Meals}
        options={{
          headerShown:false,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon={"log-out-outline"}
              color={"black"}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
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
        }}
      />
    </Tab.Navigator>
  );
};
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
});
