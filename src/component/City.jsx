import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.cityContainer}>
          <Text style={styles.cityName}>London</Text>
          <Text style={styles.countryName}>UK</Text>
        </View>

        <View style={styles.wrapper}>
          <View style={styles.sunriseWrapper}>
            <Feather name="sunrise" size={40} color="white" />
            <Text style={styles.time}>10:46:56am</Text>
          </View>
          <View style={styles.sunriseWrapper}>
            <Feather name="sunset" size={40} color="white" />
            <Text style={styles.time}>10:46:56pm</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default City;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  cityContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  cityName: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  countryName: {
    fontSize: 30,
    color: "white",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  sunriseWrapper: {
    alignItems: "center",
  },
  time: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },
});