import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Battery = () => {
  return (
    <View style={styles.iconContainer}>      
      <Image source={require("../../assets/icon_battery.png")} style={styles.iconImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    margin: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Battery;