import React from 'react';
import { router } from "expo-router";
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Back = () => {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.iconContainer}>
      <Image source={require("../../assets/icon_back.png")} style={styles.iconImage} />
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

export default Back;