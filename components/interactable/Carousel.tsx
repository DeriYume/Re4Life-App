import React from "react";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <View style={styles.carousel}>
        <TouchableOpacity>
          <Image source={require("../../assets/icon_prev.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/modeSelectionScreen")}>
          <Image source={require("../../assets/chooseRobot.png")} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/icon_next.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Current Robot: HandHelperD31H9</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    alignItems: "center",
    marginBottom: 10
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  image: {
    margin: 15,
  },
  text: {
    fontSize: 14,
    color: '#5A656C',
    fontWeight: 'bold',
  },
});

export default Carousel;