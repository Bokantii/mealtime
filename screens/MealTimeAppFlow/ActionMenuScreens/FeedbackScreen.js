import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

const FeedbackScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
  function startCooking() {
    console.log("Started Cooking");
    navigation.navigate("CookingInstructionScreen", {
      instructions,
      numberOfInstructions,
      ingredientsPerStep: ingredientsId, // Pass ingredient list per step
    });
    console.log(
      "numberOfInstructions before navigating:",
      numberOfInstructions
    );
    setModalVisible(false);
  }
  function goBack() {
    navigation.goBack();
  }
  function openMenuModal() {
    setModalVisible(true);
    console.log("Modal Menu Opened");
  }

  //Navigate to Nutrition Facts
  function navToNutritionFacts() {
    navigation.navigate("NutritionFactsScreen");
    setModalVisible(false);
  }
  //Navigate to Feedback Screen
  function navToFeedBack() {
    navigation.navigate("FeedbackScreen");
    setModalVisible(false);
  }
  //Navigate to Notes
  function navToNotes() {
    navigation.navigate("NotesScreen");
    setModalVisible(false);
  }
  //Navigate to Collections
  function navToCollections() {
    navigation.navigate("SelectCollections");
    setModalVisible(false);
  }
  return (
    <View>
      <Text>FeedbackScreen</Text>
      <View>
        <Pressable style={styles.icon} onPress={goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.icon} onPress={openMenuModal}>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.menu}
          />
        </Pressable>
      </View>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ alignSelf: "flex-end", padding: 10 }}
            >
              <Text style={{ fontSize: 18 }}>✖</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={navToNutritionFacts}
            >
              <View style={styles.modal_content}>
                <AntDesign
                  name="exclamationcircleo"
                  size={18}
                  color="#999999"
                />
                <Text style={styles.modalText}>Nutrition Facts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={startCooking}
            >
              <View style={styles.modal_content}>
                <MaterialCommunityIcons
                  name="timer-settings-outline"
                  size={24}
                  color="#999999"
                />
                <Text style={styles.modalText}>Open Cooking Mode</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={navToNotes}
            >
              <View style={styles.modal_content}>
                <FontAwesome name="sticky-note-o" size={24} color="#999999" />
                <Text style={styles.modalText}>Add Notes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <View style={styles.modal_content}>
                <FontAwesome name="mail-forward" size={24} color="#999999" />
                <Text style={styles.modalText}>Share</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <View style={styles.modal_content}>
                <Ionicons name="print-outline" size={24} color="#999999" />
                <Text style={styles.modalText}>Print</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={navToFeedBack}
            >
              <View style={styles.modal_content}>
                <FontAwesome name="commenting-o" size={24} color="#999999" />
                <Text style={styles.modalText}>Feedback For The Chef</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 15 }}
              onPress={navToCollections}
            >
              <View style={styles.modal_content}>
                <Feather name="folder-plus" size={24} color="#999999" />
                <Text style={styles.modalText}>Add To Collections</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FeedbackScreen;

const styles=StyleSheet.create()