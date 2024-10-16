import { View, Text } from 'react-native'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
const logo = require("./assets/adaptive-icon.png");

const Image = () => {
  return (
    <View>
     <View style={{ flex: 1 }}>
      <Image source = {logo} style={{width: 300, height:300}} />
     <Image source = {{uri :'https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={{width: 300, height:300}} />
      <StatusBar style="auto"  />
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>Inside</Text>
      </ImageBackground>
    </View>
    </View>
  )
}

export default Image