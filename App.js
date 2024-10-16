import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import CurrentWeather from "./src/component/CurrentWeather";
import UpcomingWeather from "./src/component/UpcomingWeather";
import City from "./src/component/City";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "lightblue",
            borderTopWidth: 0,
            elevation: 5,
            height: 60,
            paddingBottom: 10,
          },

          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "tomato",
          },
        }}
      >
        <Tab.Screen
          name="CurrentWeather"
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="UpcomingWeather"
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="City"
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
