import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../assets/re4life.png')} style={styles.logo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: 250,
    height: 100,
    alignSelf: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
  },
});

export default Logo;