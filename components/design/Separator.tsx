import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SeparatorProps { text: string; }

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <View style={styles.horLineContainer}>
      <View style={styles.Line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.Line} />
    </View>
  );
};

const styles = StyleSheet.create({
  horLineContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  Line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    paddingHorizontal: 10,
    textAlign: "center",
    color: 'black',
  }
});

export default Separator;