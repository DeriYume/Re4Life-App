import React from 'react';
import { router } from "expo-router";
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AddRobotIcon = () => {
    return (
    <TouchableOpacity style={styles.addContainer} onPress={() => router.push("/newRobotScreen")} >
        <Image style={{ margin: 5 }} source={require("../../assets/icon_add.png")} />
        <Text style={styles.addText}>Add new robot</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  addContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 10,
    color: '#59646B',
    fontWeight: 'bold',
  },
});

export default AddRobotIcon;