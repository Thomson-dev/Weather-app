import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CurrentWeather () {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="weather-cloudy"
          size={100}
          color="black"
        />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feel like 5</Text>
        <View style={styles.wrapper}>
          <Text style={styles.HighLow}>High: 8 </Text>
          <Text style={styles.HighLow}>Low: 6 </Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}> Its Sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "skyblue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  HighLow: {
    color: "black",
    fontSize: 20,
  },
  wrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    paddingLeft: 10,
    alignItems: "flex-start",
    marginBottom: 40
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
