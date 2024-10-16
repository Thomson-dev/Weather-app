import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
const logo = require("./assets/adaptive-icon.png");
export default function App() {

  const handlePress = () => {
    alert("Button Pressed!");
  };

  const handlePressImage = () => {
    alert("Image Pressed!");
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
   

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
      <Pressable onPress={handlePressImage}>
          <Image source={logo} style={{ width: 300, height: 300 }} />
        </Pressable>
      <Button title="Press Me" onPress={handlePress} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     
        
        </Text>
        <Button title="Show Modal" onPress={() => setModalVisible(true)} />
        <Modal
          animationType="slide"
         
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text  >Hello, I am a modal!</Text>
            <Button title="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
        {loading && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  }
});
