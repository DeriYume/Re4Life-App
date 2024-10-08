import React from "react";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface ModeSelectionProps {
  modeName: string;
  imageSource: any;
  navigateTo: string;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ modeName, imageSource, navigateTo, }) => {
  return (
    <View style={Styles.modeContainer}>
      <Text style={Styles.modeText}>{modeName}</Text>
      <TouchableOpacity onPress={() => router.push(navigateTo)}>
        <Image style={Styles.modeImage} source={imageSource} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
    modeContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  modeImage: {
    margin: 10,
  },
  modeText: {
    fontSize: 16,
    color: '#5A656C',
    fontWeight: 'bold',
    marginVertical: 5
  },
});

export default ModeSelection;
