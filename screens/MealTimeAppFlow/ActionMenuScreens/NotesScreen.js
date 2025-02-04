import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../../../util/Colors";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const saveNotes = async (newNotes) => {
    try {
      await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    } catch (error) {
      console.error("Failed to save notes: ", error);
    }
  };
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("notes");
      if (storedNotes) setNotes(JSON.parse(storedNotes));
    } catch (error) {
      console.error("Failed to load notes: ", error);
    }
  };
  const addNote = () => {
    if (text.trim() === "") {
      Alert.alert("Error", "Note cannot be empty!");
      return;
    }
    const newNotes = [...notes, { id: Date.now().toString(), content: text }];
    setNotes(newNotes);
    saveNotes(newNotes);
    setText("");
  };
  const deleteNotes = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    saveNotes(filteredNotes);
  };
  useEffect(() => {
    loadNotes();
  }, []);

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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable style={styles.icon} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Text style={styles.heading}>Notes</Text>
          <Pressable style={styles.icon} onPress={openMenuModal}>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="black"
              style={styles.menu}
            />
          </Pressable>
        </View>
      </View>
      <TextInput
        style={styles.noteTextArea}
        placeholder="Take notes..."
        value={text}
        onChange={setText}
        multiline
      />
      <View style={styles.actionBtns}>
        <TouchableOpacity style={[styles.cancel,styles.actionBtn]}>
          <Text style={styles.actionBtnTxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.save,styles.actionBtn]}>
          <Text style={styles.actionBtnTxt}>Save</Text>
        </TouchableOpacity>
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

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  header: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    paddingTop: 30,
  },
  headerContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    width: "95%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  noteTextArea: {
    paddingHorizontal: 10,
    textAlignVertical: "top",
    padding: 10,
  },
  actionBtn:{
    borderWidth:1,
    padding:25,
    width:'48%',
    borderRadius:15
  },
  actionBtns:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:200,
   
  },
  actionBtnTxt:{
    textAlign:'center',
    color:"black",
    fontWeight:'bold'
  },
  cancel:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ccc'
  },
  save:{
    backgroundColor:Colors.mealTimePrimary,
    borderColor:Colors.mealTimePrimary
  }
});
