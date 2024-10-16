import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const weatherData = [
  {
    dt_text: "2023-10-01 12:00:00",
    min: 15,
    max: 22,
    condition: "Sunny",
  },
  {
    dt_text: "2023-10-02 12:00:00",
    min: 17,
    max: 24,
    condition: "Cloudy",
  },
  {
    dt_text: "2023-10-03 12:00:00",
    min: 16,
    max: 23,
    condition: "Rainy",
  },
  {
    dt_text: "2023-10-04 12:00:00",
    min: 14,
    max: 20,
    condition: "Windy",
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.date}>{item.dt_text}</Text>
    <Text style={styles.temp}>Min: {item.min}°C</Text>
    <Text style={styles.temp}>Max: {item.max}°C</Text>
    <Text style={styles.condition}>{item.condition}</Text>
  </View>
);

const UpcomingWeather = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Upcoming Weather</Text>
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_text}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'black',
  },
  item: {
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
  },
  temp: {
    fontSize: 16,
    color: 'black',
  },
  condition: {
    fontSize: 16,
    fontStyle: "italic",
    color: 'black',
  },
});