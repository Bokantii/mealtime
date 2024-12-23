import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, Animated,Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Modal } from "react-native";
import { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../store/authContext";
import Button from "../../components/ui/Button";
import { Colors } from "../../util/Colors";
import { BlurView } from "expo-blur";

const Meals = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; //Start opacity at 0
  const translateY = useRef(new Animated.Value(50)).current; //Start below screen

  const navigation = useNavigation();
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
    // if (hasMealPlan) {
    //   navigation.navigate("");
    // }else{}
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>These are the available meals!!</Text>
        <Pressable onPress={navigateHome}>
          <FontAwesome name="times" size={24} color="black" />
        </Pressable>
      </View>
      <Image source={require('./../../assets/Breakfast/french-toast.jpg')} style={styles.img}/>
      <Image source={require('./../../assets/Breakfast/burittos.jpg')} style={styles.img}/>
      <Image source={require('./../../assets/Breakfast/french-toast.jpg')} style={styles.img}/>
      <Image source={require('./../../assets/Breakfast/french-toast.jpg')} style={styles.img}/>
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
                <FontAwesome name="times" size={24} color="#999999" />
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
  },
  content: {
    marginTop: 100,
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
  img:{
    width:100,
    height:100
  }
});
