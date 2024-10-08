import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ScanAreaIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon_scan.png")} style={styles.iconImage} />
      <Text style={styles.text}>Scan Area</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#66686D',
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
});

export default ScanAreaIcon;