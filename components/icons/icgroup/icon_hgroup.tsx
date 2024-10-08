import React from "react";
import { View, StyleSheet } from "react-native";
import Back from "../icon_back";
import ScanArea from "../icon_scan";
import Location from "../icon_location";
import Battery from "../icon_battery";
import Settings from "../icon_settings";

const HorizontalGroupIcons = () => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.leftSection}>
        <Back />
      </View>
      <View style={styles.middleSection}>
        {/* <ScanArea /> */}
      </View>
      <View style={styles.rightSection}>
        <Location />
        {/* <Battery /> */}
        <Settings />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    iconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  leftSection: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  middleSection: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightSection: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default HorizontalGroupIcons;