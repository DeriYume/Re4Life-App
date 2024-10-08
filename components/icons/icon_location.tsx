import React from "react";
import { router } from "expo-router";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const Location = () => {
  return (
    <TouchableOpacity onPress={() => router.push("/newLocationScreen")} style={styles.iconContainer}>
      <Image source={require("../../assets/icon_location.png")} style={styles.iconImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    margin: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
});

export default Location;