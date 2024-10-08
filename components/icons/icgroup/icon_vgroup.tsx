import React from "react";
import { View, Image, StyleSheet } from "react-native";

const VerticalGroupIcons = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.icon} source={require("../../../assets/icon_rec.png")} />
            <Image style={styles.icon} source={require("../../../assets/icon_mic.png")} />
            <Image style={styles.icon} source={require("../../../assets/icon_gallery.png")} />
        </View>
        <View>
            <Image style={styles.icon} source={require("../../../assets/icon_stop.png")} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    margin: 10,
    width: 40,
    height: 40
  }
});

export default VerticalGroupIcons;
