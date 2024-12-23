import { StyleSheet, Text, View, Modal } from "react-native";
import { Colors } from "../../util/Colors";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { AuthContext } from "../../store/authContext";

const MealPlan = () => {
  const navigation = useNavigation();
  const { updateMealPlanStatus } = useContext(AuthContext);

  const navigateToMeals = async () => {
    await updateMealPlanStatus(true);
    navigation.navigate("Meals");
  };
  const hasNoMeals = (
    <View style={styles.content}>
      <Text style={styles.title}>Your Personalized Meal Plan</Text>
      <Button isAlternateBtnStyle onPress={navigateToMeals}>
        Build Your First Meal Plan
      </Button>
    </View>
  );
  return <View style={styles.container}>{hasNoMeals}</View>;
};

export default MealPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 35,
    width: 250,
  },
  subTitle: {
    textAlign: "center",
  },
});
