import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import SettingsScreen from '../../app/settingsScreen';

const Settings = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
      <TouchableOpacity onPress={() => setSettingsVisible(true)} style={styles.iconContainer} >
        <Image source={require("../../assets/icon_settings.png")} style={styles.iconImage} />
        <SettingsScreen visible={settingsVisible} onClose={() => setSettingsVisible(false)} />
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

export default Settings;